export const PageTips = () => {
  return (
    <>
      <p className="mb-4 text-gray-600 text-sm text-center">A couple tips:</p>
      <ul className="mb-10 text-gray-600 text-sm list-disc ">
        <li className="mb-2">
          Phrase the question directly to the Youtube Creator. Since they
          normally talk in 1st person, questions are better addressed directly
          to them.
        </li>
        <li className="mb-2">
          Unless a date or time was discussed in the conversation, the app
          doesn't have context of when something was said.
        </li>
        <li>
          The more specific the question, the better. You'll be surprised how
          well the app can pick out small details from conversation!
        </li>
      </ul>
    </>
  );
};
