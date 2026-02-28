import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function RegistrationModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    attendeeType: 'full',
    firstName: '',
    lastName: '',
    email: '',
    rotaryClub: '',
    addBanquet: false,
  });

  if (!isOpen) return null;

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
    else {
      // Submit logic here
      alert('Registration submitted successfully!');
      onClose();
      setStep(1);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={onClose}></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              type="button"
              className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
              <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                Conference Registration
              </h3>
              
              {/* Progress Bar */}
              <div className="mt-4 mb-6">
                <div className="flex items-center justify-between">
                  <div className={`text-xs font-semibold ${step >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>Type</div>
                  <div className={`text-xs font-semibold ${step >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>Details</div>
                  <div className={`text-xs font-semibold ${step >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>Payment</div>
                </div>
                <div className="mt-2 h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-2 bg-blue-600 rounded-full transition-all duration-300"
                    style={{ width: `${(step / 3) * 100}%` }}
                  ></div>
                </div>
              </div>

              <form onSubmit={handleNext}>
                {step === 1 && (
                  <div className="space-y-4">
                    <p className="text-sm text-gray-500 mb-4">Select your attendee type to begin.</p>
                    
                    <label className={`block border rounded-lg p-4 cursor-pointer transition-colors ${formData.attendeeType === 'full' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'}`}>
                      <div className="flex items-center">
                        <input type="radio" name="type" value="full" checked={formData.attendeeType === 'full'} onChange={(e) => setFormData({...formData, attendeeType: e.target.value})} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                        <span className="ml-3 font-medium text-gray-900">Full Attendee (Rotarian)</span>
                      </div>
                    </label>
                    
                    <label className={`block border rounded-lg p-4 cursor-pointer transition-colors ${formData.attendeeType === 'youth' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'}`}>
                      <div className="flex items-center">
                        <input type="radio" name="type" value="youth" checked={formData.attendeeType === 'youth'} onChange={(e) => setFormData({...formData, attendeeType: e.target.value})} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                        <span className="ml-3 font-medium text-gray-900">Youth / Alumni</span>
                      </div>
                    </label>

                    <label className={`block border rounded-lg p-4 cursor-pointer transition-colors ${formData.attendeeType === 'guest' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'}`}>
                      <div className="flex items-center">
                        <input type="radio" name="type" value="guest" checked={formData.attendeeType === 'guest'} onChange={(e) => setFormData({...formData, attendeeType: e.target.value})} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                        <span className="ml-3 font-medium text-gray-900">Spouse / Guest</span>
                      </div>
                    </label>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">First Name</label>
                        <input required type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input required type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email Address</label>
                      <input required type="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                    </div>
                    {formData.attendeeType === 'full' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Rotary Club Name</label>
                        <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" value={formData.rotaryClub} onChange={e => setFormData({...formData, rotaryClub: e.target.value})} />
                      </div>
                    )}
                    
                    <div className="pt-4 border-t border-gray-200 mt-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Add-ons</h4>
                      <label className="flex items-start">
                        <div className="flex items-center h-5">
                          <input type="checkbox" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" checked={formData.addBanquet} onChange={e => setFormData({...formData, addBanquet: e.target.checked})} />
                        </div>
                        <div className="ml-3 text-sm">
                          <span className="font-medium text-gray-700">Saturday Gala Banquet Dinner (+$75)</span>
                          <p className="text-gray-500">Join us for the closing celebration.</p>
                        </div>
                      </label>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4 text-center py-8">
                    <div className="bg-gray-50 p-4 rounded-lg text-left mb-6">
                      <h4 className="font-medium text-gray-900 border-b pb-2 mb-2">Order Summary</h4>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Registration ({formData.attendeeType})</span>
                        <span className="font-medium text-gray-900">Calculated based on date</span>
                      </div>
                      {formData.addBanquet && (
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Gala Banquet</span>
                          <span className="font-medium text-gray-900">$75.00</span>
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">In a real application, Stripe or another payment gateway would be integrated here.</p>
                  </div>
                )}

                <div className="mt-8 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    {step === 3 ? 'Complete Registration' : 'Continue'}
                  </button>
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Back
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
