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
      title: 'Urbane Mobilität neu definiert',
      excerpt: 'Wie elektrische Lastenräder die Stadtlogistik revolutionieren und Verkehrsstaus reduzieren.',
      source: 'Handelsblatt',
      platform: 'News',
      image: '/lovable-uploads/93f64d63-22a9-46a0-8efa-e70fbcfcbf49.png',
      link: '#'
    },
    {
      id: '2', 
      title: 'Nachhaltigkeit treibt Innovation an',
      excerpt: 'Über 100 Jahre Automobilexpertise trifft auf modernste E-Mobilitätstechnologie.',
      source: 'mubea-mobility.com',
      platform: 'Blog',
      image: '/lovable-uploads/efb3ba3c-f7c0-44a1-b103-188df448839f.png',
      link: '#'
    },
    {
      id: '3',
      title: 'Kundenerfolgsgeschichte',
      excerpt: 'Wie lokale Lieferdienste ihre Effizienz um 40% mit modularen Frachttransportlösungen steigerten.',
      source: 'ally-mobility',
      platform: 'LinkedIn',
      image: '/lovable-uploads/a05449e6-bcab-4dd7-ab51-a035e539c831.png',
      link: '#'
    },
    {
      id: '4',
      title: 'Zukunft des urbanen Transports',
      excerpt: 'Branchenexperten diskutieren die Rolle von Lastenrädern in der nachhaltigen Stadtplanung.',
      source: 'Transport Weekly',
      platform: 'News',
      image: '/lovable-uploads/490bcce7-aa4a-4421-94be-46e49da9d3c8.png',
      link: '#'
    },
    {
      id: '5',
      title: 'Innovation im Fokus',
      excerpt: 'Hinter den Kulissen: Die perfekte Balance zwischen Haltbarkeit und Effizienz entwickeln.',
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
      case 'Instagram': return 'bg-brand-purple';
      case 'News': return 'bg-brand-aqua';
      case 'Blog': return 'bg-accent';
      default: return 'bg-muted-foreground';
    }
  };

  return (
    <section className="diagonal-section diagonal-colorful">
      <div className="diagonal-section-content">
        <div className="container-custom">
          <div className="text-center space-y-12">
            {/* Header */}
            <div className="space-y-6">
              <h2 className="text-white">Community & Press</h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Bleiben Sie auf dem Laufenden mit den neuesten Nachrichten, Einblicken und Geschichten aus der ally-mobility Community
              </p>
            </div>

            {/* Articles Carousel */}
            <div className="relative max-w-6xl mx-auto">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {Array.from({ length: totalSlides }, (_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                        {articles
                          .slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide)
                          .map((article) => (
                            <div key={article.id} className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-colorful overflow-hidden hover:shadow-xl hover:bg-white transition-all duration-300">
                              <img 
                                src={article.image} 
                                alt={article.title}
                                className="w-full h-48 object-cover"
                              />
                              <div className="p-6 space-y-4">
                                <div className="flex items-center justify-between">
                                  <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getPlatformColor(article.platform)}`}>
                                    {article.platform}
                                  </span>
                                  <span className="text-sm text-muted-foreground">{article.source}</span>
                                </div>
                                <h3 className="text-xl font-semibold text-primary line-clamp-2">{article.title}</h3>
                                <p className="text-muted-foreground line-clamp-3">{article.excerpt}</p>
                                <a 
                                  href={article.link} 
                                  className="inline-flex items-center text-accent hover:text-accent/80 transition-colors font-medium"
                                >
                                  Mehr lesen →
                                </a>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border-2 border-white text-accent hover:bg-accent hover:text-white transition-colors duration-300 flex items-center justify-center shadow-colorful"
                >
                  ←
                </button>
                
                <div className="flex gap-2">
                  {Array.from({ length: totalSlides }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        index === currentSlide ? 'bg-white' : 'bg-white/40'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border-2 border-white text-accent hover:bg-accent hover:text-white transition-colors duration-300 flex items-center justify-center shadow-colorful"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;