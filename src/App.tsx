import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Mission } from './components/Mission';
import { Partners } from './components/Partners';
import { GetInvolved } from './components/GetInvolved';
import { Team } from './components/Team';
import { Sponsor } from './components/Sponsor';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050d1a]">
      <Navigation />
      <div className="pt-8">
        <Hero onGetInvolvedClick={() => scrollTo('get-involved')} />
        <Mission />
        <GetInvolved />
        <Team />
        <Partners />
        <Sponsor />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
