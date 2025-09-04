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
<div className="space-y-6">
  <h3 className="text-2xl font-semibold text-brand-green">Contact Information</h3>

  {/* 3 columns in one row on sm+, centered icons with labels underneath */}
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
    {/* Email */}
    <div className="flex flex-col items-center">
      <div className="w-8 h-8 text-brand-aqua">
        <svg aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      <p className="mt-3 font-medium text-foreground">Email</p>
      <a href="mailto:contact@ally-mobility.com" className="text-muted-foreground hover:underline">
        contact@ally-mobility.com
      </a>
    </div>

    {/* Phone */}
    <div className="flex flex-col items-center">
      <div className="w-8 h-8 text-brand-aqua">
        <svg aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.42l1.02 3.4a2 2 0 01-.5 2.02L9.1 11.78a16 16 0 006.12 6.12l1.96-1.64a2 2 0 012.02-.5l3.4 1.02A2 2 0 0123 18.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 5V4a2 2 0 012-2h0" />
        </svg>
      </div>
      <p className="mt-3 font-medium text-foreground">Phone</p>
      {/* TODO: replace number as needed */}
      <a href="tel:+490000000000" className="text-muted-foreground hover:underline">
        +49 000 0000000
      </a>
    </div>

    {/* Address */}
    <div className="flex flex-col items-center">
      <div className="w-8 h-8 text-brand-aqua">
        <svg aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
      <p className="mt-3 font-medium text-foreground">Address</p>
      <p className="text-muted-foreground">
        ally-mobility<br />
        Haselbacherstraße 18A<br />
        04617 Treben, DE
      </p>
    </div>
  </div>
</div>


              {/* Quick Contact Options */}
              <div className="feature-card">
                <h4 className="font-semibold text-brand-green mb-4">Quick Contact Options</h4>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start btn-secondary-outline" onClick={() => setFormData({
                  ...formData,
                  interest: 'test-ride'
                })}>
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Book a Test Ride
                  </Button>
                  <Button variant="outline" className="w-full justify-start btn-secondary-outline" onClick={() => setFormData({
                  ...formData,
                  interest: 'dealer'
                })}>
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4m-2 0V9a2 2 0 012-2h2a2 2 0 012 2v12" />
                    </svg>
                    Become a Dealer
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            
          </div>
        </div>
      </div>
    </section>;
};
export default ContactForm;