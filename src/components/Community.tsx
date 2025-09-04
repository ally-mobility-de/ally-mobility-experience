import { useState } from 'react';

interface ArticleCard {
  id: string;
  title: string;
  excerpt: string;
  source: string;
  platform: 'LinkedIn' | 'Instagram' | 'News' | 'Blog';
  image: string;
  link: string;
}

const Community = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const articles: ArticleCard[] = [
    {
      id: '1',
      title: 'Urban Mobility Redefined',
      excerpt: 'How electric cargo bikes are revolutionizing city logistics and reducing traffic congestion.',
      source: 'Handelsblatt',
      platform: 'News',
      image: '/lovable-uploads/93f64d63-22a9-46a0-8efa-e70fbcfcbf49.png',
      link: '#'
    },
    {
      id: '2', 
      title: 'Sustainability Drives Innovation',
      excerpt: 'Over 100 years of automotive experience meets cutting-edge e-mobility technology.',
      source: 'mubea-mobility.com',
      platform: 'Blog',
      image: '/lovable-uploads/efb3ba3c-f7c0-44a1-b103-188df448839f.png',
      link: '#'
    },
    {
      id: '3',
      title: 'Customer Success Story',
      excerpt: 'How local delivery services increased efficiency by 40% with modular cargo solutions.',
      source: 'ally-mobility',
      platform: 'LinkedIn',
      image: '/lovable-uploads/a05449e6-bcab-4dd7-ab51-a035e539c831.png',
      link: '#'
    },
    {
      id: '4',
      title: 'Future of Urban Transport', 
      excerpt: 'Industry experts discuss the role of cargo bikes in sustainable city planning.',
      source: 'Transport Weekly',
      platform: 'News',
      image: '/lovable-uploads/490bcce7-aa4a-4421-94be-46e49da9d3c8.png',
      link: '#'
    },
    {
      id: '5',
      title: 'Innovation Spotlight',
      excerpt: 'Behind the scenes: Engineering the perfect balance of durability and efficiency.',
      source: 'ally-mobility',
      platform: 'Instagram',
      image: '/lovable-uploads/4b19d7f4-7d6d-44c5-9db1-f14823dafd21.png',
      link: '#'
    }
  ];

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(articles.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'LinkedIn': return 'bg-blue-600';
      case 'Instagram': return 'bg-pink-600';
      case 'News': return 'bg-brand-aqua';
      case 'Blog': return 'bg-primary';
      default: return 'bg-muted-foreground';
    }
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <h2 className="text-brand-green">Community & Press</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest news, insights, and stories from the ally-mobility community
            </p>
          </div>

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

export default Community;