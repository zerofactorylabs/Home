import React from 'react';
import { Shield, Search, Lock, Terminal, Database, Code, Cpu, Layers } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

const services = [
  {
    icon: <Shield size={24} />,
    title: 'Digital Forensics',
    description: 'Expert analysis of digital evidence for incident response, legal proceedings, and internal investigations.'
  },
  {
    icon: <Search size={24} />,
    title: 'Cybersecurity Intelligence',
    description: 'Proactive threat intelligence to identify and mitigate potential security threats before they impact your organization.'
  },
  {
    icon: <Terminal size={24} />,
    title: 'Penetration Testing',
    description: 'Comprehensive security assessments to identify vulnerabilities in your systems before attackers do.'
  },
  {
    icon: <Lock size={24} />,
    title: 'Security Compliance',
    description: 'Expert guidance to achieve and maintain compliance with industry standards and regulations.'
  },
  {
    icon: <Database size={24} />,
    title: 'Secure Cloud Infrastructure',
    description: 'Design and implementation of secure cloud environments with robust security controls.'
  },
  {
    icon: <Code size={24} />,
    title: 'Secure Development',
    description: 'Integration of security throughout the software development lifecycle to build secure applications.'
  },
  {
    icon: <Cpu size={24} />,
    title: 'Incident Response',
    description: '24/7 emergency response to security incidents with rapid containment and remediation.'
  },
  {
    icon: <Layers size={24} />,
    title: 'Security Architecture',
    description: 'Design and implementation of robust security architectures tailored to your organization\'s needs.'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="section bg-primary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary-dark to-transparent"></div>
      
      <div className="container-custom relative">
        <div className="section-title">
          <span className="text-secondary text-lg font-mono mb-2">What We Do</span>
          <h2 className="text-4xl font-bold mb-2">Our Services</h2>
          <p className="text-text-secondary max-w-2xl mt-6">
            We offer a comprehensive suite of cybersecurity services to protect your organization
            from evolving threats across your digital ecosystem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={0.1 * index}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="btn-outline">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;