import editorialImg1 from "@assets/511522037_746173514622628_2628393092737811989_n_1751196155582.jpg";
import editorialImg2 from "@assets/513901602_606753255353587_3966542371347645341_n_1751196155583.jpg";
import editorialImg3 from "@assets/510609294_600581623080927_5515925744154533018_n_1751196155581.jpg";

export default function EditorialSection() {
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
    <section id="editorials" className="py-20 bg-white/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-dm-serif text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Editorial Stories
          </h2>
          <p className="font-lora text-lg text-gray-600 max-w-2xl mx-auto">
            A curated collection of fashion moments and lifestyle captures that tell unique stories
          </p>
          <div className="w-20 h-1 bg-dusty-rose mx-auto mt-6"></div>
        </div>
        
        {/* Editorial Grid */}
        <div className="space-y-12">
          {/* Editorial Row 1 */}
          <div className="grid lg:grid-cols-3 gap-8 items-center scroll-reveal">
            <div className="lg:col-span-2">
              <img 
                src={editorialImg1} 
                alt="Editorial: Elegant traditional fashion" 
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
                onClick={() => openLightbox(editorialImg1, "Editorial: Elegant traditional fashion")}
              />
            </div>
            <div className="space-y-4">
              <h3 className="font-dm-serif text-2xl md:text-3xl font-bold text-charcoal">
                Traditional Elegance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Celebrating the timeless beauty of Indian craftsmanship through contemporary styling and modern presentation.
              </p>
            </div>
          </div>
          
          {/* Editorial Row 2 */}
          <div className="grid lg:grid-cols-3 gap-8 items-center scroll-reveal">
            <div className="lg:order-2 lg:col-span-2">
              <img 
                src={editorialImg2} 
                alt="Editorial: Glamorous evening wear" 
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
                onClick={() => openLightbox(editorialImg2, "Editorial: Glamorous evening wear")}
              />
            </div>
            <div className="lg:order-1 space-y-4">
              <h3 className="font-dm-serif text-2xl md:text-3xl font-bold text-charcoal">
                Evening Glamour
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Sophisticated evening looks that blend comfort with statement-making style for every special occasion.
              </p>
            </div>
          </div>
          
          {/* Editorial Row 3 */}
          <div className="grid lg:grid-cols-3 gap-8 items-center scroll-reveal">
            <div className="lg:col-span-2">
              <img 
                src={editorialImg3} 
                alt="Editorial: Casual chic aesthetic" 
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
                onClick={() => openLightbox(editorialImg3, "Editorial: Casual chic aesthetic")}
              />
            </div>
            <div className="space-y-4">
              <h3 className="font-dm-serif text-2xl md:text-3xl font-bold text-charcoal">
                Casual Chic
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Effortless style meets comfort in curated looks perfect for everyday adventures and exploration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
