import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroCargoBike from "@/assets/hero-cargo-bike.jpg";
import dealerPerson from "@/assets/dealer-person.jpg";
import { Instagram, Linkedin, MessageCircle, MapPin, Phone, Mail, Calendar, ChevronLeft, ChevronRight } from "lucide-react";

const AboutUs = () => {
  const navigate = useNavigate();
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);

  const teamMembers = [
    {
      id: 1,
      name: "Eliah",
      role: "CEO",
      quote: "We believe mobility should be sustainable, efficient, and accessible to everyone. Our mission is to revolutionize urban transport.",
      image: "/lovable-uploads/93f64d63-22a9-46a0-8efa-e70fbcfcbf49.png"
    },
    {
      id: 2,
      name: "Chanti",
      role: "CFO",
      quote: "Financial excellence drives sustainable growth. Every investment decision supports our mission of transforming urban mobility.",
      image: "/lovable-uploads/a05449e6-bcab-4dd7-ab51-a035e539c831.png"
    },
    {
      id: 3,
      name: "Noah",
      role: "CTO",
      quote: "Innovation through engineering excellence. Every component is designed for durability, efficiency, and user experience.",
      image: "/lovable-uploads/4b19d7f4-7d6d-44c5-9db1-f14823dafd21.png"
    }
  ];

  // Auto-cycling for team carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTeamIndex((prev) => (prev + 1) % teamMembers.length);
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, [teamMembers.length]);

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

  const nextTeam = () => {
    setCurrentTeamIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevTeam = () => {
    setCurrentTeamIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
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
      
      {/* We Are ally-mobility - Team Carousel */}
      <section className="section-padding mt-16 lg:mt-20">
        <div className="container-custom">
          <div className="text-center space-y-12 mb-16">
            <h2 className="text-6xl lg:text-8xl font-bold text-primary">
              We are <span className="bg-gradient-to-r from-brand-aqua to-brand-purple bg-clip-text text-transparent">ally-mobility</span>
            </h2>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Team Member Display */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img 
                  src={teamMembers[currentTeamIndex].image} 
                  alt={`${teamMembers[currentTeamIndex].name} - ${teamMembers[currentTeamIndex].role}`}
                  className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
                />
              </div>
              
              <div className="space-y-8">
                <blockquote className="text-2xl lg:text-3xl text-muted-foreground leading-relaxed italic border-l-4 border-brand-aqua pl-8">
                  "{teamMembers[currentTeamIndex].quote}"
                </blockquote>
                <div className="space-y-2">
                  <p className="font-semibold text-primary text-lg">{teamMembers[currentTeamIndex].name}</p>
                  <p className="text-muted-foreground">{teamMembers[currentTeamIndex].role}, ally-mobility</p>
                </div>
              </div>
            </div>

            {/* Manual Navigation */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevTeam}
                className="w-12 h-12 rounded-full bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 flex items-center justify-center"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <div className="flex gap-2">
                {teamMembers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTeamIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentTeamIndex ? 'bg-primary' : 'bg-primary/30'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTeam}
                className="w-12 h-12 rounded-full bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 flex items-center justify-center"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Community */}
      <section className="diagonal-section diagonal-colorful">
        <div className="diagonal-section-content">
          <div className="container-custom text-center space-y-12">
            <h2 className="text-white text-5xl lg:text-6xl font-bold">Join Our Community</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Connect with us and stay updated on the latest in sustainable urban mobility
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Instagram */}
              <div className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 text-center space-y-6 hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-3xl mx-auto flex items-center justify-center shadow-lg group-hover:shadow-pink-500/25 transition-shadow duration-500">
                    <Instagram className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">•</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold bg-gradient-to-br from-pink-600 to-orange-500 bg-clip-text text-transparent">@ally.mobility</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">Follow our journey and see our products in action with daily updates and behind-the-scenes content</p>
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white border-0 hover:from-pink-600 hover:to-orange-500 rounded-2xl py-3 font-semibold shadow-lg">
                    Follow on Instagram
                  </Button>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 text-center space-y-6 hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl mx-auto flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-shadow duration-500">
                    <Linkedin className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-blue-700">ally-mobility</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">Professional updates, industry insights, and networking opportunities in sustainable mobility</p>
                  <Button className="w-full bg-blue-600 text-white border-0 hover:bg-blue-700 rounded-2xl py-3 font-semibold shadow-lg">
                    Connect on LinkedIn
                  </Button>
                </div>
              </div>

              {/* Telegram */}
              <div className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 text-center space-y-6 hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl mx-auto flex items-center justify-center shadow-lg group-hover:shadow-blue-400/25 transition-shadow duration-500">
                    <MessageCircle className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-blue-600">bikerave</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">Join our community discussions, get instant support, and connect with other mobility enthusiasts</p>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 hover:from-blue-600 hover:to-blue-700 rounded-2xl py-3 font-semibold shadow-lg">
                    Join Telegram
                  </Button>
                </div>
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