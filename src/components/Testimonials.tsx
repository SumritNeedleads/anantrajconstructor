
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Raj Patel',
      company: 'Metro Construction Ltd.',
      rating: 5,
      text: 'AnantRaj Constructions delivered exceptional core cutting services for our commercial project. Their precision and professionalism exceeded our expectations.',
      project: 'Commercial Complex - Mumbai'
    },
    {
      name: 'Priya Sharma',
      company: 'Urban Developers',
      rating: 5,
      text: 'The team handled our RCC slab cutting with incredible efficiency. Zero damage to surrounding structures and completed ahead of schedule.',
      project: 'Residential Tower - Delhi'
    },
    {
      name: 'Amit Kumar',
      company: 'Infrastructure Solutions',
      rating: 5,
      text: 'Outstanding rebaring work and chemical fastener fixing. Their attention to safety and quality is unmatched in the industry.',
      project: 'Industrial Facility - Pune'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Client{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading construction companies across the region
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="service-card slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-primary fill-current" />
                ))}
              </div>
              
              <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>
              
              <div className="border-t border-border/50 pt-4">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                <div className="text-xs text-muted-foreground mt-1">{testimonial.project}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
