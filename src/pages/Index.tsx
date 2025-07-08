import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ServicePreview from "@/components/ServicePreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import ProjectsPreview from "@/components/ProjectsPreview";
import CTA from "@/components/CTA";
import FloatingCTAs from "@/components/FloatingCTAs";

const Index = () => {
  return (
    <>
      <Layout>
        <Hero />
        <ServicePreview />
        <WhyChooseUs />
        <Testimonials />
        <ProjectsPreview />
        <CTA />
      </Layout>
      <FloatingCTAs phoneNumber="+917289938603" />
    </>
  );
};

export default Index;
