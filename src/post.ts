type TranscriptEntryResult = {
  caption: string;
  link: string;
  title: string;
  timeStamp: number;
};

import { Pinecone } from "@pinecone-database/pinecone";
import OpenAI from "openai";
import { OPENAI_KEY, PINECONE_KEY } from "./env";

const openai = new OpenAI({
  apiKey: OPENAI_KEY,
});

const pc = new Pinecone({
  apiKey: PINECONE_KEY,
});

const checkIndexExist = async (indexName: string) => {
  const { indexes = [] } = await pc.listIndexes();
  const doesIndexExist = indexes.reduce((result, index) => {
    return result || index.name === indexName;
  }, false);

  return doesIndexExist;
};

const queryResult = async (username: string, userInput: string) => {
  const indexName = "youtube";
  console.log(`-------\nNow asking @${username}: \n\n${userInput}:\n`);
  console.log(`...`);

  const doesIndexExist = await checkIndexExist(indexName);
  if (!doesIndexExist) {
    console.log(`${indexName} - index does not exist`);
    return [];
  }
  const pcIndex = pc.index<TranscriptEntryResult>(indexName);

  const questionEmbeddingResult = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: userInput,
  });

  const embedding = questionEmbeddingResult.data[0].embedding;

  const { matches } = await pcIndex.namespace(username).query({
    topK: 10,
    vector: embedding,
    includeValues: false,
    includeMetadata: true,
  });

  const results = matches.map(({ metadata }) => metadata).filter((a) => a);

  return results;
};

export const aggregateTranscriptsResults = (
  transcriptResults: (TranscriptEntryResult | undefined)[]
) => {
  const transcriptCollection: Record<
    string,
    { link: string; title: string; timeStamps: number[] }
  > = {};
  const transcriptUrlList: string[] = [];

  transcriptResults
    .filter((a) => a)
    .forEach((transcriptEntry) => {
      if (!transcriptEntry) {
        return;
      }
      if (!transcriptUrlList.includes(transcriptEntry.link)) {
        transcriptUrlList.push(transcriptEntry.link);
        transcriptCollection[transcriptEntry.link] = {
          link: transcriptEntry.link,
          title: transcriptEntry.title,
          timeStamps: [],
        };
      }

      transcriptCollection[transcriptEntry.link].timeStamps.push(
        transcriptEntry.timeStamp
      );
    });

  return transcriptUrlList.map((url) => transcriptCollection[url]);
};

const formatMessage = async (
  input: string,
  results: (TranscriptEntryResult | undefined)[]
) => {
  const context = results
    .map((result) => {
      return result?.caption;
    })
    .join("\n\n");

  const result = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `Answer the users questions based on the following context: ${context}`,
      },
      { role: "user", content: `Can you tell me more about ${input}` },
    ],
    temperature: 0.7,
    top_p: 1,
  });

  return result.choices[0].message.content;
};

export const handler = async (event: any) => {
  const { body } = event;

  if (!body) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        summary: ``,
        clips: [],
      }),
    };
  }
  const { question = "", username = "" } = JSON.parse(body);

  if (!question || !username) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        summary: ``,
        clips: [],
      }),
    };
  }

  console.log({ question, username });
  const results = await queryResult(username, question);
  console.log({ results });

  const summary = await formatMessage(question, results);
  console.log({ summary });
  const clips = aggregateTranscriptsResults(results);
  console.log({ clips });
  return {
    statusCode: 200,
    body: JSON.stringify({
      summary,
      clips,
    }),
  };
};
