
import { Shield, Clock, Wrench, Construction } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Rigorous safety protocols and 100% safety record with certified equipment and trained professionals.',
      stats: '0 Accidents'
    },
    {
      icon: Clock,
      title: 'Quick Turnaround',
      description: 'Efficient project completion with minimal disruption to your construction timeline.',
      stats: '24/7 Service'
    },
    {
      icon: Wrench,
      title: 'Advanced Equipment',
      description: 'State-of-the-art diamond cutting tools and wire saws for precision and clean cuts.',
      stats: 'Latest Tech'
    },
    {
      icon: Construction,
      title: 'Expert Team',
      description: 'Skilled technicians with 15+ years of experience in core cutting and rebaring services.',
      stats: '15+ Years'
    }
  ];

  return (
    <section className="py-20 bg-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AnantRaj Constructions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Industry-leading expertise combined with cutting-edge technology for superior results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="text-center group slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 pulse-glow">
                  <feature.icon className="h-10 w-10 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                  {feature.stats}
                </div>
              </div>
              
              <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
