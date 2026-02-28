import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar({ onRegisterClick }: { onRegisterClick: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isConferenceOpen, setIsConferenceOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-900">ABIJ 2027</span>
            </a>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium">Home</a>
            
            <div className="relative">
              <button 
                onClick={() => setIsConferenceOpen(!isConferenceOpen)}
                className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium flex items-center"
              >
                Conference <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isConferenceOpen && (
                <div className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-xs sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      <a href="#general-info" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">General Info</p>
                        </div>
                      </a>
                      <a href="#hotel" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">Hotel</p>
                        </div>
                      </a>
                      <a href="#pricing" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">Pricing</p>
                        </div>
                      </a>
                      <a href="#faqs" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">FAQs</p>
                        </div>
                      </a>
                      <a href="#agenda" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">Agenda</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <a href="#resources" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium">Resources</a>
            <a href="#about" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium">Contact Us</a>
            
            <button 
              onClick={onRegisterClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-md text-sm font-semibold transition-colors shadow-sm"
            >
              Register Now
            </button>
          </div>
          
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</a>
            <div className="space-y-1">
              <p className="px-3 py-2 text-base font-medium text-gray-900">Conference</p>
              <a href="#general-info" className="block px-3 py-2 pl-6 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">General Info</a>
              <a href="#hotel" className="block px-3 py-2 pl-6 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">Hotel</a>
              <a href="#pricing" className="block px-3 py-2 pl-6 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">Pricing</a>
              <a href="#faqs" className="block px-3 py-2 pl-6 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">FAQs</a>
              <a href="#agenda" className="block px-3 py-2 pl-6 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">Agenda</a>
            </div>
            <a href="#resources" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Resources</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">About</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Contact Us</a>
            <button 
              onClick={() => {
                setIsOpen(false);
                onRegisterClick();
              }}
              className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Register Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
