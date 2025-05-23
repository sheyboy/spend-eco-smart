
import React, { useState } from 'react';
import BottomNavigation from './BottomNavigation';
import HomeTab from './tabs/HomeTab';
import InsightsTab from './tabs/InsightsTab';
import RewardsTab from './tabs/RewardsTab';
import InvestTab from './tabs/InvestTab';
import LearnTab from './tabs/LearnTab';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'home':
        return <HomeTab />;
      case 'insights':
        return <InsightsTab />;
      case 'rewards':
        return <RewardsTab />;
      case 'invest':
        return <InvestTab />;
      case 'learn':
        return <LearnTab />;
      default:
        return <HomeTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <main className="flex-1">
        {renderActiveTab()}
      </main>
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Dashboard;
