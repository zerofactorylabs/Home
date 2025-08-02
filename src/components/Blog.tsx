import React from 'react';
import { Calendar, Clock, User, Tag, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Evolving Threat Landscape of Ransomware in 2025',
    excerpt: 'An analysis of emerging ransomware trends and effective mitigation strategies for organizations.',
    date: 'May 12, 2025',
    readTime: '8 min read',
    author: 'Alex Chen',
    category: 'Threat Intelligence',
    image: 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 2,
    title: 'Securing Cloud-Native Applications: Best Practices',
    excerpt: 'Key strategies for implementing security throughout the development lifecycle of cloud-native applications.',
    date: 'April 28, 2025',
    readTime: '10 min read',
    author: 'Emma Rodriguez',
    category: 'Cloud Security',
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 3,
    title: 'Digital Forensics in the Age of AI: Challenges and Solutions',
    excerpt: 'How artificial intelligence is changing the landscape of digital forensics and incident response.',
    date: 'April 15, 2025',
    readTime: '7 min read',
    author: 'Sarah Johnson',
    category: 'Digital Forensics',
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1600'
  }
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="section bg-primary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary-dark to-transparent"></div>
      
      <div className="container-custom relative">
        <div className="section-title">
          <span className="text-secondary text-lg font-mono mb-2">05. Latest Insights</span>
          <h2 className="text-4xl font-bold mb-2">Security Blog</h2>
          <p className="text-text-secondary max-w-2xl mt-6">
            Stay informed with our latest research, security advisories, and industry insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {blogPosts.map(post => (
            <article 
              key={post.id}
              className="bg-primary-light rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary/90 text-primary-dark px-3 py-1 rounded text-xs font-bold">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-text-tertiary text-xs space-x-4 mb-3">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center">
                    <User size={14} className="mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <h3 className="font-bold text-xl mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-text-secondary text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                
                <a href="#" className="text-secondary text-sm font-medium flex items-center hover:underline">
                  Read Article 
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="btn-outline">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;