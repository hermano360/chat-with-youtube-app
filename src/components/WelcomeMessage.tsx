import Link from "next/link";

interface WelcomeMessageProps {
  username: string;
  displayName: string;
}
export function WelcomeMessage({ username, displayName }: WelcomeMessageProps) {
  return (
    <>
      <h2 className="mb-2 text-lg font-semibold text-center">Welcome to</h2>
      <Link className="mb-10 text-2xl font-semibold text-center" href="/">
        Chat with Clips! 🎉
      </Link>
      <h2 className="mb-2 text-md font-semibold text-center">
        What would you like to ask{" "}
      </h2>
      <a
        className="mb-10 text-lg font-semibold text-center"
        href={`https://www.youtube.com/@${username}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {displayName}
      </a>
    </>
  );
}
