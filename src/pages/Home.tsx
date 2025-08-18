import React from 'react';
import HeroSection from '../components/HeroSection';
import EfficiencySection from '../components/EfficiencySection';
import SolutionsSection from '../components/SolutionsSection';
import KeyComponentsSection from '../components/KeyComponentsSection';
import HowItWorksSection from '../components/HowItWorksSection';
import BenefitsSection from '../components/BenefitsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ProjectSection from '../components/ProjectSection';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <EfficiencySection />
      <SolutionsSection />
      <HowItWorksSection />
      <KeyComponentsSection />
      <BenefitsSection />
      <TestimonialsSection />
      <ProjectSection />
      <ContactForm />
    </>
  );
};

export default Home;