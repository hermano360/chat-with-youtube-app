export default function Home() {
  const pages = [
    "awsdevelopers",
    "MorningBrewDailyShow",
    "serverlessguru",
    "joenissim",
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-start p-10 lg:p-24">
      <h2 className="mb-2 text-lg font-semibold text-center">Welcome to</h2>
      <h2 className="mb-10 text-2xl font-semibold text-center">
        Chat with Clips! 🎉
      </h2>
      <p className="mb-10 text-lg font-semibold text-center">
        Click on one of our supported partners to get started!
      </p>
      <ul className="grid w-1/2 gap-6 xl:grid-cols-2">
        {pages.map((page) => (
          <li key={page}>
            <a
              href={`/${page}`}
              className={`inline-flex items-center 
                        justify-center w-full p-5 bg-gray-900 text-white
                        border  rounded-lg cursor-pointer 
                        hover:text-gray-300 border-gray-600 
                        hover:bg-gray-600`}
            >
              <div className="w-full text-center text-lg font-semibold">
                {page}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
