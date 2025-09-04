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
        // REPLACE THIS LINE
        <div className="text-center space-y-4 mx-[19px] px-0 py-0 my-[10px]">

          {/* Header */}
          <div className="space-y-2">
            <h2 className="text-brand-green">Community & Press</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest news, insights, and stories from the ally-mobility community
            </p>
          </div>

          {/* Carousel */}
          {/* REPLACE YOUR ENTIRE CAROUSEL BLOCK WITH THIS */}
<div className="relative">
  <div className="overflow-hidden">
    <div
      className="flex transition-transform duration-500 ease-out"
      style={{
        transform: `translateX(-${currentSlide * 100}%)`,
        width: `${totalSlides * 100}%`,
      }}
    >
      {Array.from({ length: totalSlides }).map((_, slideIndex) => (
        <div
          key={slideIndex}
          className="w-full flex-shrink-0 min-h-[70vh] flex items-center justify-center"
        >
          {/* 2 cards per slide, equal spacing, equal height */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch justify-items-center px-4">
            {articles
              .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
              .map((article) => (
                <div
                  key={article.id}
                  onClick={() => window.open(article.link, '_blank')}
                  className="product-card group cursor-pointer w-full max-w-[620px] h-full flex flex-col"
                >
                  {/* Image keeps consistent top area */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`${getPlatformColor(article.platform)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                        {article.platform}
                      </span>
                    </div>
                  </div>

                  {/* Content fills remaining height to equalize cards */}
                  <div className="p-6 flex flex-col gap-4 flex-1">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-brand-green group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground line-clamp-3 leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>

                    {/* Footer sticks to bottom so both cards end at same height */}
                    <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                      <div className="text-sm font-medium text-brand-aqua">
                        {article.source}
                      </div>
                      <div className="w-6 h-6 text-primary">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Dots — slightly tighter spacing below the blocks */}
  <div className="flex justify-center space-x-2 mt-2">
    {Array.from({ length: totalSlides }).map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentSlide(index)}
        className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentSlide === index ? 'bg-primary' : 'bg-border'}`}
        aria-label={`Go to slide ${index + 1}`}
      />
    ))}
  </div>
</div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white shadow-soft rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 disabled:opacity-50"
              disabled={currentSlide === 0}
            >
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white shadow-soft rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 disabled:opacity-50"
              disabled={currentSlide === totalSlides - 1}
            >
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentSlide === index ? 'bg-primary' : 'bg-border'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;