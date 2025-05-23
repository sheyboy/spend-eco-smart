
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Leaf, Plus, Eye, ArrowUp, ArrowDown } from 'lucide-react';

const HomeTab = () => {
  const spendingScore = 78;
  const carbonSaved = 12.5;
  const pointsBalance = 1250;

  const recentTransactions = [
    { id: 1, merchant: 'Green Coffee Co.', amount: -1800, category: 'Food & Drink', isGreen: true, time: '2 hours ago' },
    { id: 2, merchant: 'Organic Market', amount: -9520, category: 'Groceries', isGreen: true, time: '1 day ago' },
    { id: 3, merchant: 'Gas Station', amount: -18000, category: 'Transportation', isGreen: false, time: '2 days ago' },
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="pt-4">
        <h1 className="text-2xl font-bold text-gray-800">Good morning! 👋</h1>
        <p className="text-gray-600">Here's your financial snapshot</p>
      </div>

      {/* Spending Score */}
      <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold opacity-90">Spending Score</h3>
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold">{spendingScore}</span>
                <span className="text-sm opacity-75">/100</span>
              </div>
              <p className="text-sm opacity-75 mt-1">Great job staying on budget!</p>
            </div>
            <div className="w-16 h-16 rounded-full border-4 border-white/30 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-2xl">🌱</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex justify-center items-center gap-2">
              <span className="text-xl">🌍</span>
              <div className="text-2xl font-bold text-green-600">{carbonSaved} kg</div>
            </div>
            <p className="text-sm text-gray-600">CO₂ saved this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex justify-center items-center gap-2">
              <span className="text-xl">🏆</span>
              <div className="text-2xl font-bold text-orange-600">{pointsBalance}</div>
            </div>
            <p className="text-sm text-gray-600">Reward points</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="h-12">
              <Plus className="w-4 h-4 mr-2" />
              Add Account
            </Button>
            <Button variant="outline" className="h-12">
              <Eye className="w-4 h-4 mr-2" />
              See Tips
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <span className="mr-2">📊</span>
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0 space-y-3">
          {recentTransactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-full ${transaction.amount > 0 ? 'bg-green-100' : 'bg-gray-100'}`}>
                  {transaction.amount > 0 ? (
                    <ArrowUp className="w-4 h-4 text-green-600" />
                  ) : (
                    <ArrowDown className="w-4 h-4 text-gray-600" />
                  )}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-800">{transaction.merchant}</span>
                    {transaction.isGreen && (
                      <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                        <Leaf className="w-3 h-3 mr-1" />
                        Green
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{transaction.category} • {transaction.time}</p>
                </div>
              </div>
              <span className={`font-semibold ${transaction.amount > 0 ? 'text-green-600' : 'text-gray-800'}`}>
                {transaction.amount > 0 ? '+' : ''}₦{Math.abs(transaction.amount).toLocaleString()}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default HomeTab;
