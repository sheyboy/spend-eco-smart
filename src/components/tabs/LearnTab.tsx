
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { BookOpen, Clock, Star, Trophy, Search, Play } from 'lucide-react';

const LearnTab = () => {
  const userProgress = {
    completedLessons: 8,
    totalLessons: 24,
    streak: 5,
    badges: 3
  };

  const progressPercentage = (userProgress.completedLessons / userProgress.totalLessons) * 100;

  const categories = [
    { name: 'Budgeting Basics', lessons: 6, color: 'bg-blue-100 text-blue-700' },
    { name: 'Investment 101', lessons: 8, color: 'bg-green-100 text-green-700' },
    { name: 'Debt Management', lessons: 5, color: 'bg-red-100 text-red-700' },
    { name: 'Retirement Planning', lessons: 5, color: 'bg-purple-100 text-purple-700' },
  ];

  const lessons = [
    {
      id: 1,
      title: 'Understanding Compound Interest',
      category: 'Investment 101',
      duration: 5,
      difficulty: 'Beginner',
      completed: false,
      popular: true,
      description: 'Learn how your money can grow exponentially over time'
    },
    {
      id: 2,
      title: 'Creating Your First Budget',
      category: 'Budgeting Basics',
      duration: 7,
      difficulty: 'Beginner',
      completed: true,
      popular: false,
      description: 'Master the fundamentals of tracking income and expenses'
    },
    {
      id: 3,
      title: 'Emergency Fund Essentials',
      category: 'Budgeting Basics',
      duration: 6,
      difficulty: 'Beginner',
      completed: false,
      popular: true,
      description: 'Build a safety net for unexpected expenses'
    },
    {
      id: 4,
      title: 'Debt Snowball vs Avalanche',
      category: 'Debt Management',
      duration: 8,
      difficulty: 'Intermediate',
      completed: false,
      popular: false,
      description: 'Compare strategies for paying off multiple debts'
    },
    {
      id: 5,
      title: 'ESG Investing Explained',
      category: 'Investment 101',
      duration: 10,
      difficulty: 'Intermediate',
      completed: false,
      popular: true,
      description: 'Align your investments with your environmental values'
    },
  ];

  const badges = [
    { name: 'First Steps', icon: '🎯', description: 'Completed your first lesson' },
    { name: 'Budget Master', icon: '💰', description: 'Finished all budgeting lessons' },
    { name: 'Streak Champion', icon: '🔥', description: '7-day learning streak' },
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="pt-4">
        <h1 className="text-2xl font-bold text-gray-800">Learn & Grow</h1>
        <p className="text-gray-600">Master money skills at your own pace</p>
      </div>

      {/* Progress Overview */}
      <Card className="bg-gradient-to-r from-purple-500 to-pink-600 text-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold opacity-90">Learning Progress</h3>
              <div className="flex items-center space-x-4 mt-2">
                <div className="text-center">
                  <div className="text-2xl font-bold">{userProgress.completedLessons}</div>
                  <div className="text-xs opacity-75">Lessons</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{userProgress.streak}</div>
                  <div className="text-xs opacity-75">Day Streak</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{userProgress.badges}</div>
                  <div className="text-xs opacity-75">Badges</div>
                </div>
              </div>
            </div>
            <div className="w-16 h-16 rounded-full border-4 border-white/30 flex items-center justify-center">
              <Trophy className="w-8 h-8" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm opacity-75">
              <span>Overall Progress</span>
              <span>{userProgress.completedLessons} / {userProgress.totalLessons}</span>
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

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          placeholder="Search lessons..."
          className="pl-10"
        />
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Categories</h3>
        <div className="grid grid-cols-2 gap-3">
          {categories.map((category, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4 text-center">
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${category.color}`}>
                  {category.name}
                </div>
                <p className="text-sm text-gray-600">{category.lessons} lessons</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Featured Lessons */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Continue Learning</h3>
        <div className="space-y-4">
          {lessons.map((lesson) => (
            <Card key={lesson.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-semibold text-gray-800">{lesson.title}</h4>
                      {lesson.popular && (
                        <Badge className="bg-orange-100 text-orange-700">
                          <Star className="w-3 h-3 mr-1" />
                          Popular
                        </Badge>
                      )}
                      {lesson.completed && (
                        <Badge className="bg-green-100 text-green-700">
                          ✓ Complete
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{lesson.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {lesson.duration} min
                      </span>
                      <span>{lesson.difficulty}</span>
                      <span className="text-blue-600">{lesson.category}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {lesson.completed ? (
                      <Button variant="outline" size="sm">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Review
                      </Button>
                    ) : (
                      <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                        <Play className="w-4 h-4 mr-2" />
                        Start Lesson
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Badges */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Your Badges</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="grid grid-cols-3 gap-4">
            {badges.map((badge, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-2">{badge.icon}</div>
                <div className="text-sm font-medium text-gray-800">{badge.name}</div>
                <div className="text-xs text-gray-600">{badge.description}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LearnTab;
