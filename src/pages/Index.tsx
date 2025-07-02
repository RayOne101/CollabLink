import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FAQ from '@/components/Features';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import HowItWorks from '@/components/HowItWorks';
import ForCreators from '@/components/ForCreators';
import ForAgencies from '@/components/ForAgencies';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <HowItWorks />
        <ForCreators />
        <ForAgencies />
        <FAQ />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
