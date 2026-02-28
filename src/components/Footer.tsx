import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <span className="text-2xl font-bold text-white">ABIJ 2027</span>
            <p className="text-sm leading-6 text-gray-300">
              Bringing together Rotarians, youth, and leaders for a transformative experience in Santos, Brazil.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Conference</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><a href="#agenda" className="text-sm leading-6 text-gray-300 hover:text-white">Agenda</a></li>
                  <li><a href="#speakers" className="text-sm leading-6 text-gray-300 hover:text-white">Speakers</a></li>
                  <li><a href="#pricing" className="text-sm leading-6 text-gray-300 hover:text-white">Pricing</a></li>
                  <li><a href="#hotel" className="text-sm leading-6 text-gray-300 hover:text-white">Venue & Hotel</a></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Visa Information</a></li>
                  <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Travel Guide</a></li>
                  <li><a href="#faqs" className="text-sm leading-6 text-gray-300 hover:text-white">FAQs</a></li>
                  <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Sponsor Prospectus</a></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">About</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Rotary International</a></li>
                  <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">ABIJ History</a></li>
                  <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Host Committee</a></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Privacy Policy</a></li>
                  <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Terms of Service</a></li>
                  <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Cancellation Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">&copy; 2027 ABIJ Conference, Rotary International. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
