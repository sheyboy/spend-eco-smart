
import React, { useState } from 'react';
import OnboardingFlow from '../components/OnboardingFlow';
import Dashboard from '../components/Dashboard';

const Index = () => {
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);

  if (!hasCompletedOnboarding) {
    return <OnboardingFlow onComplete={() => setHasCompletedOnboarding(true)} />;
  }

  return <Dashboard />;
};

export default Index;
