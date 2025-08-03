import React from 'react';
import { Github as GitHub, Twitter, Linkedin } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

const team: TeamMember[] = [
  {
    name: 'Petter Han',
    role: 'Chief Security Officer',
    image: 'https://i.postimg.cc/gk0B1Btz/Copy-of-Colorful-Simple-Vlogger-Youtube-Profile-Picture-4.png',
    bio: 'Former military intelligence officer with 15+ years of cybersecurity experience specializing in threat intelligence and security strategy.',
    social: {
      linkedin: '#',
      twitter: '#',
      github: 'https://github.com/ptrgits'
    }
  },
  {
    name: 'Bella Hadikusuma',
    role: 'Director of Digital Forensics',
    image: 'https://i.postimg.cc/cCVzJtQT/520791309-1400349394510975-5903024182008219325-n.jpg',
    bio: 'Certified forensic examiner with expertise in incident response, malware analysis, and expert witness testimony.',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Thomas Andri Hutomo',
    role: 'Lead Penetration Tester',
    image: 'https://i.postimg.cc/gk0B1Btz/Copy-of-Colorful-Simple-Vlogger-Youtube-Profile-Picture-4.png',
    bio: 'Ethical hacker specializing in red team operations, web application security, and cloud infrastructure testing.',
    social: {
      linkedin: 'https://www.linkedin.com/in/securewithandri/',
      github: 'https://github.com/odaysec'
    }
  },
  {
    name: 'Sukirno Adi Sampurno',
    role: 'Security Architecture Lead',
    image: 'https://i.postimg.cc/gk0B1Btz/Copy-of-Colorful-Simple-Vlogger-Youtube-Profile-Picture-4.png',
    bio: 'Expert in designing zero-trust architectures, cloud security, and secure development practices.',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  }
];

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="section bg-primary-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary to-transparent"></div>
      
      <div className="container-custom relative">
        <div className="section-title">
          <span className="text-secondary text-lg font-mono mb-2">Our Experts</span>
          <h2 className="text-4xl font-bold mb-2">Meet The Team</h2>
          <p className="text-text-secondary max-w-2xl mt-6">
            Our team of certified security professionals combines deep technical expertise with practical
            experience to deliver exceptional cybersecurity services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="bg-primary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <span className="text-secondary text-sm font-mono">{member.role}</span>
                <h3 className="font-bold text-xl mt-1 mb-3">{member.name}</h3>
                <p className="text-text-secondary text-sm">{member.bio}</p>
                
                <div className="flex space-x-4 mt-5">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="text-text-tertiary hover:text-secondary transition-colors">
                      <Linkedin size={20} />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="text-text-tertiary hover:text-secondary transition-colors">
                      <Twitter size={20} />
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} className="text-text-tertiary hover:text-secondary transition-colors">
                      <GitHub size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;