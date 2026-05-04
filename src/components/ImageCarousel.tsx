import img1 from '../../images/IMG_1491.JPG';
import img2 from '../../images/IMG_5213.JPG';
import img3 from '../../images/IMG_5434.JPG';
import img4 from '../../images/IMG_8346.JPG';
import img5 from '../../images/IMG_8647.JPG';
import img6 from '../../images/IMG_9391.JPG';
import img7 from '../../images/IMG_9613.JPG';

const images = [img1, img2, img3, img4, img5, img6, img7];
const doubled = [...images, ...images];

const maskImage = [
  'linear-gradient(to right,',
  '  transparent 0%,',
  '  rgba(0,0,0,0.2) 5%,',
  '  rgba(0,0,0,0.6) 12%,',
  '  black 22%,',
  '  black 78%,',
  '  rgba(0,0,0,0.6) 88%,',
  '  rgba(0,0,0,0.2) 95%,',
  '  transparent 100%',
  ')',
].join('');

export function ImageCarousel() {
  return (
    <section
      className="bg-[#050d1a] py-12 md:py-16 relative overflow-hidden"
      style={{
        WebkitMaskImage: maskImage,
        maskImage,
      }}
    >
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
