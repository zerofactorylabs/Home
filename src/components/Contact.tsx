import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      await emailjs.sendForm(
        'service_mcg6sb4',
        'template_5g8foja',
        formRef.current!,
        '3_dIyKzTjco5OJNlT'
      );
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="section bg-primary-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary to-transparent"></div>
      
      {/* Background elements */}
      <div className="absolute top-1/4 -right-20 w-60 h-60 rounded-full bg-secondary/10 blur-3xl"></div>
      <div className="absolute bottom-1/3 -left-20 w-40 h-40 rounded-full bg-accent/10 blur-3xl"></div>
      
      <div className="container-custom relative">
        <div className="section-title">
          <span className="text-secondary text-lg font-mono mb-2">Get In Touch</span>
          <h2 className="text-4xl font-bold mb-2">Contact Us</h2>
          <p className="text-text-secondary max-w-2xl mt-6">
            Have a security concern or want to learn more about our services? Our team is ready to assist you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <div className="bg-primary rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-light rounded-full p-3 text-secondary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <p className="text-text-secondary">business@opzero.id</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-light rounded-full p-3 text-secondary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Call Us</h4>
                    <p className="text-text-secondary">+1 (201) 992-1015</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-light rounded-full p-3 text-secondary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Visit Us</h4>
                    <p className="text-text-secondary">Gandaria 8 Office Tower, Suite Lt30 - 𝗣𝗪𝗡 𝗚𝗥𝗢𝗨𝗣𝗦</p>
                    <p className="text-text-secondary">South Jakarta, ID 12240</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-primary-light">
                <h4 className="font-semibold mb-4">Emergency Response</h4>
                <p className="text-text-secondary mb-4">
                  For urgent security incidents requiring immediate assistance:
                </p>
                <div className="bg-primary-light p-4 rounded-lg">
                  <p className="text-secondary font-semibold">24/7 Incident Response Hotline</p>
                  <p className="text-text-primary text-lg">+1 (201) 992-1015</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-primary rounded-lg p-8 relative code-animation overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="inline-block mx-auto bg-primary-light rounded-full p-4 text-secondary mb-4">
                      <Send size={32} />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Message Sent Successfully!</h4>
                    <p className="text-text-secondary">
                      Thank you for contacting us. Our team will respond to your inquiry within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-text-tertiary text-sm mb-2">Full Name *</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-primary-light text-text-primary border border-primary-light rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-text-tertiary text-sm mb-2">Email Address *</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-primary-light text-text-primary border border-primary-light rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-text-tertiary text-sm mb-2">Phone Number</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone" 
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-primary-light text-text-primary border border-primary-light rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-text-tertiary text-sm mb-2">Company</label>
                        <input 
                          type="text" 
                          id="company" 
                          name="company" 
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full bg-primary-light text-text-primary border border-primary-light rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-text-tertiary text-sm mb-2">Service of Interest</label>
                      <select 
                        id="service" 
                        name="service" 
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-primary-light text-text-primary border border-primary-light rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
                      >
                        <option value="">Select a service</option>
                        <option value="Digital Forensics">Digital Forensics</option>
                        <option value="Penetration Testing">Penetration Testing</option>
                        <option value="Cybersecurity Intelligence">Cybersecurity Intelligence</option>
                        <option value="Incident Response">Incident Response</option>
                        <option value="Security Compliance">Security Compliance</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-text-tertiary text-sm mb-2">Message *</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full bg-primary-light text-text-primary border border-primary-light rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
                        required
                      ></textarea>
                    </div>
                    
                    {error && (
                      <div className="text-red-500 text-sm">{error}</div>
                    )}
                    
                    <div>
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full flex justify-center items-center"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;