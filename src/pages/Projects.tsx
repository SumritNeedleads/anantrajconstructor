
import Layout from '@/components/Layout';
import { Building, Calendar, MapPin, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Mumbai Metro Line 3 - Core Cutting',
      client: 'Mumbai Metro Rail Corporation',
      location: 'Mumbai, Maharashtra',
      date: '2024',
      description: 'Precision core cutting for metro tunnel construction including wall penetrations and utility installations.',
      services: ['RCC Wall Core Cutting', 'Beam Core Cutting', 'Utility Penetrations'],
      image: '/placeholder.svg'
    },
    {
      title: 'Commercial Complex - Slab Modification',
      client: 'Prestige Group',
      location: 'Bangalore, Karnataka',
      date: '2024',
      description: 'Large scale slab cutting and modification for HVAC installation in commercial building.',
      services: ['RCC Slab Cutting', 'Floor Saw Operations', 'HVAC Penetrations'],
      image: '/placeholder.svg'
    },
    {
      title: 'Residential Tower - Rebaring Work',
      client: 'DLF Limited',
      location: 'Gurgaon, Haryana',
      date: '2023',
      description: 'Comprehensive rebaring and fastener fixing for high-rise residential construction.',
      services: ['Rebaring Work', 'Chemical Fasteners', 'Structural Reinforcement'],
      image: '/placeholder.svg'
    },
    {
      title: 'Industrial Plant - Concrete Cutting',
      client: 'Tata Steel',
      location: 'Jamshedpur, Jharkhand',
      date: '2023',
      description: 'Heavy-duty concrete cutting for industrial facility expansion and equipment installation.',
      services: ['Concrete Core Cutting', 'Wire Saw Cutting', 'Industrial Applications'],
      image: '/placeholder.svg'
    }
  ];

  return (
    <Layout>
      <div className="pt-8">
        {/* Hero Section */}
        <section className="py-20 hero-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 fade-in">
              Our{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Completed Projects
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in">
              Discover our portfolio of successful core cutting and rebaring projects across various industries and sectors.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {projects.map((project, index) => (
                <div 
                  key={project.title}
                  className="service-card slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-6 flex items-center justify-center">
                    <Building className="h-16 w-16 text-primary" />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-heading text-xl font-semibold text-primary">
                      {project.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        {project.client}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {project.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {project.date}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Services Provided:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.services.map((service) => (
                          <span 
                            key={service}
                            className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join our portfolio of successful projects. Get professional consultation and detailed quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Get Free Quote
              </a>
              <a href="/services" className="btn-secondary">
                View Services
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Projects;
