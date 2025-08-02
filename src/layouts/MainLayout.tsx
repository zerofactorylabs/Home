import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title }) => {
  useEffect(() => {
    // Update page title
    const defaultTitle = document.querySelector('title[data-default]');
    if (title) {
      document.title = `${title} | Zeroday Operation Research`;
      if (defaultTitle) {
        defaultTitle.textContent = `${title} | Zeroday Operation Research`;
      }
    } else {
      document.title = 'Zeroday Operation Research | Cybersecurity Experts';
      if (defaultTitle) {
        defaultTitle.textContent = 'Zeroday Operation Research | Cybersecurity Experts';
      }
    }
  }, [title]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;