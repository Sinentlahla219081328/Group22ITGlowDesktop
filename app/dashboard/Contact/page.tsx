import React from 'react';

export default function Contact() {

  return (
    <main className="flex min-h-screen flex-col p-6 bg-[url('/salon.jpg')] bg-cover bg-center">

      <div className=" min-h-screen flex flex-col justify-between mt-10">
        <section className="bg-pink-100 py-12 text-center">
          <h2 className="text-3xl font-light text-neutral-600 mb-6">About us</h2>
          <p className="text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Welcome to IT GLOW, where beauty meets relaxation.
            We are a premier salon dedicated to providing top-notch services in a warm, inviting atmosphere.
            Our team of experienced professionals is passionate about helping you look and feel your best,
            offering a wide range of hair, nail, and skincare treatments tailored to meet your unique needs.

            At IT GLOW, we believe that self-care is essential, and we strive to create a haven where you can unwind,
            recharge, and leave feeling rejuvenated. Our salon is designed to offer a luxurious experience from the moment
            you walk in. Whether you’re here for a quick trim or a full day of pampering, we ensure that every visit
            leaves you feeling refreshed and beautiful.
          </p>
        </section>

      <div className="bg-pink-100 p-10 rounded-lg shadow-lg flex">
          <div className="w-2/3 pr-10">
            <h1 className="text-5xl font-serif mb-8">Contact</h1>
            <form className="space-y-6">
              <div>
                <label className="block text-lg font-medium text-gray-700">Name</label>
                <input type="text" className="mt-1 block w-full border-b border-gray-400 focus:outline-none focus:border-black" />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-700">Email Address</label>
                <input type="email" className="mt-1 block w-full border-b border-gray-400 focus:outline-none focus:border-black" />
              </div>
              <div>
                <label className="block text-xl font-medium text-gray-700">Message</label>
                <textarea className="mt-1 block w-full border-b border-gray-400 focus:outline-none focus:border-black" rows={4}></textarea>
              </div>
              <button type="submit" className="mt-4 px-6 py-2 border border-black text-black font-medium rounded-full hover:bg-black hover:text-white">
                Submit
              </button>
            </form>
          </div>
          <div className="w-1/3 flex flex-col space-y-6 text-gray-700">
            <div className="flex items-start">
              <img src="/email-icon.png" alt="Email Icon" className="w-6 h-6 mr-4" />
              <div>
                <h2 className="text-xl font-semibold">Email</h2>
                <p>help@itglow.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <img src="/phone-icon.png" alt="Phone Icon" className="w-6 h-6 mr-4" />
              <div>
                <h2 className="text-xl font-semibold">Phone</h2>
                <p>021 589 0895</p>
              </div>
            </div>
            <div className="flex items-start">
              <img src="/address-icon.png" alt="Address Icon" className="w-6 h-6 mr-4" />
              <div>
                <h2 className="text-xl font-semibold">Address</h2>
                <p>1234 Elm St, City Center ,Cape Town</p>
              </div>
            </div>
            <div className="flex items-start">
              <img src="/hours-icon.png" alt="Hours Icon" className="w-6 h-6 mr-4" />
              <div>
                <h2 className="text-xl font-semibold">Hours</h2>
                <p>Monday - Friday: 11 a.m. - 9 p.m.</p>
                <p>Saturday - Sunday: 11 a.m. - 9 p.m.</p>
              </div>
            </div>
          </div>
        </div>

        <footer className="bg-pink-100 py-12  flex justify-between items-start px-8 ">
          <div className="space-y-4">
            <ul className="text-neutral-700">
              <li><a href="#" className="hover:underline">TERMS AND CONDITIONS</a></li>
              <li><a href="#" className="hover:underline">REFUND POLICY</a></li>
              <li><a href="#" className="hover:underline">PRIVACY POLICY</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-neutral-700 font-medium">Newsletter</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="p-3 border border-neutral-300 rounded-l-md focus:outline-none"
              />
              <button className="bg-neutral-400 text-white px-4 py-3 rounded-r-md">
                SUBSCRIBE
              </button>
            </div>
          </div>
          <div className="space-y-4 text-neutral-700">
            <p>Welcome to Love Kinks. Local deliveries take 2-5 working days. International shipping may vary.</p>
            <p>Store address: 1 Tamchele Ave, Beverley, Johannesburg, 2191. Langhams Executive Conferencing.</p>
          </div>
        </footer>
      </div>
    </main>
  );
};


