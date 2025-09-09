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
      quote: "Wir glauben, dass Mobilität nachhaltig, effizient und für jeden zugänglich sein sollte. Unsere Mission ist es, den urbanen Transport zu revolutionieren.",
      image: "/lovable-uploads/605721e5-fa14-422b-b77a-35b93be0c8ff.png"
    },
    {
      id: 2,
      name: "Chanti",
      role: "CFO",
      quote: "Finanzielle Exzellenz treibt nachhaltiges Wachstum an. Jede Investitionsentscheidung unterstützt unsere Mission, urbane Mobilität zu transformieren.",
      image: "/lovable-uploads/6f7b3532-0531-4217-84ac-9969faa59981.png"
    },
    {
      id: 3,
      name: "Noah",
      role: "CTO",
      quote: "Innovation durch technische Exzellenz. Jede Komponente ist für Haltbarkeit, Effizienz und Benutzererfahrung entwickelt.",
      image: "/lovable-uploads/90e30aa4-dbec-42db-8be2-ccb1c039477f.png"
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
      title: "Unser Innovationslabor",
      subtitle: "Wo Ideen Realität werden",
      description: "Unsere hochmoderne Forschungs- und Entwicklungseinrichtung ist der Ort, wo wir kontinuierlich innovieren und neue Lösungen für nachhaltige urbane Mobilität testen.",
      image: heroCargoBike,
      buttonText: "Besuchen Sie unser Labor"
    },
    {
      id: 2,
      title: "Nachhaltigkeit zuerst",
      subtitle: "Bauen für morgen",
      description: "Jede Entscheidung, die wir treffen, wird von unserem Engagement für Umweltverantwortung geleitet und schafft eine nachhaltigere Zukunft für urbanen Transport.",
      image: dealerPerson,
      buttonText: "Unsere grünen Initiativen"
    },
    {
      id: 3,
      title: "Globaler Einfluss",
      subtitle: "Städte weltweit transformieren",
      description: "Von Berlin bis Tokio helfen unsere Lösungen Städten dabei, Emissionen zu reduzieren, Verkehrsstaus zu verringern und lebenswertere urbane Räume zu schaffen.",
      image: heroCargoBike,
      buttonText: "Sehen Sie unseren Einfluss"
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
              wir sind <span className="bg-gradient-to-r from-brand-aqua to-brand-purple bg-clip-text text-transparent">ally-mobility</span>
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
            <h2 className="text-white text-5xl lg:text-6xl font-bold">Treten Sie unserer Community bei</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Verbinden Sie sich mit uns und bleiben Sie auf dem Laufenden über die neuesten Entwicklungen in nachhaltiger urbaner Mobilität
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
                  <p className="text-muted-foreground text-sm leading-relaxed">Folgen Sie unserer Reise und sehen Sie unsere Produkte in Aktion mit täglichen Updates und Behind-the-Scenes-Inhalten</p>
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white border-0 hover:from-pink-600 hover:to-orange-500 rounded-2xl py-3 font-semibold shadow-lg">
                    Auf Instagram folgen
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
                  <p className="text-muted-foreground text-sm leading-relaxed">Professionelle Updates, Branchen-Einblicke und Networking-Möglichkeiten in nachhaltiger Mobilität</p>
                  <Button className="w-full bg-blue-600 text-white border-0 hover:bg-blue-700 rounded-2xl py-3 font-semibold shadow-lg">
                    Auf LinkedIn vernetzen
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
                  <p className="text-muted-foreground text-sm leading-relaxed">Treten Sie unseren Community-Diskussionen bei, erhalten Sie sofortigen Support und vernetzen Sie sich mit anderen Mobilitäts-Enthusiasten</p>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 hover:from-blue-600 hover:to-blue-700 rounded-2xl py-3 font-semibold shadow-lg">
                    Telegram beitreten
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
                <h2 className="text-primary text-4xl lg:text-5xl font-bold">Kontakt</h2>
                <p className="text-xl text-muted-foreground">
                  Bereit, Ihre urbane Logistik zu transformieren? Kontaktieren Sie unser Team.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-aqua/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">E-Mail</p>
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
                className="btn-contact text-lg px-8 py-4"
                onClick={() => window.location.href = 'mailto:info@ally-mobility.com'}
              >
                Kontaktieren Sie uns
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

      <Footer />
    </div>
  );
};

export default AboutUs;