
import Layout from '@/components/Layout';
import { Circle, Construction, Hammer, Wrench } from 'lucide-react';

const services2 = () => {
  const coreCuttingServices = [
    {
      title: 'RCC Core Cutting Service',
      description: 'Precision circular holes in reinforced concrete for pipes, ducts, and utilities.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Diamond core bits', 'Clean precise cuts', 'Minimal vibration', 'All diameter sizes']
    },
    {
      title: 'RCC Slab Core Cutting Service',
      description: 'Specialized slab cutting for floor modifications and utility installations.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Floor penetrations', 'Drainage systems', 'Electrical conduits', 'HVAC installations']
    },
    {
      title: 'RCC Wall Core Cutting Service',
      description: 'Wall penetrations for doors, windows, and utility passages.',
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Door openings', 'Window installations', 'Pipe passages', 'Duct work']
    },
    {
      title: 'RCC Beam Core Cutting Service',
      description: 'Precision cutting of structural beams for modifications.',
      image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Structural modifications', 'Service penetrations', 'Reinforcement access', 'Load calculations']
    },
    {
      title: 'Brick Wall Core Cutting Service',
      description: 'Clean cutting through brick and masonry walls.',
      image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Masonry cutting', 'Minimal dust', 'Precise openings', 'Structural integrity']
    },
    {
      title: 'Concrete Core Cutting Service',
      description: 'General concrete cutting for various construction needs.',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Plain concrete', 'Reinforced concrete', 'Prestressed concrete', 'All thicknesses']
    },
    {
      title: 'Chimney Core Cutting Service',
      description: 'Specialized chimney cutting and modification services.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Chimney modifications', 'Flue installations', 'Ventilation systems', 'Safe procedures']
    },
    {
      title: 'AC Core Cutting Service',
      description: 'Precision holes for AC installations and HVAC systems.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['AC installations', 'HVAC systems', 'Refrigeration units', 'Ventilation holes']
    }
  ];

  const rebaringServices = [
    {
      title: 'Rebaring Work',
      description: 'Professional steel reinforcement installation and modification.',
      image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Steel bar installation', 'Reinforcement modification', 'Structural strengthening', 'Code compliance']
    },
    {
      title: 'Fastener Fixing (Chemical)',
      description: 'Chemical anchor systems for permanent fastening solutions.',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Chemical anchors', 'High load capacity', 'Permanent fixing', 'Corrosion resistant']
    },
    {
      title: 'Fastener Fixing (Mechanical)',
      description: 'Mechanical fastening systems for various applications.',
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Mechanical anchors', 'Quick installation', 'Removable options', 'Various sizes']
    },
    {
      title: 'RCC Slab (Floor Saw) Cutting Service',
      description: 'Large area slab cutting with floor saw technology.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Large openings', 'Straight cuts', 'Minimal dust', 'High precision']
    },
    {
      title: 'RCC Wall (Wall Saw) Cutting Service',
      description: 'Vertical and horizontal wall cutting with advanced wall saws.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Vertical cuts', 'Horizontal cuts', 'Remote operation', 'Safe cutting']
    },
    {
      title: 'Beam (Wire Saw) Cutting Service',
      description: 'Heavy-duty beam cutting using diamond wire saw technology.',
      image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Heavy sections', 'Complex shapes', 'Underwater cutting', 'Minimal noise']
    }
  ];

  return (
    <Layout>
      <div className="pt-8">
        {/* Hero Section */}
        <section className="py-20 hero-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 fade-in">
              Professional{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Core Cutting & Rebaring
              </span>{' '}
              Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in">
              Comprehensive solutions for all your concrete cutting and reinforcement needs with state-of-the-art equipment and expert craftsmanship.
            </p>
          </div>
        </section>

        {/* Core Cutting Services */}
        <section className="py-20 bg-card/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl mb-6">
                <Circle className="h-8 w-8 text-primary" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Core Cutting Service
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Precision circular cutting with diamond core drilling technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreCuttingServices.map((service, index) => (
                <div 
                  key={service.title}
                  className="service-card slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-3 text-primary">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rebaring Services */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-2xl mb-6">
                <Hammer className="h-8 w-8 text-secondary" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Rebaring Service
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Professional reinforcement and advanced cutting solutions for structural integrity
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rebaringServices.map((service, index) => (
                <div 
                  key={service.title}
                  className="service-card slide-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="aspect-video bg-gradient-to-br from-secondary/5 to-primary/5 rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-3 text-secondary">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Need Professional Core Cutting Services?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact us today for a free consultation and detailed quote for your project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Get Free Quote
              </a>
              <a href="tel:+917289938603" className="btn-secondary">
                Call Now: +91 72899 38603
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default services2;
