export default function Sponsors() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our Generous Sponsors
        </h2>
        <p className="mt-4 text-center text-lg leading-8 text-gray-600">
          Thank you to the organizations making ABIJ 2027 possible.
        </p>

        <div className="mt-16">
          <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-gray-500 mb-8">
            Platinum Tier
          </h3>
          <div className="mx-auto grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Placeholders for Platinum Sponsors */}
            <div className="col-span-1 flex justify-center bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <img
                className="max-h-12 w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                alt="Transistor"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <img
                className="max-h-12 w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                alt="Reform"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <img
                className="max-h-12 w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
                alt="Tuple"
              />
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-gray-500 mb-8">
            Gold Tier
          </h3>
          <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {/* Placeholders for Gold Sponsors */}
            <div className="col-span-1 flex justify-center p-4">
              <img
                className="max-h-8 w-full object-contain opacity-60 hover:opacity-100 transition-opacity"
                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                alt="SavvyCal"
              />
            </div>
            <div className="col-span-1 flex justify-center p-4">
              <img
                className="max-h-8 w-full object-contain opacity-60 hover:opacity-100 transition-opacity"
                src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
                alt="Statamic"
              />
            </div>
            <div className="col-span-1 flex justify-center p-4">
              <img
                className="max-h-8 w-full object-contain opacity-60 hover:opacity-100 transition-opacity"
                src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
                alt="Tuple"
              />
            </div>
            <div className="col-span-1 flex justify-center p-4">
              <img
                className="max-h-8 w-full object-contain opacity-60 hover:opacity-100 transition-opacity"
                src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                alt="Reform"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex justify-center">
          <a href="#contact" className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500">
            Interested in sponsoring? Contact us <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
