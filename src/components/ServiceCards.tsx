
import { Link } from 'react-router-dom';
import { Circle, Hammer, ArrowRight } from 'lucide-react';

const ServiceCards = () => {
  const coreCuttingServices = [
    {
      name: 'RCC Core Cutting Service',
      image: '/images/1.jpg',
      description: 'Precision RCC core cutting for reinforced concrete structures'
    },
    {
      name: 'RCC Slab Core Cutting Service',
      image: '/images/2.jpg',
      description: 'Specialized slab cutting for floor modifications and installations'
    },
    {
      name: 'RCC Wall Core Cutting Service',
      image: '/images/3.jpg',
      description: 'Wall penetrations for doors, windows, and utility passages'
    },
    {
      name: 'RCC Beam Core Cutting Service',
      image: '/images/4.jpg',
      description: 'Precision cutting of structural beams for modifications'
    },
    {
      name: 'Brick Wall Core Cutting Service',
      image: '/images/5.jpg',
      description: 'Clean cutting through brick and masonry walls'
    },
    {
      name: 'Concrete Core Cutting Service',
      image: '/images/6.jpg',
      description: 'General concrete cutting for various construction needs'
    },
    {
      name: 'Chimney Core Cutting Service',
      image: '/images/7.jpg',
      description: 'Specialized chimney cutting and modification services'
    },
    {
      name: 'AC Core Cutting Service',
      image: '/images/8.jpg',
      description: 'Precision holes for AC installations and HVAC systems'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-card/20 to-background ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 ">
          {/* Core Cutting Service Card */}
          <div className="service-card group cursor-pointer">
            <div className="w-20 h-20 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Circle className="h-10 w-10 text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
              Core Cutting Service
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Professional core cutting solutions for all types of concrete structures with precision and safety.
            </p>
            <Link 
              to="/services" 
              className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors group"
            >
              Explore Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Rebaring Service Card */}
          <div className="service-card group cursor-pointer">
            <div className="w-20 h-20 bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Hammer className="h-10 w-10 text-secondary" />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-4 group-hover:text-secondary transition-colors">
              Rebaring Service
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Expert rebaring work and fastener fixing with chemical and mechanical anchor systems.
            </p>
            <Link 
              to="/services" 
              className="inline-flex items-center text-secondary font-semibold hover:text-primary transition-colors group"
            >
              Explore Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Core Cutting Services Grid */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Core Cutting{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Specializations
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive core cutting services for every construction need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreCuttingServices.map((service, index) => (
            <div 
              key={service.name}
              className="service-card group slide-up hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg mb-4 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {service.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center  mt-12">
          <Link to="/services" className="btn-primary bg-gradient-to-r from-[#8A0707] via-[#C80F0F] to-[#FF2E2E] text-white">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
