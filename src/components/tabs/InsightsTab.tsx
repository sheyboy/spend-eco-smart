
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BarChart3, Leaf, TrendingUp, TrendingDown } from 'lucide-react';

const InsightsTab = () => {
  const [timeRange, setTimeRange] = useState('week');
  const [showCarbon, setShowCarbon] = useState(false);

  const spendingData = [
    { category: 'Food & Drink', amount: 98000, carbon: 8.2, change: 12 },
    { category: 'Transportation', amount: 72000, carbon: 45.6, change: -8 },
    { category: 'Shopping', amount: 128000, carbon: 12.4, change: 25 },
    { category: 'Entertainment', amount: 38000, carbon: 3.1, change: -15 },
    { category: 'Groceries', amount: 62400, carbon: 6.8, change: 5 },
  ];

  const totalSpent = spendingData.reduce((sum, item) => sum + item.amount, 0);
  const totalCarbon = spendingData.reduce((sum, item) => sum + item.carbon, 0);

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="pt-4">
        <h1 className="text-2xl font-bold text-gray-800">Spending Insights</h1>
        <p className="text-gray-600">Understand your financial habits</p>
      </div>

      {/* Time Range Selector */}
      <div className="flex space-x-2">
        {['day', 'week', 'month'].map((range) => (
          <Button
            key={range}
            variant={timeRange === range ? 'default' : 'outline'}
            size="sm"
            onClick={() => setTimeRange(range)}
            className={timeRange === range ? 'bg-orange-500 hover:bg-orange-600' : ''}
          >
            {range.charAt(0).toUpperCase() + range.slice(1)}
          </Button>
        ))}
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-gray-800">₦{totalSpent.toLocaleString()}</div>
            <p className="text-sm text-gray-600">Total spent this {timeRange}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">{totalCarbon.toFixed(1)} kg</div>
            <p className="text-sm text-gray-600">CO₂ footprint</p>
          </CardContent>
        </Card>
      </div>

      {/* Toggle Carbon Impact */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">Category Breakdown</h3>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowCarbon(!showCarbon)}
          className={showCarbon ? 'bg-green-50 text-green-700 border-green-200' : ''}
        >
          <Leaf className="w-4 h-4 mr-2" />
          {showCarbon ? 'Hide' : 'Show'} Carbon
        </Button>
      </div>

      {/* Category List */}
      <div className="space-y-3">
        {spendingData.map((item, index) => {
          const percentage = (item.amount / totalSpent) * 100;
          
          return (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-orange-500" />
                    <span className="font-medium text-gray-800">{item.category}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-gray-800">₦{item.amount.toLocaleString()}</span>
                    <Badge
                      variant={item.change > 0 ? 'destructive' : 'secondary'}
                      className={item.change > 0 ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}
                    >
                      {item.change > 0 ? (
                        <TrendingUp className="w-3 h-3 mr-1" />
                      ) : (
                        <TrendingDown className="w-3 h-3 mr-1" />
                      )}
                      {Math.abs(item.change)}%
                    </Badge>
                  </div>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div
                    className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{percentage.toFixed(1)}% of total</span>
                  {showCarbon && (
                    <span className="text-green-600">
                      <Leaf className="w-3 h-3 inline mr-1" />
                      {item.carbon} kg CO₂
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Empty State Helper */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-4 text-center">
          <BarChart3 className="w-8 h-8 text-blue-500 mx-auto mb-2" />
          <p className="text-sm text-blue-700">
            Link more accounts to get deeper insights into your spending patterns
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default InsightsTab;
