import React, { useEffect, useRef } from 'react';
import { ArrowRight, Shield, Cpu, Database, Wifi } from 'lucide-react';
import { Link } from './Link';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const animateBackground = () => {
      const callback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      };

      const observer = new IntersectionObserver(callback, { threshold: 0.1 });
      
      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => observer.disconnect();
    };

    animateBackground();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary-dark opacity-90"></div>
        <div className="absolute top-1/4 -left-20 w-40 h-40 rounded-full bg-accent/20 blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-60 h-60 rounded-full bg-secondary/20 blur-3xl"></div>
      </div>

      {/* Floating security icons */}
      <div className="absolute inset-0 overflow-hidden">
        <Shield className="absolute top-1/4 left-1/5 w-8 h-8 text-secondary/20 animate-float" style={{animationDelay: '0s'}} />
        <Cpu className="absolute top-2/3 left-1/4 w-6 h-6 text-accent/20 animate-float" style={{animationDelay: '1.5s'}} />
        <Database className="absolute top-1/3 right-1/4 w-7 h-7 text-secondary/20 animate-float" style={{animationDelay: '2.2s'}} />
        <Wifi className="absolute bottom-1/4 right-1/3 w-10 h-10 text-accent/20 animate-float" style={{animationDelay: '0.7s'}} />
      </div>
      
      {/* Code scan animation overlay */}
      <div className="absolute inset-0 code-animation opacity-40"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3 space-y-6">
            <div className="inline-block py-1 px-3 border border-secondary rounded text-secondary text-sm font-medium mb-4 animate-fade-in opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
              Cybersecurity Experts
            </div>
            
            <h1 className="opacity-0 animate-fade-in" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
              <span className="block">Defending Digital</span> 
              <span className="gradient-text">Boundaries</span> 
              <span className="block">In A Connected World</span>
            </h1>
            
            <p className="text-text-secondary text-lg md:text-xl max-w-2xl my-6 opacity-0 animate-fade-in" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
              Zeroday Operation Research provides elite cybersecurity services including digital forensics, threat intelligence, and penetration testing to protect your organization from evolving cyber threats.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 opacity-0 animate-fade-in" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
              <Link href="#services" className="btn-primary inline-flex items-center">
                <span>Explore Services</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="#contact" className="btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-2 opacity-0 animate-fade-in" style={{animationDelay: '1s', animationFillMode: 'forwards'}}>
            <div className="relative p-1 rounded-lg bg-gradient-to-br from-secondary/50 via-accent/50 to-secondary-dark/50">
              <div className="absolute -inset-0.5 rounded-lg blur opacity-30 bg-gradient-to-br from-secondary via-accent to-secondary-dark animate-pulse-slow"></div>
<div className="relative rounded-lg overflow-hidden aspect-video">
  <iframe
    src="https://www.youtube-nocookie.com/embed/G-aQgjGLWQo?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&mute=1&loop=1&playlist=G-aQgjGLWQo"
    title="Cybersecurity operations center video"
    className="w-full h-full absolute top-0 left-0"
    frameBorder="0"
    allow="autoplay; encrypted-media"
    allowFullScreen={false}
  />
</div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Hero;