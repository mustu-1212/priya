import { Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="font-dm-serif text-3xl font-bold mb-4">
              <span className="text-blush-pink">Priya</span> Dhurve
            </h3>
            <p className="font-lora text-lg text-gray-300">Fashion | Lifestyle | Exploration</p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://www.instagram.com/belike_._priya?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-deep-blush transition-colors duration-300"
            >
              <Instagram className="w-6 h-6" />
            </a>
            
            <a 
              href="mailto:durgadhurve527@gmail.com"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-deep-blush transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm">
              © 2025 Priya Dhurve. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
