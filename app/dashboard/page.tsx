export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-[url('/salon.jpg')] bg-cover bg-center">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-pink-500 p-4 md:h-52">
        <div className="flex justify-between w-full">
          <div className="flex space-x-4">
            <button className="bg-pink-100 text-black-600 py-2 px-4 rounded">Home</button>
            {/* Add more buttons or content here if needed */}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center rounded-lg mt-20 bg-pink-100 p-8 w-1/2 mx-auto">
        <p className="text-3xl font-large text-gray-900">Welcome to IT GLOW, where beauty meets relaxation</p>
      </div>
    </main>
  );
}
