import Link from "next/link";

export function WelcomeMessage({ username }: { username: string }) {
  return (
    <>
      <h2 className="mb-2 text-lg font-semibold text-center">Welcome to</h2>
      <Link className="mb-10 text-2xl font-semibold text-center" href="/">
        Chat with Clips! 🎉
      </Link>
      <h2 className="mb-2 text-md font-semibold text-center">
        What would you like to ask
      </h2>
      <h2 className="mb-10 text-lg font-semibold text-center">@{username}?</h2>
    </>
  );
}
