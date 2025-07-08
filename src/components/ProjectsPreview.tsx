
import { Link } from 'react-router-dom';
import { ArrowRight, Construction, Circle } from 'lucide-react';

const ProjectsPreview = () => {
  const projects = [
    {
      title: 'Commercial Complex Core Cutting',
      client: 'Metro Builders Ltd.',
      location: 'Mumbai, Maharashtra',
      service: 'RCC Slab & Wall Cutting',
      status: 'Completed',
      image: '/images/home-recent-project-1.jpg',
      description: 'Precision core cutting for ventilation and electrical systems in 15-story commercial building.'
    },
    {
      title: 'Industrial Facility Modification',
      client: 'TechPark Industries',
      location: 'Pune, Maharashtra',
      service: 'Beam Cutting & Rebaring',
      status: 'Completed',
      image: '/images/home-recent-project-2.jpg',
      description: 'Structural modifications for machinery installation with wire saw cutting technology.'
    },
    {
      title: 'Residential Tower Opening',
      client: 'Urban Homes Pvt Ltd',
      location: 'Delhi NCR',
      service: 'RCC Core Cutting',
      status: 'Completed',
      image: '/images/home-recent-project-3.jpg',
      description: 'Creating precise openings for elevator shaft and stairwell modifications.'
    }
  ];

  return (
    <section className="py-20 bg-card/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Recent{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing our expertise in precision core cutting and structural modifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="service-card group overflow-hidden slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  {project.status}
                </div>
              </div>
              
              <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Client:</span>
                  <span className="font-medium">{project.client}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Location:</span>
                  <span className="font-medium">{project.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Service:</span>
                  <span className="text-primary font-medium">{project.service}</span>
                </div>
              </div>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors group"
              >
                View Details
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="#" className="btn-primary bg-gradient-to-r from-[#8A0707] via-[#C80F0F] to-[#FF2E2E] text-white">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
