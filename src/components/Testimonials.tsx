import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  position: string;
  company: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Zeroday's penetration testing team discovered critical vulnerabilities in our infrastructure that other security firms had missed. Their detailed remediation guidance helped us strengthen our security posture significantly.",
    author: "Michael Thompson",
    position: "CIO",
    company: "Global Financial Services Inc.",
    rating: 5,
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    id: 2,
    content: "When our organization experienced a data breach, Zeroday's incident response team was on-site within hours. Their forensic analysis and containment strategy minimized the impact and helped us recover quickly.",
    author: "Jennifer Wilson",
    position: "CISO",
    company: "HealthTech Solutions",
    rating: 5,
    image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    id: 3,
    content: "The security architecture assessment conducted by Zeroday provided us with a comprehensive roadmap for enhancing our cloud security. Their expertise in zero-trust architectures has been invaluable.",
    author: "David Rodriguez",
    position: "VP of IT",
    company: "TechInnovate Corp",
    rating: 5,
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const goToPrevious = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Match with transition duration
  };
  
  const goToNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Match with transition duration
  };
  
  useEffect(() => {
    const interval = setInterval(goToNext, 8000);
    return () => clearInterval(interval);
  }, [currentIndex]);
  
  return (
    <section className="py-24 bg-primary-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary to-transparent"></div>
      
      {/* Background elements */}
      <div className="absolute top-1/3 -left-20 w-40 h-40 rounded-full bg-secondary/10 blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-20 w-40 h-40 rounded-full bg-accent/10 blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary text-lg font-mono mb-2 block">Testimonials</span>
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-text-secondary">
            Don't just take our word for it. Hear from organizations we've helped protect against evolving cyber threats.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map(testimonial => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="bg-primary rounded-lg p-8 shadow-lg">
                    <div className="flex items-center space-x-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={20} 
                          className={i < testimonial.rating ? "text-secondary fill-secondary" : "text-text-tertiary"} 
                        />
                      ))}
                    </div>
                    
                    <blockquote className="text-lg italic text-text-primary mb-8">
                      "{testimonial.content}"
                    </blockquote>
                    
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        className="w-14 h-14 rounded-full object-cover mr-4"
                      />
                      <div>
                        <p className="font-bold">{testimonial.author}</p>
                        <p className="text-text-tertiary text-sm">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-primary rounded-full p-3 text-secondary hover:text-secondary-dark shadow-lg transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-primary rounded-full p-3 text-secondary hover:text-secondary-dark shadow-lg transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-secondary' : 'bg-primary-light'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;