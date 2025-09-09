import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
const ContactForm = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'test-ride',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = encodeURIComponent(`ally-mobility Inquiry - ${formData.interest.charAt(0).toUpperCase() + formData.interest.slice(1).replace('-', ' ')}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nInterest: ${formData.interest.replace('-', ' ')}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:contact@ally-mobility.com?subject=${subject}&body=${body}`;
    toast({
      title: "Opening email client...",
      description: "Your default email client should open with the pre-filled message."
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-primary text-4xl lg:text-5xl font-bold">Kontakt</h2>
              <p className="text-xl text-muted-foreground">
                Bereit, Ihre urbane Logistik zu transformieren? Nehmen Sie Kontakt mit unserem Team auf.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-aqua/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">E-Mail</p>
                  <a 
                    href="mailto:info@allymobility" 
                    className="text-lg font-medium text-primary hover:text-secondary transition-colors"
                  >
                    info@allymobility
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-aqua/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Telefon</p>
                  <p className="text-lg font-medium text-foreground">+49 (0) 30 123 456 78</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-aqua/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Adresse</p>
                  <p className="text-lg font-medium text-foreground">
                    ally-mobility<br />
                    Haselbacherstraße 18A<br />
                    04617 Treben, DE
                  </p>
                </div>
              </div>
            </div>

            <Button 
              className="btn-contact text-lg px-8 py-4"
              onClick={() => window.location.href = 'mailto:info@allymobility'}
            >
              Kontakt aufnehmen
            </Button>
          </div>

          {/* Contact Image */}
          <div className="relative">
            <img 
              src="/lovable-uploads/2954cfe6-0b98-4fad-bf9d-34aa2d4a7822.png" 
              alt="Contact ally-mobility team" 
              className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
};
export default ContactForm;