import img1 from '../../images/IMG_1491.JPG';
import img2 from '../../images/IMG_5213.JPG';
import img3 from '../../images/IMG_5434.JPG';
import img4 from '../../images/IMG_8346.JPG';
import img5 from '../../images/IMG_8647.JPG';
import img6 from '../../images/IMG_9391.JPG';

const photos = [
  { src: img1, caption: 'General Body Meeting' },
  { src: img3, caption: 'Professional Panel' },
  { src: img4, caption: 'Intel Community Briefing' },
  { src: img6, caption: 'Speaker Series' },
  { src: img5, caption: 'Workshop Session' },
  { src: img2, caption: 'Club Kickoff Event' },
];

export function OperationsGallery() {
  return (
    <section style={{ backgroundColor: 'var(--tac-navy)' }} className="py-16 md:py-24 relative z-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div style={{ marginBottom: '3rem' }}>
          <div className="tac-eyebrow mb-4">
            <span className="tac-bracket">[</span> OPERATIONS <span className="tac-bracket">]</span>
          </div>
          <div className="tac-divider" />
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ backgroundColor: 'var(--tac-line-soft)', gap: '1px' }}
        >
          {photos.map((photo) => (
            <div key={photo.caption} className="tac-gallery-item">
              <img src={photo.src} alt={photo.caption} loading="lazy" />
              <div className="tac-gallery-caption">
                <span>{photo.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
