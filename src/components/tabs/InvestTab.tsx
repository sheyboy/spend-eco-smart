
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { TrendingUp, Shield, Leaf, Eye, ArrowRight } from 'lucide-react';

const InvestTab = () => {
  const [riskLevel, setRiskLevel] = useState([3]);
  const [showQuiz, setShowQuiz] = useState(false);

  const riskLabels = ['Very Low', 'Low', 'Moderate', 'High', 'Very High'];
  const currentRiskLabel = riskLabels[riskLevel[0] - 1];

  const recommendedFunds = [
    {
      id: 1,
      name: 'Green Energy Growth Fund',
      type: 'ESG Equity',
      risk: 'Moderate',
      return: '8.2%',
      fee: '0.65%',
      description: 'Invests in renewable energy and clean technology companies',
      match: 85,
      isESG: true
    },
    {
      id: 2,
      name: 'Sustainable Bond Portfolio',
      type: 'Green Bonds',
      risk: 'Low',
      return: '4.8%',
      fee: '0.45%',
      description: 'Fixed income securities funding environmental projects',
      match: 92,
      isESG: true
    },
    {
      id: 3,
      name: 'Tech Innovation Index',
      type: 'Growth Equity',
      risk: 'High',
      return: '12.1%',
      fee: '0.85%',
      description: 'Diversified exposure to technology innovation leaders',
      match: 78,
      isESG: false
    }
  ];

  const portfolioValue = 2850;
  const todayChange = 45.20;
  const todayChangePercent = 1.6;

  if (showQuiz) {
    return (
      <div className="p-4 space-y-6">
        <div className="pt-4">
          <h1 className="text-2xl font-bold text-gray-800">Investment Profile</h1>
          <p className="text-gray-600">Help us understand your investment goals</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Risk Assessment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                What's your investment timeline?
              </label>
              <div className="space-y-2">
                {['Less than 1 year', '1-3 years', '3-5 years', '5+ years'].map((option) => (
                  <button
                    key={option}
                    className="w-full p-3 text-left border rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                How would you react to a 20% portfolio decline?
              </label>
              <div className="space-y-2">
                {[
                  'Sell everything immediately',
                  'Sell some investments',
                  'Hold and wait',
                  'Buy more at lower prices'
                ].map((option) => (
                  <button
                    key={option}
                    className="w-full p-3 text-left border rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <Button 
              onClick={() => setShowQuiz(false)}
              className="w-full bg-orange-500 hover:bg-orange-600"
            >
              Get My Recommendations
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="pt-4">
        <h1 className="text-2xl font-bold text-gray-800">Smart Investing</h1>
        <p className="text-gray-600">Personalized investment recommendations</p>
      </div>

      {/* Portfolio Overview */}
      <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold opacity-90">Portfolio Value</h3>
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold">${portfolioValue.toLocaleString()}</span>
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <span className={`text-sm ${todayChange >= 0 ? 'text-green-200' : 'text-red-200'}`}>
                  {todayChange >= 0 ? '+' : ''}${todayChange.toFixed(2)} ({todayChangePercent >= 0 ? '+' : ''}{todayChangePercent}%)
                </span>
                <span className="text-sm opacity-75">today</span>
              </div>
            </div>
            <div className="w-16 h-16 rounded-full border-4 border-white/30 flex items-center justify-center">
              <TrendingUp className="w-8 h-8" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Risk Profile */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Risk Profile
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowQuiz(true)}
            >
              Take Quiz
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium text-gray-700">Risk Tolerance</span>
              <Badge variant="secondary">{currentRiskLabel}</Badge>
            </div>
            <Slider
              value={riskLevel}
              onValueChange={setRiskLevel}
              max={5}
              min={1}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>Conservative</span>
              <span>Aggressive</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recommended Funds */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Recommended for You</h3>
        <div className="space-y-4">
          {recommendedFunds.map((fund) => (
            <Card key={fund.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-semibold text-gray-800">{fund.name}</h4>
                      {fund.isESG && (
                        <Badge className="bg-green-100 text-green-700">
                          <Leaf className="w-3 h-3 mr-1" />
                          ESG
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{fund.description}</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="flex items-center">
                        <Shield className="w-4 h-4 mr-1 text-blue-500" />
                        {fund.risk} Risk
                      </span>
                      <span className="text-green-600 font-medium">{fund.return} annual return</span>
                      <span className="text-gray-500">{fund.fee} fee</span>
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-lg font-bold text-orange-600">{fund.match}%</div>
                    <div className="text-xs text-gray-500">match</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{fund.type}</Badge>
                  <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestTab;
