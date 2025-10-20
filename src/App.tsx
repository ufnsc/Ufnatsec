import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { About } from './components/About';
import { GetInvolved } from './components/GetInvolved';
import { Team } from './components/Team';
import { Sponsor } from './components/Sponsor';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <Home 
            onGetInvolvedClick={() => setActiveTab('get-involved')}
            onAboutClick={() => setActiveTab('about')}
          />
        );
      case 'about':
        return (
          <About 
            onGetInvolvedClick={() => setActiveTab('get-involved')}
            onContactClick={() => setActiveTab('contact')}
          />
        );
      case 'get-involved':
        return <GetInvolved />;
      case 'team':
        return <Team />;
      case 'sponsor':
        return <Sponsor />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <Home 
            onGetInvolvedClick={() => setActiveTab('get-involved')}
            onAboutClick={() => setActiveTab('about')}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="pt-16">
        {renderContent()}
      </div>
      <Footer />
    </div>
  );
}
