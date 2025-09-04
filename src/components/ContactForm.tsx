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
  return <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8 mb-16">
            <div className="space-y-6">
              <h2 className="text-brand-green">Get in Touch</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to transform your transport capabilities? Contact us for a test ride, 
                product information, or to discuss dealer opportunities.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-2xl">
                  <div className="space-y-2">
                    <div className="w-8 h-8 text-brand-aqua mx-auto">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="font-medium text-foreground">Email</h4>
                    <a href="mailto:info@allymobility" className="text-muted-foreground hover:text-brand-aqua transition-colors">
                      info@allymobility
                    </a>
                  </div>

                  <div className="space-y-2">
                    <div className="w-8 h-8 text-brand-aqua mx-auto">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h4 className="font-medium text-foreground">Phone</h4>
                    <p className="text-muted-foreground">+49 (0) 30 123 456 78</p>
                  </div>

                  <div className="space-y-2">
                    <div className="w-8 h-8 text-brand-aqua mx-auto">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h4 className="font-medium text-foreground">Address</h4>
                    <p className="text-muted-foreground">
                      ally-mobility<br />
                      Haselbacherstraße 18A<br />
                      04617 Treben, DE
                    </p>
                  </div>
                </div>
              </div>
                
              <div className="text-center mt-8">
                <Button 
                  asChild
                  className="btn-aqua text-lg px-8 py-4"
                >
                  <a href="mailto:info@allymobility">Contact us</a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            
          </div>
        </div>
      </div>
    </section>
};
export default ContactForm;