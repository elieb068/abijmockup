import { MapPin, Building, Clock, Car } from 'lucide-react';

export default function Venue() {
  return (
    <div id="hotel" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Venue & Accommodation</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Experience the beauty of Santos, Brazil. The conference will be held at the premier Blue Med Convention Center, with special rates at our partner hotels.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          
          {/* Venue Info */}
          <div className="flex flex-col">
            <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-8">
              <img 
                src="https://images.unsplash.com/photo-1561501878-aabd62634533?q=80&w=2070&auto=format&fit=crop" 
                alt="Santos Convention Center" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 flex items-center">
              <MapPin className="h-6 w-6 mr-2 text-blue-600" />
              Blue Med Convention Center
            </h3>
            <p className="mt-4 text-base leading-7 text-gray-600">
              PraÃ§a Almirante Gago Coutinho, 29 - Ponta da Praia<br />
              Santos - SP, 11030-200, Brazil
            </p>
            <p className="mt-4 text-base leading-7 text-gray-600">
              A state-of-the-art facility located near the famous Santos beachfront gardens, offering world-class amenities for our conference.
            </p>
          </div>

          {/* Hotel Info */}
          <div className="bg-gray-50 rounded-3xl p-8 ring-1 ring-gray-200">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 flex items-center mb-6">
              <Building className="h-6 w-6 mr-2 text-blue-600" />
              Official Conference Hotels
            </h3>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h4 className="text-lg font-semibold text-gray-900">Sheraton Santos Hotel</h4>
                <p className="text-sm text-gray-500 mt-1">Headquarters Hotel â 5 min walk to venue</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-blue-600">$145 / night</span>
                  <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-500">Book Room &rarr;</a>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                <p className="text-sm text-blue-800 font-medium">
                  <strong>Deadline for Group Room Rate:</strong> October 1, 2027
                </p>
                <p className="text-xs text-blue-600 mt-1">Rooms are subject to availability. Book early!</p>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900 mb-4">Accommodation FAQs</h4>
                
                <div className="space-y-4">
                  <div className="flex">
                    <Clock className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Early Check-in / Late Check-out</p>
                      <p className="text-sm text-gray-600 mt-1">Standard check-in is 3:00 PM and check-out is 12:00 PM. Requests for early/late times are subject to availability and may incur a half-day charge.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <Car className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Parking Availability</p>
                      <p className="text-sm text-gray-600 mt-1">Discounted valet parking is available for conference attendees at $15/day at the Sheraton. The convention center offers self-parking for $10/day.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
