import { MapPin } from "lucide-react";
import portraitImg from "@assets/511034984_2114747142355406_41350840851854893_n_1751196155582.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="scroll-reveal">
            <img 
              src={portraitImg} 
              alt="Priya Dhurve professional portrait" 
              className="rounded-2xl shadow-2xl w-full h-auto max-w-md mx-auto lg:mx-0"
            />
          </div>
          
          <div className="scroll-reveal space-y-6">
            <div>
              <h2 className="font-dm-serif text-4xl md:text-5xl font-bold text-charcoal mb-6">
                About Priya
              </h2>
              <div className="w-20 h-1 bg-dusty-rose mb-8"></div>
            </div>
            
            <div className="space-y-4">
              <p className="font-lora text-xl text-dusty-rose italic">
                "Medico by profession | Fashion, Exploration & Lifestyle by passion"
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Welcome to my world where medicine meets fashion, and exploration fuels creativity. I'm Priya Dhurve, 
                a passionate content creator who believes in living life to the fullest while pursuing both professional 
                excellence and creative expression.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Through my lens, I capture the beauty of traditional Indian fashion, contemporary lifestyle trends, 
                and the joy of exploration. Each post tells a story, each outfit represents a mood, and every 
                adventure opens new perspectives.
              </p>
            </div>
            
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex items-center text-dusty-rose">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="font-medium">Betul ➜ Bhopal</span>
              </div>
            </div>
            
            <div className="bg-soft-beige p-6 rounded-xl">
              <p className="font-lora text-lg text-charcoal font-medium text-center">
                Open for Freelancing & Collaborations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
