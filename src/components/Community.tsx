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
      image: '/Media/community-1.png',
      link: '#'
    },
    {
      id: '2', 
      title: 'Sustainability Drives Innovation',
      excerpt: 'Over 100 years of automotive experience meets cutting-edge e-mobility technology.',
      source: 'mubea-mobility.com',
      platform: 'Blog',
      image: '/Media/community-2.png',
      link: '#'
    },
    {
      id: '3',
      title: 'Customer Success Story',
      excerpt: 'How local delivery services increased efficiency by 40% with modular cargo solutions.',
      source: 'ally-mobility',
      platform: 'LinkedIn',
      image: '/Media/community-3.png',
      link: '#'
    },
    {
      id: '4',
      title: 'Future of Urban Transport', 
      excerpt: 'Industry experts discuss the role of cargo bikes in sustainable city planning.',
      source: 'Transport Weekly',
      platform: 'News',
      image: '/Media/community-4.png',
      link: '#'
    },
    {
      id: '5',
      title: 'Innovation Spotlight',
      excerpt: 'Behind the scenes: Engineering the perfect balance of durability and efficiency.',
      source: 'ally-mobility',
      platform: 'Instagram',
      image: '/Media/community-5.png',
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
                Stay updated with the latest news, insights, and stories from the ally-mobility community
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
                                  Read More →
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