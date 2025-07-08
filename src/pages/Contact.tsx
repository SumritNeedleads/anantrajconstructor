import Layout from "@/components/Layout";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import FloatingCTAs from "@/components/FloatingCTAs";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 7289938603", "+91 9136238205"],
      subtitle: "Call us anytime",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["Anantkumaryadav612@gmail.com"],
      subtitle: "Send us a message",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["D-90 Sector-48 Noida U.P 201031"],
      subtitle: "Visit our office",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 8:00 AM - 6:00 PM", "Sun: Emergency Services Only"],
      subtitle: "We are available",
    },
  ];

  return (
    <Layout>
      <div className="pt-8">
        {/* Hero Section */}
        <section className="py-20 hero-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 fade-in text-black">
              Get In{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto fade-in">
              Ready to start your core cutting project? Contact us today for a
              free consultation and detailed quote.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className="text-center slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-6">
                    <info.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">
                    {info.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {info.subtitle}
                  </p>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-card/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 fade-in">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Send Us a Message
              </h2>
              <p className="text-xl text-muted-foreground">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>
            </div>

            <div className="service-card fade-in">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium mb-2"
                    >
                      Service Required
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a service</option>
                      <option value="rcc-core-cutting">RCC Core Cutting</option>
                      <option value="slab-cutting">Slab Cutting</option>
                      <option value="wall-cutting">Wall Cutting</option>
                      <option value="beam-cutting">Beam Cutting</option>
                      <option value="rebaring">Rebaring Work</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="project"
                    className="block text-sm font-medium mb-2"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="project"
                    name="project"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Additional Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Any additional information or questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary inline-flex items-center justify-center group bg-gradient-to-r from-[#8A0707] via-[#C80F0F] to-[#FF2E2E] text-white"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 fade-in">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Find Us
              </h2>
              <p className="text-xl text-muted-foreground">
                Visit our office or call us for immediate assistance.
              </p>
            </div>
            <div className="relative w-full h-screen">
              {/* Google Map as full-screen background */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.9050535862957!2d77.33865027416594!3d28.572613686801475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5b0d7a6fbbf%3A0xdcc6ad515bf6951a!2sD-90%2C%20D%20Block%2C%20Sector%2030%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1751455859964!5m2!1sen!2sin"
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
      <FloatingCTAs phoneNumber="+917289938603" />
    </Layout>
  );
};

export default Contact;
