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
    title: 'Arbitrary Command Injection Kubernetes Headlamp macOS Process codeSign',
    excerpt: 'A command injection vulnerability was discovered in the codeSign.js script used in the macOS packaging workflow of the Kubernetes Headlamp project. This issue arises due to the improper use of Node.js `execSync()` function with unsanitized input derived from environment variables, which can be influenced by an attacker.',
    date: 'May 28, 2025',
    author: 'CVE-2025-53542',
    category: '0DAY',
    image: 'https://i.postimg.cc/KvHKZd00/GHSA-34rf-485x-g5h7.png'
  },
  {
    id: 2,
    title: 'Remote Code Execution in New Relic Ruby Agent',
    excerpt: 'A critical remote code execution vulnerability was discovered in New Relic Ruby Agent’s JSON marshaller component. The vulnerability allows attackers to execute arbitrary code by exploiting unsafe deserialization of untrusted data through the agent’s metrics collection system.',
    date: 'April 28, 2025',
    author: 'ruby-agent < 8.17.0',
    category: 'Cloud Security',
    image: 'https://i.postimg.cc/MGV2cQqn/newrelic-ruby-agent.png'
  },
  {
    id: 3,
    title: 'Path Traversal pyload-ng via json Endpoint allows Arbitrary File Write ',
    excerpt: 'An authenticated path traversal vulnerability exists in the `/json/upload` endpoint of the `pyLoad` By manipulating the filename of an uploaded file, an attacker can traverse out of the intended upload directory, allowing them to write arbitrary files to any location on the system accessible to the pyLoad process.',
    date: 'April 15, 2025',
    author: 'CVE-2025-54140',
    category: '0DAY',
    image: 'https://i.postimg.cc/vB0PDYg1/GHSA-xqpg-92fq-grfg.png'
  },
  {
    id: 4,
    title: 'Thor can construct an unsafe shell command from library input (Path Traversal ZS)',
    excerpt: 'Thor before 1.4.0 can construct an unsafe shell command from library input. Allows attackers to execute arbitrary system commands by manipulating input passed to Thor utility methods. ',
    date: 'Febuary 28, 2025',
    author: 'CVE-2025-54314',
    category: '0DAY',
    image: 'https://i.postimg.cc/ZYdWHfHg/thor.png'
  }
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="section bg-primary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary-dark to-transparent"></div>
      
      <div className="container-custom relative">
        <div className="section-title">
          <span className="text-secondary text-lg font-mono mb-2">Latest Insights</span>
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
                
                <a href="https://advisory.zerodaysec.org" className="text-secondary text-sm font-medium flex items-center hover:underline">
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