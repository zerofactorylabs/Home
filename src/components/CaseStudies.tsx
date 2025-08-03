import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface CaseStudy {
  id: number;
  title: string;
  description: string;
  industry: string;
  services: string[];
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 11,
    title: 'Financial Institution Breach Investigation',
    description: 'Comprehensive incident response and forensic investigation following a sophisticated cyber attack on a major financial institution.',
    industry: 'Finance',
    services: ['Digital Forensics', 'Incident Response', 'Threat Intelligence'],
    image: 'https://i.postimg.cc/qqZsnQT0/Investigations.png'
  },
  {
    id: 2,
    title: 'Healthcare Provider Security Architecture',
    description: 'Design and implementation of a zero-trust security architecture for a healthcare provider with 50+ locations.',
    industry: 'Healthcare',
    services: ['Security Architecture', 'Compliance', 'Risk Assessment'],
    image: 'https://i.postimg.cc/Bb3ykSLt/Whatsapp-Train-NYpwnft-Zeroday.png'
  },
  {
    id: 3,
    title: 'Manufacturing Firm OT/ICS Security',
    description: 'Securing operational technology and industrial control systems for a global manufacturing firm.',
    industry: 'Manufacturing',
    services: ['OT/ICS Security', 'Penetration Testing', 'Security Monitoring'],
    image: 'https://i.postimg.cc/fyHKCDYG/Whatsapp-Iot-Pwn-Zdg.png'
  }
];

const CaseStudies: React.FC = () => {
  const [activeStudy, setActiveStudy] = useState<number>(1);

  return (
    <section id="case-studies" className="section bg-primary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary-dark to-transparent"></div>
      
      <div className="container-custom relative">
        <div className="section-title">
          <span className="text-secondary text-lg font-mono mb-2">Our Work</span>
          <h2 className="text-4xl font-bold mb-2">Case Studies</h2>
          <p className="text-text-secondary max-w-2xl mt-6">
            Explore our successful cybersecurity engagements and see how we've helped organizations
            strengthen their security posture and respond to threats.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 mt-12">
          {/* Case study selection sidebar */}
          <div className="lg:w-1/3">
            <div className="space-y-4">
              {caseStudies.map(study => (
                <div 
                  key={study.id}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                    activeStudy === study.id 
                      ? 'bg-primary-light border-l-4 border-secondary' 
                      : 'bg-primary hover:bg-primary-light/50'
                  }`}
                  onClick={() => setActiveStudy(study.id)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-secondary font-mono">{study.industry}</span>
                    <span className={`h-2 w-2 rounded-full ${activeStudy === study.id ? 'bg-secondary' : 'bg-text-tertiary'}`}></span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{study.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {study.services.map((service, index) => (
                      <span 
                        key={index} 
                        className="inline-block px-2 py-1 bg-primary-dark text-text-tertiary text-xs rounded"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Active case study details */}
          <div className="lg:w-2/3">
            {caseStudies.filter(study => study.id === activeStudy).map(study => (
              <div key={study.id} className="bg-primary-light rounded-lg overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-light via-primary-light/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="text-secondary text-sm font-mono">{study.industry}</span>
                    <h3 className="text-2xl font-bold mt-2">{study.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-text-secondary mb-6">
                    {study.description}
                  </p>
                  
                  <h4 className="text-lg font-semibold mb-3">Challenges</h4>
                  <ul className="list-disc list-inside text-text-secondary mb-6 space-y-2">
                    <li>Complex infrastructure with legacy systems</li>
                    <li>Strict regulatory compliance requirements</li>
                    <li>Need for minimal operational disruption</li>
                  </ul>
                  
                  <h4 className="text-lg font-semibold mb-3">Our Approach</h4>
                  <ul className="list-disc list-inside text-text-secondary mb-6 space-y-2">
                    <li>Comprehensive security assessment</li>
                    <li>Tailored security strategy development</li>
                    <li>Phased implementation with regular testing</li>
                  </ul>
                  
                  <h4 className="text-lg font-semibold mb-3">Results</h4>
                  <ul className="list-disc list-inside text-text-secondary mb-6 space-y-2">
                    <li>90% reduction in security vulnerabilities</li>
                    <li>Successful achievement of compliance requirements</li>
                    <li>Enhanced threat detection and response capabilities</li>
                  </ul>
                  
                  <button className="btn-outline flex items-center mt-4">
                    <span>Read Full Case Study</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;