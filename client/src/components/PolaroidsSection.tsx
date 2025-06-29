import polaroid1 from "@assets/514139262_24218444151124704_3090391935409159320_n_1751196155583.jpg";
import polaroid2 from "@assets/513221784_1408613340190067_1155300379255988195_n_1751196155583.jpg";
import polaroid3 from "@assets/515012505_1411141350165818_8481780811882869469_n_1751196155584.jpg";
import polaroid4 from "@assets/510748270_1441920093478084_5638337246281760608_n_1751196155582.jpg";
import polaroid5 from "@assets/511043215_1211560391010072_4791323343152305853_n_1751196155582.jpg";
import polaroid6 from "@assets/511034984_2114747142355406_41350840851854893_n_1751196155582.jpg";

const polaroids = [
  { src: polaroid1, alt: "Cafe styling moment", label: "Cafe Vibes" },
  { src: polaroid2, alt: "Traditional elegance moment", label: "Traditional" },
  { src: polaroid3, alt: "Party styling moment", label: "Party Ready" },
  { src: polaroid4, alt: "Casual styling moment", label: "Casual Day" },
  { src: polaroid5, alt: "Aesthetic styling moment", label: "Aesthetic" },
  { src: polaroid6, alt: "Evening glam moment", label: "Glam Night" }
];

export default function PolaroidsSection() {
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
    <section id="polaroids" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-dm-serif text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Moments
          </h2>
          <p className="font-lora text-lg text-gray-600 max-w-2xl mx-auto">
            Candid captures and favorite moments from my fashion and lifestyle journey
          </p>
          <div className="w-20 h-1 bg-dusty-rose mx-auto mt-6"></div>
        </div>
        
        {/* Polaroids Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 scroll-reveal">
          {polaroids.map((polaroid, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="polaroid-circle w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={polaroid.src} 
                  alt={polaroid.alt}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => openLightbox(polaroid.src, polaroid.alt)}
                />
              </div>
              <p className="text-center text-sm text-gray-600 font-medium">{polaroid.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
