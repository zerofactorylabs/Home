import React from 'react';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-primary-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary to-transparent"></div>
      
      <div className="container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Zeroday Operation Research Team"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/50 to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-lg max-w-xs shadow-xl">
                <p className="text-4xl font-bold text-secondary mb-2">10+</p>
                <p className="text-text-primary">Years of cybersecurity expertise</p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-secondary rounded-lg z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-40 h-40 border-2 border-secondary-dark rounded-lg z-0"></div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="section-title">
              <span className="text-secondary text-lg font-mono mb-2">02. Who We Are</span>
              <h2 className="text-4xl font-bold mb-2">Elite Cybersecurity Experts</h2>
            </div>
            
            <p className="text-text-secondary">
              Founded in 2015, Zeroday Operation Research LLC has established itself as a leader in the cybersecurity industry, 
              providing enterprise-grade security solutions to organizations of all sizes.
            </p>
            
            <p className="text-text-secondary">
              Our team of certified security professionals combines deep technical expertise with practical business experience 
              to deliver customized security solutions that address your specific challenges and objectives.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {[
                'Certified Security Experts',
                'Advanced Threat Research',
                'Custom Security Solutions',
                'Industry-Leading Methodologies',
                '24/7 Incident Response',
                'Regulatory Compliance'
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                  <span className="text-text-primary">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-4">
              <button className="btn-outline">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;