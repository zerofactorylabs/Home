import React from 'react';
import { Shield, Mail, Phone, MapPin, Github as GitHub, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Link } from './Link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark relative pt-20 pb-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary to-transparent"></div>
      
      {/* Code scan animation overlay */}
      <div className="absolute inset-0 code-animation opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="h-8 w-8 text-secondary" />
              <span className="text-xl font-bold">
                <span className="text-text-primary">Zeroday</span>
                <span className="text-secondary"> Operations</span>
              </span>
            </div>
            
            <p className="text-text-secondary mb-6">
              Defending digital boundaries with advanced cybersecurity services, including digital forensics, 
              threat intelligence, and penetration testing.
            </p>
            
            <div className="flex items-center space-x-4">
              <a href="#" className="text-text-tertiary hover:text-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-text-tertiary hover:text-secondary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-text-tertiary hover:text-secondary transition-colors">
                <GitHub className="h-5 w-5" />
              </a>
              <a href="#" className="text-text-tertiary hover:text-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { text: 'Home', href: '/' },
                { text: 'About Us', href: '/about' },
                { text: 'Services', href: '/services' },
                { text: 'Case Studies', href: '/case-studies' },
                { text: 'Blog', href: '/blog' },
                { text: 'Contact', href: '/contact' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-text-tertiary hover:text-secondary transition-colors inline-block"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                'Digital Forensics',
                'Cybersecurity Intelligence',
                'Penetration Testing',
                'Security Compliance',
                'Incident Response',
                'Security Architecture'
              ].map((service, index) => (
                <li key={index}>
                  <Link 
                    href={`/services#${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-text-tertiary hover:text-secondary transition-colors inline-block"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex">
                <Mail className="h-5 w-5 text-secondary mr-3 flex-shrink-0 mt-1" />
                <span className="text-text-tertiary">info@zerodayops.com</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-secondary mr-3 flex-shrink-0 mt-1" />
                <span className="text-text-tertiary">+1 (555) 123-4567</span>
              </li>
              <li className="flex">
                <MapPin className="h-5 w-5 text-secondary mr-3 flex-shrink-0 mt-1" />
                <span className="text-text-tertiary">1234 Cyber Avenue, Suite 500<br/>San Francisco, CA 94105</span>
              </li>
            </ul>
            
            <div className="mt-8">
              <h5 className="font-semibold mb-2">Emergency Response</h5>
              <p className="text-secondary text-lg">+1 (555) 911-CYBER</p>
              <p className="text-text-tertiary text-sm">Available 24/7 for critical incidents</p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary-light text-center md:flex md:justify-between md:items-center">
          <p className="text-text-tertiary text-sm">
            &copy; {new Date().getFullYear()} Zeroday Operation Research LLC. All Rights Reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex flex-wrap justify-center md:justify-end space-x-4 text-text-tertiary text-sm">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/cookies">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;