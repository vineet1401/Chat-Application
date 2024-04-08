export default function Example() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="my-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-7xl">
            Hello, Vineet
          </h1>
            <p className="font-semibold text-2xl text-indigo-600">
              Select a chat to start messaging
            </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <img
              width="128"
              height="128"
              src="https://img.icons8.com/color/48/message-squared.png"
              alt="message-squared"
            />
          </div>
        </div>
      </main>
    </>
  );
}
