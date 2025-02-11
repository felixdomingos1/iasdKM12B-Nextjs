'use client';

import React from 'react';

import HeroSection from '@/presentation/components/layout/hero';
import ExperienceSection from '@/presentation/components/layout/experience';
import { Footer } from '@/presentation/components/layout/footer';
import MinistriesSection from '@/presentation/components/layout/projects';

const IASDView: React.FC = () => {

  return (
    <div className="container mx-auto p-6">
      <HeroSection />
      <MinistriesSection />
      <ExperienceSection /> 
      <Footer/>
    </div>
  );
};

export default IASDView;