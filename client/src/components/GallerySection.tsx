import img1 from "@assets/510609294_600581623080927_5515925744154533018_n_1751196155581.jpg";
import img2 from "@assets/510748270_1441920093478084_5638337246281760608_n_1751196155582.jpg";
import img3 from "@assets/511034984_2114747142355406_41350840851854893_n_1751196155582.jpg";
import img4 from "@assets/511043215_1211560391010072_4791323343152305853_n_1751196155582.jpg";
import img5 from "@assets/511522037_746173514622628_2628393092737811989_n_1751196155582.jpg";
import img6 from "@assets/513221784_1408613340190067_1155300379255988195_n_1751196155583.jpg";
import img7 from "@assets/513901602_606753255353587_3966542371347645341_n_1751196155583.jpg";
import img8 from "@assets/514139262_24218444151124704_3090391935409159320_n_1751196155583.jpg";
import img9 from "@assets/515012505_1411141350165818_8481780811882869469_n_1751196155584.jpg";

const galleryImages = [
  { src: img1, alt: "Traditional blue floral dress" },
  { src: img2, alt: "Evening casual wear outdoors" },
  { src: img3, alt: "Traditional lehenga with jewelry" },
  { src: img4, alt: "Elegant traditional bridal-style outfit" },
  { src: img5, alt: "Coral dress in aesthetic interior" },
  { src: img6, alt: "Pink saree in wedding venue" },
  { src: img7, alt: "Golden evening dress" },
  { src: img8, alt: "Floral dress mirror selfie" },
  { src: img9, alt: "Leopard print dress in restaurant" }
];

export default function GallerySection() {
  const openLightbox = (imageSrc: string, imageAlt: string) => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image') as HTMLImageElement;
    
    if (lightbox && lightboxImage) {
      lightboxImage.src = imageSrc;
      lightboxImage.alt = imageAlt;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <section className="py-20 bg-soft-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-dm-serif text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Complete Gallery
          </h2>
          <p className="font-lora text-lg text-gray-600 max-w-2xl mx-auto">
            Explore my complete collection of fashion, lifestyle, and exploration moments
          </p>
          <div className="w-20 h-1 bg-dusty-rose mx-auto mt-6"></div>
        </div>
        
        {/* Masonry Gallery */}
        <div className="masonry-grid scroll-reveal">
          {galleryImages.map((image, index) => (
            <div key={index} className="masonry-item">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => openLightbox(image.src, image.alt)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
