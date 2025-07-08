import Layout from "@/components/Layout";
import { Shield, Users, Award, Target, Clock, Wrench } from "lucide-react";
import FloatingCTAs from "@/components/FloatingCTAs";

const About = () => {
  const stats = [
    { number: "500+", label: "Projects Completed", icon: Target },
    { number: "15+", label: "Years Experience", icon: Clock },
    { number: "50+", label: "Expert Team", icon: Users },
    { number: "100%", label: "Safety Record", icon: Shield },
  ];

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Uncompromising commitment to safety with zero-accident record and rigorous safety protocols.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description:
        "Delivering superior results with precision engineering and attention to detail in every project.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Skilled professionals with extensive experience in core cutting and structural modifications.",
    },
    {
      icon: Wrench,
      title: "Advanced Technology",
      description:
        "State-of-the-art equipment and cutting-edge techniques for optimal project outcomes.",
    },
  ];

  return (
    <Layout>
      <div className="pt-8">
        {/* Hero Section */}
        <section className="py-20 hero-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 fade-in">
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-black">
                About{" "}
                <span className="bg-gradient-to-r from-[#8A0707] to-[#FF2E2E] bg-clip-text text-transparent">
                  AnantRaj Constructions
                </span>
              </h1>
              <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                Leading the industry in precision core cutting and rebaring
                services with cutting-edge technology and unmatched expertise.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-4">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-card/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="fade-in">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                  Our Story & Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Established in 2009, AnantRaj Constructions has been at the
                  forefront of innovative core cutting and rebaring solutions.
                  What started as a small specialized service provider has grown
                  into the region's most trusted name in precision concrete
                  cutting.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our mission is to deliver exceptional core cutting and
                  structural modification services that exceed industry
                  standards. We combine state-of-the-art technology with skilled
                  craftsmanship to ensure every project is completed safely,
                  efficiently, and to the highest quality standards.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                    <span>ISO 9001:2015 Certified Quality Management</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                    <span>OSHA Compliant Safety Standards</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                    <span>Licensed & Insured Professional Services</span>
                  </div>
                </div>
              </div>

              <div className="relative slide-up">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8">
                  <div className="h-full bg-card rounded-2xl border border-primary/20 p-6 flex flex-col justify-center items-center text-center">
                    <img src="/images/4.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 fade-in">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide our work and define our commitment to
                excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="text-center group slide-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-card/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 fade-in">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Our Expert Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Skilled professionals dedicated to delivering exceptional
                results on every project
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="service-card text-center slide-up">
                <div className="w-24 h-24 mx-auto bg-gradient-to-r from-primary/20 to-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">
                  Project Managers
                </h3>
                <p className="text-muted-foreground">
                  Experienced project managers ensuring seamless execution and
                  timely delivery of all cutting operations.
                </p>
              </div>

              <div
                className="service-card text-center slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="w-24 h-24 mx-auto bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <Wrench className="h-12 w-12 text-secondary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">
                  Technical Specialists
                </h3>
                <p className="text-muted-foreground">
                  Certified technicians with expertise in diamond cutting
                  technology and precision engineering.
                </p>
              </div>

              <div
                className="service-card text-center slide-up"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="w-24 h-24 mx-auto bg-gradient-to-r from-primary/15 to-secondary/15 rounded-full flex items-center justify-center mb-6">
                  <Shield className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">
                  Safety Officers
                </h3>
                <p className="text-muted-foreground">
                  Dedicated safety professionals ensuring compliance with all
                  safety standards and protocols.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Ready to Work With the Best?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join hundreds of satisfied clients who trust AnantRaj
              Constructions for their core cutting and rebaring needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-primary bg-gradient-to-r from-[#8A0707] via-[#C80F0F] to-[#FF2E2E] text-white"
              >
                Get Started Today
              </a>
              <a
                href="/gallery"
                className="btn-secondary bg-gradient-to-r from-[#8A0707] via-[#C80F0F] to-[#FF2E2E] text-white border-0"
              >
                View Our Work
              </a>
            </div>
          </div>
        </section>
      </div>
      <FloatingCTAs phoneNumber="+917289938603" />
    </Layout>
  );
};

export default About;
