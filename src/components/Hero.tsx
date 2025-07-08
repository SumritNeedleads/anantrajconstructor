
import { Link } from 'react-router-dom';
import { ArrowRight, Construction } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
          alt="Construction Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full mb-6 border border-primary/30">
              <Construction className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">Professional Core Cutting Services</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Expert RCC{' '}
              <span className="bg-gradient-to-r from-[#8A0707] via-[#C80F0F] to-[#FF2E2E]  from-[#8A0707] to-[#FF2E2E] bg-clip-text text-transparent">
                Core Cutting
              </span>{' '}
              & Rebaring Services
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Precision cutting solutions for RCC structures with state-of-the-art equipment. 
              From slab cutting to wall modifications, we deliver excellence with safety and efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary text-white bg-gradient-to-r from-[#8A0707] via-[#C80F0F] to-[#FF2E2E] inline-flex items-center justify-center group">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/services" className="btn-secondary text-white bg-gradient-to-r from-[#8A0707] via-[#C80F0F] to-[#FF2E2E] border-0 inline-flex items-center justify-center">
                View Services
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Safety Record</div>
              </div>
            </div>
          </div>

          {/* 3D Visual Element */}
          <div className="relative perspective">
            <div className="float">
              <div className="relative">
                {/* Main machine visualization */}
                <div className="w-80 h-80 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl rotate-3d blur-sm"></div>
                  <div className="absolute inset-2 bg-gradient-to-br from-card to-muted rounded-2xl border border-primary/30 pulse-glow backdrop-blur-sm">
                    <div className="p-8 h-full flex flex-col justify-center items-center">
                      <Construction className="h-20 w-20 text-primary mb-4" />
                      <div className="text-center">
                        <h3 className="font-heading text-lg font-semibold mb-2">Core Cutting Machine</h3>
                        <p className="text-sm text-muted-foreground">Diamond Wire Technology</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-primary/20 rounded-xl rotate-45 animate-pulse"></div>
                <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-secondary/20 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
