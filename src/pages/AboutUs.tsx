import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroCargoBike from "@/assets/hero-cargo-bike.jpg";
import dealerPerson from "@/assets/dealer-person.jpg";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";

const AboutUs = () => {
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
          <div className="relative mx-auto max-w-4xl">
            <img 
              src={heroCargoBike} 
              alt="About ally-mobility" 
              className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl flex items-end">
              <div className="p-8 text-white">
                <h1 className="text-4xl lg:text-6xl font-bold mb-4">
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

      {/* Mission Statement */}
      <section className="section-padding">
        <div className="container-custom text-center space-y-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-primary">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We aim to sustainably relieve cities by providing innovative, efficient, 
              and accessible mobility solutions. Our cargo bike trailers represent the future 
              of urban logistics—fast, quiet, and environmentally responsible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-brand-aqua/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-primary">Sustainable</h3>
              <p className="text-muted-foreground">Zero emissions, maximum impact on urban air quality</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-brand-aqua/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-primary">Efficient</h3>
              <p className="text-muted-foreground">Smart design for maximum productivity and minimal effort</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-brand-aqua/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-primary">Accessible</h3>
              <p className="text-muted-foreground">No license required, simple operation for everyone</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Portraits */}
      <section className="section-padding bg-secondary-light">
        <div className="container-custom space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-primary">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The passionate minds behind ally-mobility, working together to create 
              the future of sustainable urban transport.
            </p>
          </div>
          
          {teamMembers.map((member, index) => (
            <div key={member.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              {/* Portrait */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : 'lg:col-start-2'}>
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-80 h-80 object-cover rounded-full mx-auto shadow-lg"
                  />
                </div>
              </div>
              
              {/* Quote */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : 'lg:col-start-1'}`}>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-primary">{member.name}</h3>
                  <p className="text-lg font-medium text-secondary">{member.role}</p>
                </div>
                
                <blockquote className="text-xl text-muted-foreground leading-relaxed italic border-l-4 border-brand-aqua pl-6">
                  "{member.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Banner Blocks */}
      <section className="section-padding">
        <div className="container-custom space-y-16">
          {bannerBlocks.map((block, index) => (
            <div key={block.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <h2 className="text-primary">{block.title}</h2>
                  <h3 className="text-xl font-semibold text-secondary">{block.subtitle}</h3>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {block.description}
                </p>
                
                <Button className="btn-aqua">
                  {block.buttonText}
                </Button>
              </div>
              
              {/* Image */}
              <div>
                <img 
                  src={block.image} 
                  alt={block.title}
                  className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community Banner */}
      <section className="section-padding bg-brand-dark-purple text-white">
        <div className="container-custom text-center space-y-8">
          <h2 className="text-white">Join Our Community</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Stay connected with the ally-mobility community. Follow our journey, 
            get updates on new products, and connect with other sustainable mobility enthusiasts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-secondary-outline text-white border-white hover:bg-white hover:text-brand-dark-purple">
              <Instagram className="w-5 h-5 mr-2" />
              Follow on Instagram
            </Button>
            <Button className="btn-secondary-outline text-white border-white hover:bg-white hover:text-brand-dark-purple">
              <Linkedin className="w-5 h-5 mr-2" />
              Connect on LinkedIn
            </Button>
            <Button className="btn-aqua">
              <MessageCircle className="w-5 h-5 mr-2" />
              Join Telegram
            </Button>
          </div>
          
          <div className="pt-8">
            <p className="text-brand-aqua font-medium text-lg">
              Be part of the sustainable mobility revolution →
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;