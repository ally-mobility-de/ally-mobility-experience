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
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-brand-green">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 text-brand-aqua flex-shrink-0 mt-1">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Email</h4>
                      <p className="text-muted-foreground">contact@ally-mobility.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 text-brand-aqua flex-shrink-0 mt-1">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Office</h4>
                      <p className="text-muted-foreground">Innovation Campus<br />Sustainable Transport Hub</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 text-brand-aqua flex-shrink-0 mt-1">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Response Time</h4>
                      <p className="text-muted-foreground">Within 24 hours on business days</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="feature-card">
                <h4 className="font-semibold text-brand-green mb-4">Quick Contact Options</h4>
                
              </div>
            </div>

            {/* Contact Form */}
            
          </div>
        </div>
      </div>
    </section>;
};
export default ContactForm;