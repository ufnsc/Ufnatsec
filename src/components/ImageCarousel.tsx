import img1 from '../../images/IMG_1491.JPG';
import img2 from '../../images/IMG_5213.JPG';
import img3 from '../../images/IMG_5434.JPG';
import img4 from '../../images/IMG_8346.JPG';
import img5 from '../../images/IMG_8647.JPG';
import img6 from '../../images/IMG_9391.JPG';
import img7 from '../../images/IMG_9613.JPG';

const images = [img1, img2, img3, img4, img5, img6, img7];
const doubled = [...images, ...images];

export function ImageCarousel() {
  return (
    <section className="bg-[#050d1a] py-12 md:py-16 relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 md:w-48"
        style={{ background: 'linear-gradient(to right, #050d1a 0%, transparent 100%)' }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 md:w-48"
        style={{ background: 'linear-gradient(to left, #050d1a 0%, transparent 100%)' }}
      />
      <div className="carousel-track">
        {doubled.map((src, i) => (
          <div key={i} className="carousel-item">
            <img src={src} alt="" loading="lazy" className="carousel-img" />
          </div>
        ))}
      </div>
    </section>
  );
}
