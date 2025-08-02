import React, { useState, useEffect } from 'react';
import { Users, Shield, Award, Lock } from 'lucide-react';

interface Stat {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  delay: number;
}

const stats: Stat[] = [
  {
    icon: <Users size={36} />,
    value: 500,
    label: 'Clients Protected',
    suffix: '+',
    delay: 0
  },
  {
    icon: <Shield size={36} />,
    value: 10000,
    label: 'Security Assessments',
    suffix: '+',
    delay: 300
  },
  {
    icon: <Award size={36} />,
    value: 99,
    label: 'Customer Satisfaction',
    suffix: '%',
    delay: 600
  },
  {
    icon: <Lock size={36} />,
    value: 0,
    label: 'Client Breaches',
    delay: 900
  }
];

const StatCounter: React.FC<{ target: number; suffix?: string; delay: number }> = ({ target, suffix = '', delay }) => {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const counterRef = React.useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    if (!visible) return;
    
    // Add delay before starting the counter
    const delayTimeout = setTimeout(() => {
      let startTime: number;
      const duration = 2000; // Animation duration in ms
      
      const animate = (time: number) => {
        if (!startTime) startTime = time;
        const progress = Math.min((time - startTime) / duration, 1);
        
        // Easing function for smoother animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        setCount(Math.floor(easeOutQuart * target));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, delay);
    
    return () => clearTimeout(delayTimeout);
  }, [visible, target, delay]);
  
  return <div ref={counterRef}>{count}{suffix}</div>;
};

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary-dark to-transparent"></div>
      
      <div className="absolute inset-0 code-animation opacity-30"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-primary-light rounded-lg p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-secondary mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2">
                <StatCounter target={stat.value} suffix={stat.suffix} delay={stat.delay} />
              </div>
              <div className="text-text-tertiary">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;