
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Gift, Leaf, Star, Coffee, ShoppingBag, Car } from 'lucide-react';

const RewardsTab = () => {
  const [activeSegment, setActiveSegment] = useState('points');
  
  const pointsBalance = 1250;
  const nextRewardThreshold = 1500;
  const pointsToNext = nextRewardThreshold - pointsBalance;

  const partners = [
    { 
      id: 1, 
      name: 'Green Coffee Co.', 
      icon: Coffee, 
      multiplier: '2x points',
      category: 'Food & Drink',
      color: 'bg-amber-100 text-amber-700'
    },
    { 
      id: 2, 
      name: 'EcoRide Share', 
      icon: Car, 
      multiplier: '3x points',
      category: 'Transportation',
      color: 'bg-green-100 text-green-700'
    },
    { 
      id: 3, 
      name: 'Sustainable Style', 
      icon: ShoppingBag, 
      multiplier: '1.5x points',
      category: 'Shopping',
      color: 'bg-purple-100 text-purple-700'
    },
  ];

  const rewards = [
    { id: 1, name: '$5 Coffee Credit', cost: 500, available: true },
    { id: 2, name: '$10 Organic Market', cost: 1000, available: true },
    { id: 3, name: '$25 Eco Products', cost: 2500, available: false },
    { id: 4, name: 'Tree Planting Donation', cost: 750, available: true },
  ];

  const recentEarnings = [
    { merchant: 'Green Coffee Co.', points: 45, multiplier: '2x', time: '2 hours ago' },
    { merchant: 'Organic Market', points: 120, multiplier: '1x', time: '1 day ago' },
    { merchant: 'EcoRide Share', points: 90, multiplier: '3x', time: '2 days ago' },
  ];

  const segments = [
    { id: 'points', label: 'Points' },
    { id: 'partners', label: 'Partners' },
    { id: 'redeem', label: 'Redeem' },
  ];

  const progressPercentage = (pointsBalance / nextRewardThreshold) * 100;

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="pt-4">
        <h1 className="text-2xl font-bold text-gray-800">Eco Rewards</h1>
        <p className="text-gray-600">Earn points for sustainable choices</p>
      </div>

      {/* Points Balance */}
      <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold opacity-90">Your Balance</h3>
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold">{pointsBalance}</span>
                <span className="text-sm opacity-75">points</span>
              </div>
            </div>
            <div className="w-16 h-16 rounded-full border-4 border-white/30 flex items-center justify-center">
              <Gift className="w-8 h-8" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm opacity-75">
              <span>Progress to next reward</span>
              <span>{pointsToNext} points to go</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div
                className="bg-white h-2 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Segment Control */}
      <div className="flex bg-gray-100 rounded-lg p-1">
        {segments.map((segment) => (
          <button
            key={segment.id}
            onClick={() => setActiveSegment(segment.id)}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeSegment === segment.id
                ? 'bg-white text-gray-800 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            {segment.label}
          </button>
        ))}
      </div>

      {/* Content based on active segment */}
      {activeSegment === 'points' && (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recent Earnings</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 space-y-3">
              {recentEarnings.map((earning, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-full bg-green-100">
                      <Leaf className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <span className="font-medium text-gray-800">{earning.merchant}</span>
                      <p className="text-sm text-gray-600">{earning.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-green-600">+{earning.points} pts</div>
                    <Badge variant="secondary" className="text-xs">
                      {earning.multiplier}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      )}

      {activeSegment === 'partners' && (
        <div className="space-y-4">
          {partners.map((partner) => {
            const Icon = partner.icon;
            return (
              <Card key={partner.id}>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-full ${partner.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{partner.name}</h3>
                      <p className="text-sm text-gray-600">{partner.category}</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-orange-100 text-orange-700">
                        <Star className="w-3 h-3 mr-1" />
                        {partner.multiplier}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      {activeSegment === 'redeem' && (
        <div className="space-y-4">
          {rewards.map((reward) => (
            <Card key={reward.id} className={!reward.available ? 'opacity-60' : ''}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{reward.name}</h3>
                    <p className="text-sm text-gray-600">{reward.cost} points required</p>
                  </div>
                  <Button
                    disabled={!reward.available || pointsBalance < reward.cost}
                    className="bg-orange-500 hover:bg-orange-600"
                    size="sm"
                  >
                    {reward.available && pointsBalance >= reward.cost ? 'Redeem' : 'Not Available'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default RewardsTab;
