import { useState, useEffect } from 'react';
import { Check, Info } from 'lucide-react';

type PricingTier = 'early' | 'regular' | 'late';

export default function Pricing({ onRegisterClick }: { onRegisterClick: () => void }) {
  const [currentTier, setCurrentTier] = useState<PricingTier>('early');

  // Logic to determine current pricing tier based on date
  useEffect(() => {
    const today = new Date();
    // Assuming current year is 2026 or 2027 for testing. 
    // Early Bird: Until June 30, 2027
    // Regular: July 1 - Oct 15, 2027
    // Late: Oct 16, 2027 onwards
    
    const earlyBirdEnd = new Date('2027-06-30T23:59:59');
    const regularEnd = new Date('2027-10-15T23:59:59');

    if (today <= earlyBirdEnd) {
      setCurrentTier('early');
    } else if (today <= regularEnd) {
      setCurrentTier('regular');
    } else {
      setCurrentTier('late');
    }
  }, []);

  const pricingData = {
    early: {
      name: 'Early Bird',
      deadline: 'Ends June 30, 2027',
      prices: { full: 299, youth: 149, guest: 199 },
      active: currentTier === 'early'
    },
    regular: {
      name: 'Regular',
      deadline: 'July 1 - Oct 15, 2027',
      prices: { full: 399, youth: 199, guest: 249 },
      active: currentTier === 'regular'
    },
    late: {
      name: 'Late / On-site',
      deadline: 'From Oct 16, 2027',
      prices: { full: 499, youth: 249, guest: 299 },
      active: currentTier === 'late'
    }
  };

  return (
    <div id="pricing" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Registration Packages
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the package that best fits your needs. Prices automatically update based on the current date.
          </p>
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="inline-flex rounded-md shadow-sm bg-white p-1 border border-gray-200">
            {Object.entries(pricingData).map(([key, data]) => (
              <div 
                key={key}
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  data.active 
                    ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                    : 'text-gray-500'
                }`}
              >
                {data.name} {data.active && <span className="ml-2 inline-flex items-center rounded-full bg-blue-600 px-2 py-0.5 text-xs font-medium text-white">Current</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {/* Full Attendee */}
          <div className="rounded-3xl p-8 ring-1 ring-gray-200 bg-white shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Full Attendee</h3>
              <p className="mt-4 text-sm leading-6 text-gray-600">For Rotarians and general conference attendees.</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">${pricingData[currentTier].prices.full}</span>
                <span className="text-sm font-semibold leading-6 text-gray-600">USD</span>
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-blue-600" /> Access to all general sessions</li>
                <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-blue-600" /> Breakout workshops</li>
                <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-blue-600" /> Welcome reception</li>
                <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-blue-600" /> Conference app access</li>
              </ul>
            </div>
            <button onClick={onRegisterClick} className="mt-8 block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
              Select Package
            </button>
          </div>

          {/* Youth / Alumni */}
          <div className="rounded-3xl p-8 ring-1 ring-gray-200 bg-white shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Youth / Alumni</h3>
              <p className="mt-4 text-sm leading-6 text-gray-600">For Rotaract, Interact, and Rotary Alumni.</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">${pricingData[currentTier].prices.youth}</span>
                <span className="text-sm font-semibold leading-6 text-gray-600">USD</span>
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-blue-600" /> Access to all general sessions</li>
                <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-blue-600" /> Youth-specific workshops</li>
                <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-blue-600" /> Welcome reception</li>
                <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-blue-600" /> Networking events</li>
              </ul>
            </div>
            <button onClick={onRegisterClick} className="mt-8 block w-full rounded-md bg-white px-3 py-2 text-center text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-inset ring-blue-200 hover:ring-blue-300">
              Select Package
            </button>
          </div>

          {/* Spouse / Guest */}
          <div className="rounded-3xl p-8 ring-1 ring-gray-200 bg-white shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Spouse / Guest</h3>
              <p className="mt-4 text-sm leading-6 text-gray-600">For accompanying family members or guests.</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">${pricingData[currentTier].prices.guest}</span>
                <span className="text-sm font-semibold leading-6 text-gray-600">USD</span>
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-blue-600" /> Welcome reception</li>
                <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-blue-600" /> House of Friendship access</li>
                <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-blue-600" /> Guest lounge access</li>
                <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-blue-600" /> Optional local tours</li>
              </ul>
            </div>
            <button onClick={onRegisterClick} className="mt-8 block w-full rounded-md bg-white px-3 py-2 text-center text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-inset ring-blue-200 hover:ring-blue-300">
              Select Package
            </button>
          </div>
        </div>

        {/* Cancellation Policy Outline */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <div className="flex items-start">
            <Info className="h-6 w-6 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold text-blue-900">Cancellation & Refund Policy</h4>
              <p className="mt-2 text-sm text-blue-800">
                We understand plans change. Our refund policy is structured based on notice provided:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-blue-800 list-disc list-inside">
                <li><strong>&gt; 60 days notice:</strong> 100% refund minus a $50 administrative fee.</li>
                <li><strong>30 - 60 days notice:</strong> 50% refund.</li>
                <li><strong>&lt; 30 days notice:</strong> No refunds available, but registrations are transferable.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
