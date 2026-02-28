import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Venue from './components/Venue';
import Agenda from './components/Agenda';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';

export default function App() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const handleRegisterClick = () => {
    setIsRegistrationOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onRegisterClick={handleRegisterClick} />
      <main>
        <Hero onRegisterClick={handleRegisterClick} />
        <Venue />
        <Pricing onRegisterClick={handleRegisterClick} />
        <Agenda />
        <Sponsors />
      </main>
      <Footer />
      <RegistrationModal 
        isOpen={isRegistrationOpen} 
        onClose={() => setIsRegistrationOpen(false)} 
      />
    </div>
  );
}
