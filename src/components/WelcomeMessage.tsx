export function WelcomeMessage({ username }: { username: string }) {
  return (
    <>
      <h2 className="mb-2 text-lg font-semibold text-center">Welcome to</h2>
      <h2 className="mb-10 text-2xl font-semibold text-center">
        Chat with Clips! 🎉
      </h2>
      <h2 className="mb-2 text-md font-semibold text-center">
        What would you like to ask
      </h2>
      <h2 className="mb-10 text-lg font-semibold text-center">@{username}?</h2>
    </>
  );
}
