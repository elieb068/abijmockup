import { Calendar, MapPin } from 'lucide-react';

export default function Hero({ onRegisterClick }: { onRegisterClick: () => void }) {
  return (
    <div className="relative bg-blue-900 pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop"
          alt="Santos Brazil"
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">ABIJ Conference 2027</span>
            <span className="block text-blue-300 mt-2">Rotary International</span>
          </h1>
          <p className="mt-6 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-8 md:text-xl md:max-w-3xl">
            Join us for five days of inspiration, networking, and impactful discussions in the beautiful coastal city of Santos.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6 text-white">
            <div className="flex items-center">
              <Calendar className="h-6 w-6 mr-2 text-blue-300" />
              <span className="text-lg font-medium">November 18-22, 2027</span>
            </div>
            <div className="hidden sm:block text-blue-300">•</div>
            <div className="flex items-center">
              <MapPin className="h-6 w-6 mr-2 text-blue-300" />
              <span className="text-lg font-medium">Santos, SÃ£o Paulo, Brazil</span>
            </div>
          </div>

          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
              <button
                onClick={onRegisterClick}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 shadow-lg transition-transform hover:scale-105"
              >
                Register Now
              </button>
              <a
                href="#agenda"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 shadow-lg"
              >
                View Agenda
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
