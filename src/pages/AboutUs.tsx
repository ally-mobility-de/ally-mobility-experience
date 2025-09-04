import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroCargoBike from "@/assets/hero-cargo-bike.jpg";
import dealerPerson from "@/assets/dealer-person.jpg";
import { Instagram, Linkedin, MessageCircle, MapPin, Phone, Mail, Calendar } from "lucide-react";

const AboutUs = () => {
  const navigate = useNavigate();
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Mitchell",
      role: "CEO & Co-Founder",
      quote: "We believe mobility should be sustainable, efficient, and accessible to everyone. Our mission is to revolutionize urban transport.",
      image: "/lovable-uploads/93f64d63-22a9-46a0-8efa-e70fbcfcbf49.png"
    },
    {
      id: 2,
      name: "Marcus Weber",
      role: "CTO & Co-Founder",
      quote: "Innovation through engineering excellence. Every component is designed for durability, efficiency, and user experience.",
      image: "/lovable-uploads/a05449e6-bcab-4dd7-ab51-a035e539c831.png"
    },
    {
      id: 3,
      name: "Lisa Chen",
      role: "Head of Design",
      quote: "Great design isn't just about looks—it's about creating solutions that seamlessly integrate into people's daily lives.",
      image: "/lovable-uploads/4b19d7f4-7d6d-44c5-9db1-f14823dafd21.png"
    }
  ];

  const events = [
    {
      id: 1,
      title: "mobifuture 2025",
      date: "15-17 März 2025",
      location: "Frankfurt, Deutschland",
      description: "Deutschlands größte Fachmesse für nachhaltige Mobilität. Entdecken Sie die neuesten Innovationen im Bereich urbaner Logistik.",
      status: "upcoming",
      image: heroCargoBike
    },
    {
      id: 2,
      title: "Urban Logistics Summit",
      date: "22-24 April 2025", 
      location: "Berlin, Deutschland",
      description: "Internationale Konferenz für nachhaltige Stadtlogistik und Mobilitätslösungen.",
      status: "upcoming",
      image: dealerPerson
    },
    {
      id: 3,
      title: "Cargo Bike Festival",
      date: "12-14 September 2024",
      location: "München, Deutschland", 
      description: "Das größte Lastenrad-Festival Europas mit Test-Parcours und Fachvorträgen.",
      status: "past",
      image: heroCargoBike
    }
  ];

  const nextEvent = () => {
    setCurrentEventIndex((prev) => (prev + 1) % events.length);
  };

  const prevEvent = () => {
    setCurrentEventIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  const bannerBlocks = [
    {
      id: 1,
      title: "Our Innovation Lab",
      subtitle: "Where ideas become reality",
      description: "Our state-of-the-art research and development facility is where we continuously innovate and test new solutions for sustainable urban mobility.",
      image: heroCargoBike,
      buttonText: "Visit Our Lab"
    },
    {
      id: 2,
      title: "Sustainability First",
      subtitle: "Building for tomorrow",
      description: "Every decision we make is guided by our commitment to environmental responsibility and creating a more sustainable future for urban transportation.",
      image: dealerPerson,
      buttonText: "Our Green Initiatives"
    },
    {
      id: 3,
      title: "Global Impact",
      subtitle: "Transforming cities worldwide",
      description: "From Berlin to Tokyo, our solutions are helping cities reduce emissions, ease traffic congestion, and create more livable urban spaces.",
      image: heroCargoBike,
      buttonText: "See Our Impact"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-subtle mt-16 lg:mt-20">
        <div className="container-custom text-center space-y-8">
          <div className="relative mx-auto max-w-5xl">
            <img 
              src={heroCargoBike} 
              alt="About ally-mobility" 
              className="w-full h-[600px] object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-2xl flex items-end">
              <div className="p-8 text-white">
                <h1 className="text-4xl lg:text-7xl font-bold mb-4">
                  About ally-mobility
                </h1>
                <p className="text-xl opacity-90 max-w-2xl">
                  Pioneering sustainable urban mobility solutions since 2019. 
                  We're on a mission to transform how cities move.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We Are ally-mobility */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center space-y-12 mb-16">
            <h2 className="text-6xl lg:text-8xl font-bold text-primary">
              We are ally-mobility
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src={dealerPerson} 
                alt="Our team working on sustainable mobility" 
                className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-aqua text-white p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold">2019</div>
                <div className="text-sm">Founded</div>
              </div>
            </div>
            
            <div className="space-y-8">
              <blockquote className="text-2xl lg:text-3xl text-muted-foreground leading-relaxed italic border-l-4 border-brand-aqua pl-8">
                "We believe mobility should be sustainable, efficient, and accessible to everyone. 
                Our mission is to revolutionize urban transport by creating innovative solutions 
                that make cities cleaner, quieter, and more livable."
              </blockquote>
              <div className="space-y-2">
                <p className="font-semibold text-primary text-lg">Dr. Sarah Mitchell</p>
                <p className="text-muted-foreground">CEO & Co-Founder, ally-mobility</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Community */}
      <section className="section-padding bg-brand-aqua">
        <div className="container-custom text-center space-y-12">
          <h2 className="text-white text-5xl lg:text-6xl font-bold">Join Our Community</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Connect with us and stay updated on the latest in sustainable urban mobility
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Instagram */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center space-y-4 hover:bg-white/20 transition-colors duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-orange-400 rounded-2xl mx-auto flex items-center justify-center">
                <Instagram className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">@ally.mobility</h3>
                <p className="text-white/80 text-sm mb-4">Follow our journey and see our products in action</p>
                <Button className="btn-secondary-outline text-white border-white hover:bg-white hover:text-brand-aqua">
                  Follow on Instagram
                </Button>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center space-y-4 hover:bg-white/20 transition-colors duration-300">
              <div className="w-20 h-20 bg-blue-600 rounded-2xl mx-auto flex items-center justify-center">
                <Linkedin className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">ally-mobility</h3>
                <p className="text-white/80 text-sm mb-4">Professional updates and industry insights</p>
                <Button className="btn-secondary-outline text-white border-white hover:bg-white hover:text-brand-aqua">
                  Connect on LinkedIn
                </Button>
              </div>
            </div>

            {/* Telegram */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center space-y-4 hover:bg-white/20 transition-colors duration-300">
              <div className="w-20 h-20 bg-blue-500 rounded-2xl mx-auto flex items-center justify-center">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">bikerave</h3>
                <p className="text-white/80 text-sm mb-4">Join our community discussions and get support</p>
                <Button className="btn-secondary-outline text-white border-white hover:bg-white hover:text-brand-aqua">
                  Join Telegram
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="section-padding bg-secondary-light">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-primary text-5xl lg:text-6xl font-bold">Events</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Besuchen Sie uns auf den wichtigsten Mobilitätsmessen und Events
            </p>
          </div>

          {/* Events Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative">
                  <img 
                    src={events[currentEventIndex].image} 
                    alt={events[currentEventIndex].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                  {events[currentEventIndex].status === 'upcoming' && (
                    <div className="absolute top-4 left-4 bg-brand-aqua text-white px-3 py-1 rounded-full text-sm font-medium">
                      Bevorstehend
                    </div>
                  )}
                </div>
                <div className="p-8 space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-primary">{events[currentEventIndex].title}</h3>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{events[currentEventIndex].date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{events[currentEventIndex].location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {events[currentEventIndex].description}
                  </p>
                  
                  <Button className="btn-aqua">
                    Zum Event →
                  </Button>
                </div>
              </div>
            </div>

            {/* Carousel Navigation */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={prevEvent}
                className="w-12 h-12 rounded-full bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 flex items-center justify-center"
              >
                ←
              </button>
              
              <div className="flex gap-2">
                {events.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentEventIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentEventIndex ? 'bg-primary' : 'bg-primary/30'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextEvent}
                className="w-12 h-12 rounded-full bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 flex items-center justify-center"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-primary text-4xl lg:text-5xl font-bold">Contact</h2>
                <p className="text-xl text-muted-foreground">
                  Ready to transform your urban logistics? Get in touch with our team.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-aqua/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Email</p>
                    <a 
                      href="mailto:info@ally-mobility.com" 
                      className="text-lg font-medium text-primary hover:text-secondary transition-colors"
                    >
                      info@ally-mobility.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-aqua/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Telefon</p>
                    <p className="text-lg font-medium text-foreground">+49 (0) 30 12345678</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-aqua/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Adresse</p>
                    <p className="text-lg font-medium text-foreground">
                      Musterstraße 123<br />
                      10115 Berlin, Deutschland
                    </p>
                  </div>
                </div>
              </div>

              <Button 
                className="btn-aqua text-lg px-8 py-4"
                onClick={() => window.location.href = 'mailto:info@ally-mobility.com'}
              >
                Contact now
              </Button>
            </div>

            {/* Contact Image */}
            <div className="relative">
              <img 
                src={dealerPerson} 
                alt="Contact ally-mobility" 
                className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;