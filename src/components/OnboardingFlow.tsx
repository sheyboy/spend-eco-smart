
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, Leaf, TrendingUp, GraduationCap } from 'lucide-react';

interface OnboardingFlowProps {
  onComplete: () => void;
}

const OnboardingFlow = ({ onComplete }: OnboardingFlowProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      icon: <Leaf className="w-16 h-16 text-green-500" />,
      title: "Spend Smart, Save Earth",
      description: "Track your spending while making eco-friendly choices that earn you rewards."
    },
    {
      icon: <TrendingUp className="w-16 h-16 text-blue-500" />,
      title: "Smart Investment Insights",
      description: "Get personalized investment recommendations based on your financial goals and risk profile."
    },
    {
      icon: <GraduationCap className="w-16 h-16 text-purple-500" />,
      title: "Learn & Grow",
      description: "Master money skills with bite-sized lessons and earn rewards for your financial education."
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-8 text-center">
          <div className="mb-6 flex justify-center">
            {slides[currentSlide].icon}
          </div>
          <h1 className="text-2xl font-bold mb-4 text-gray-800">
            {slides[currentSlide].title}
          </h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            {slides[currentSlide].description}
          </p>
          
          <div className="flex justify-center space-x-2 mb-8">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-orange-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <Button 
            onClick={nextSlide}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white"
            size="lg"
          >
            {currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
            <ChevronRight className="ml-2 w-4 h-4" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default OnboardingFlow;
