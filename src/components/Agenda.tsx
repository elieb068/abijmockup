import { useState } from 'react';
import { Smartphone, Mic, Download } from 'lucide-react';

const scheduleData = [
  {
    date: 'Thursday, Nov 18',
    events: [
      { time: '12:00 PM - 5:00 PM', title: 'Registration & Badge Pickup', location: 'Main Lobby' },
      { time: '3:00 PM - 5:00 PM', title: 'Pre-Conference Workshops', location: 'Rooms A-C' },
      { time: '6:00 PM - 8:00 PM', title: 'Welcome Reception', location: 'Beachfront Terrace' },
    ]
  },
  {
    date: 'Friday, Nov 19',
    events: [
      { time: '8:00 AM - 9:00 AM', title: 'Networking Breakfast', location: 'Dining Hall' },
      { time: '9:00 AM - 11:00 AM', title: 'Opening General Session', location: 'Grand Ballroom' },
      { time: '11:30 AM - 12:30 PM', title: 'Breakout Sessions Block 1', location: 'Various Rooms' },
      { time: '12:30 PM - 2:00 PM', title: 'Lunch & House of Friendship', location: 'Exhibition Hall' },
    ]
  },
  {
    date: 'Saturday, Nov 20',
    events: [
      { time: '9:00 AM - 10:30 AM', title: 'General Session II: Global Impact', location: 'Grand Ballroom' },
      { time: '11:00 AM - 12:30 PM', title: 'Breakout Sessions Block 2', location: 'Various Rooms' },
      { time: '7:00 PM - 10:00 PM', title: 'Gala Banquet Dinner (Add-on)', location: 'Sheraton Ballroom' },
    ]
  }
];

export default function Agenda() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <div id="agenda" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Conference Agenda</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Five days of engaging sessions, networking, and cultural experiences.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Schedule Section */}
          <div className="lg:col-span-2">
            <div className="flex space-x-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
              {scheduleData.map((day, index) => (
                <button
                  key={index}
                  onClick={() => setActiveDay(index)}
                  className={`whitespace-nowrap px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                    activeDay === index 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {day.date}
                </button>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <ul className="divide-y divide-gray-200">
                {scheduleData[activeDay].events.map((event, index) => (
                  <li key={index} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                      <div className="mb-2 sm:mb-0">
                        <p className="text-sm font-semibold text-blue-600">{event.time}</p>
                        <p className="text-lg font-bold text-gray-900 mt-1">{event.title}</p>
                      </div>
                      <div className="text-sm text-gray-500 flex items-center bg-gray-100 px-3 py-1 rounded-full w-fit">
                        {event.location}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="p-4 bg-gray-50 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-500">Full detailed agenda will be available in September 2027.</p>
              </div>
            </div>
          </div>

          {/* Sidebar: App & Speakers */}
          <div className="space-y-8">
            
            {/* Call for Speakers */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 opacity-10">
                <Mic className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">Call for Speakers</h3>
                <p className="text-blue-100 text-sm mb-6">
                  Have an inspiring project or idea to share? Apply to lead a breakout session.
                </p>
                <div className="bg-white/10 rounded-lg p-3 mb-6 border border-white/20">
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-200">Submission Deadline</p>
                  <p className="text-lg font-bold">March 31, 2027</p>
                </div>
                <button className="w-full bg-white text-blue-900 font-bold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                  Submit Proposal
                </button>
              </div>
            </div>

            {/* Mobile App Promo */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-6">
                <Smartphone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Get the Official App</h3>
              <p className="text-gray-600 text-sm mb-6">
                Build your schedule, connect with attendees, and get real-time updates during the conference.
              </p>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center bg-gray-900 text-white py-2.5 px-4 rounded-lg hover:bg-gray-800 transition-colors">
                  <Download className="w-4 h-4 mr-2" />
                  App Store
                </button>
                <button className="w-full flex items-center justify-center bg-gray-900 text-white py-2.5 px-4 rounded-lg hover:bg-gray-800 transition-colors">
                  <Download className="w-4 h-4 mr-2" />
                  Google Play
                </button>
              </div>
              <p className="text-xs text-center text-gray-400 mt-4">
                Login requires registration email.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
