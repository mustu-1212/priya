import { X } from "lucide-react";

export default function Lightbox() {
  const closeLightbox = () => {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeLightbox();
    }
  };

  return (
    <div 
      id="lightbox" 
      className="lightbox"
      onClick={handleBackdropClick}
    >
      <div className="relative max-w-4xl max-h-full p-4">
        <img 
          id="lightbox-image"
          src="" 
          alt="" 
          className="max-w-full max-h-full object-contain rounded-lg"
        />
        <button 
          onClick={closeLightbox}
          className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors duration-200 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
