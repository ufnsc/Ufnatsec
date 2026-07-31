import { Hero } from './Hero';
import { StatsBar } from './StatsBar';
import { Mission } from './Mission';
import { OperationsGallery } from './OperationsGallery';
import { Partners } from './Partners';

interface HomeProps {
  onGetInvolvedClick: () => void;
  onAboutClick: () => void;
}

export function Home({ onGetInvolvedClick, onAboutClick }: HomeProps) {
  return (
    <>
      <Hero onGetInvolvedClick={onGetInvolvedClick} />
      <StatsBar />
      <Mission onLearnMoreClick={onAboutClick} />
      <OperationsGallery />
      <Partners />
    </>
  );
}
