
import Layout from '@/components/Layout';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Essential Safety Guidelines for Core Cutting Operations',
      excerpt: 'Learn about the critical safety measures and protocols that ensure secure core cutting operations in construction projects.',
      author: 'Safety Team',
      date: '2024-01-15',
      category: 'Safety',
      readTime: '5 min read'
    },
    {
      title: 'Diamond Core Cutting vs Traditional Methods: A Comparison',
      excerpt: 'Explore the advantages of diamond core cutting technology over traditional concrete cutting methods in terms of precision and efficiency.',
      author: 'Technical Team',
      date: '2024-01-10',
      category: 'Technology',
      readTime: '7 min read'
    },
    {
      title: 'Best Practices for RCC Slab Core Cutting',
      excerpt: 'Comprehensive guide on proper techniques and considerations for successful RCC slab core cutting projects.',
      author: 'Project Manager',
      date: '2024-01-05',
      category: 'Best Practices',
      readTime: '6 min read'
    },
    {
      title: 'Understanding Different Types of Rebaring Techniques',
      excerpt: 'A detailed overview of various rebaring methods and their applications in different construction scenarios.',
      author: 'Technical Team',
      date: '2023-12-28',
      category: 'Techniques',
      readTime: '8 min read'
    },
    {
      title: 'Equipment Maintenance for Core Cutting Machines',
      excerpt: 'Essential maintenance tips to keep your core cutting equipment in optimal condition for maximum performance.',
      author: 'Maintenance Team',
      date: '2023-12-20',
      category: 'Equipment',
      readTime: '4 min read'
    },
    {
      title: 'Cost-Effective Solutions for Large Scale Projects',
      excerpt: 'Strategies and approaches to optimize costs while maintaining quality in large-scale core cutting and rebaring projects.',
      author: 'Project Manager',
      date: '2023-12-15',
      category: 'Project Management',
      readTime: '6 min read'
    }
  ];

  return (
    <Layout>
      <div className="pt-8">
        {/* Hero Section */}
        <section className="py-20 hero-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 fade-in text-black">
              Industry{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Insights & Tips
              </span>
            </h1>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto fade-in">
              Stay updated with the latest trends, techniques, and best practices in core cutting and rebaring industry.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article 
                  key={post.title}
                  className="service-card group cursor-pointer slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-6 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <ArrowRight className="h-6 w-6 text-primary" />
                      </div>
                      <span className="text-xs text-primary font-medium">{post.category}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-heading text-lg font-semibold group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="h-3 w-3 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                      <span className="text-primary">{post.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-card/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 fade-in">
              Stay Updated
            </h2>
            <p className="text-xl text-muted-foreground mb-8 fade-in">
              Subscribe to our newsletter for the latest industry insights and project updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto fade-in">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Blog;
