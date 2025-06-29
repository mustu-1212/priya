import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Instagram } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: ""
  });
  
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    },
    onError: () => {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white/70 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-dm-serif text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Let's Collaborate!
          </h2>
          <p className="font-lora text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to create something beautiful together? I'm always excited to work on new projects and collaborations.
          </p>
          <div className="w-20 h-1 bg-dusty-rose mx-auto mt-6"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="scroll-reveal space-y-8">
            <div>
              <h3 className="font-dm-serif text-2xl font-bold text-charcoal mb-6">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-dusty-rose/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-dusty-rose" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Email</p>
                    <p className="text-gray-600">durgadhurve527@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-dusty-rose/20 rounded-full flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-dusty-rose" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Instagram</p>
                    <a 
                      href="https://www.instagram.com/belike_._priya?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-dusty-rose transition-colors"
                    >
                      @belike_._priya
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-soft-beige p-6 rounded-xl">
              <h4 className="font-lora text-lg font-medium text-charcoal mb-3">
                Open for Collaborations:
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Fashion & Lifestyle Brands</li>
                <li>• Product Photography</li>
                <li>• Content Creation</li>
                <li>• Event Coverage</li>
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="scroll-reveal">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                  Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-dusty-rose focus:border-transparent transition-all duration-200"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-dusty-rose focus:border-transparent transition-all duration-200"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  placeholder="Tell me about your project or collaboration idea..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-dusty-rose focus:border-transparent transition-all duration-200"
                />
              </div>
              
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-dusty-rose text-white font-medium py-3 px-6 rounded-lg hover:bg-dusty-rose/90 transition-all duration-200 transform hover:scale-[1.02]"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
