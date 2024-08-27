export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-[url('/salon.jpg')] bg-cover bg-center">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-pink-500 p-4 md:h-52">

        <div className="flex justify-between w-full">

          {/* Search bar aligned to the left */}
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="bg-pink-100 text-gray-800 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Buttons aligned to the right */}
          <div className="flex space-x-4">
            <button className="bg-pink-100 text-black-600 py-2 px-4 rounded">Manage Customers</button>
            <button className="bg-pink-100 text-black-600 py-2 px-4 rounded">New Customer</button>
            <button className="bg-pink-100 text-black-600 py-2 px-4 rounded">Find duplicate</button>
          </div>
        </div>

      </div>
      <div className='flex items-center justify-start rounded-lg ml-20 mt-20 bg-pink-100 w-1/2'>
        <form className='w-full'>

          <label className="mb-3 mt-5 block text-3xl font-large text-gray-900" htmlFor="id">
            Firstname
          </label>

          <div className="relative">
            <input className="peer block  w-full rounded-md border border-gray-200 Py-[48px]P1-10 text-2xl out1ine-2 placeholder:text-gray-50"
              type="id"
              name="id"
              required
            />
          </div>

          <label className="mb-3 mt-5 block text-3xl font-large text-gray-900" htmlFor="id">

            Lastname
          </label>

          <div className="relative">
            <input className="peer block  w-full rounded-md border border-gray-200 Py-[48px]P1-10 text-2xl out1ine-2 placeholder:text-gray-50"
              type="id"
              name="id"
              required
            />
          </div>

          <label className="mb-3 mt-5 block text-3xl font-large text-gray-900" htmlFor="id">

            Identity Number
          </label>

          <div className="relative">
            <input className="peer block  w-full rounded-md border border-gray-200 Py-[48px]P1-10 text-2xl out1ine-2 placeholder:text-gray-50"
              type="id"
              name="id"
              required
            />
          </div>

          <label className="mb-3 mt-5 block text-3xl font-large text-gray-900" htmlFor="name">
            Phone number
          </label>

          <div className="relative">
            <input className="peer block  w-full rounded-md border border-gray-200 Py-[48px]P1-10 text-2xl out1ine-2 placeholder:text-gray-50"
              type="name"
              name="name"
              required
            />
          </div>
          <label className="mb-3 mt-5 block text-3xl font-large text-gray-900" htmlFor="email">
            Email address
          </label>

          <div className="relative">
            <input className="peer block  w-full rounded-md border border-gray-200 Py-[48px]P1-10 text-2xl out1ine-2 placeholder:text-gray-50"
              type="email"
              name="email"
              required
            />
          </div>


          <label className="mb-3 mt-5 block text-3xl font-large text-gray-900" htmlFor="password">
            Password
          </label>

          <div className="relative">
            <input className="peer block  w-full rounded-md border border-gray-200 Py-[48px]P1-10 text-2xl out1ine-2 placeholder:text-gray-50"
              type="password"
              name="password"
              required
            />
          </div>

          <label className="mb-3 mt-5 block text-3xl font-large text-gray-900" htmlFor="password">
            Notification type
          </label>
          <div className="flex items-center">
            <label className="flex items-center mr-4 text-2xl ">
              <input type="radio" name="option" className="peer mr-2 rounded border-gray-200 text-3xl outline-10" />
              Email
            </label>
            <label className="flex items-center mr-4 text-2xl">
              <input type="radio" name="option" className="peer mr-2 rounded border-gray-200 text-3xl outline-4" />
              SMS
            </label>
          </div>
        </form> 
      </div>
      <div className="flex space-x-4 ml-[900px] mt-[30px]" >
            <button className="bg-pink-500 text-black-600 font-bold py-4 px-4 rounded">SAVE</button>
            <button className="bg-pink-500 text-black-600 font-bold py-2 px-4 rounded">UPDATE</button>
            <button className="bg-pink-500 text-black-600 font-bold py-2 px-4 rounded">EXIT</button>
          </div>
    </main >
  );
}
