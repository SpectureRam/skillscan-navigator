"use client"

import React, { useState, useEffect } from 'react';
import { Menu, X, Brain, Zap, Users, BookOpen, Moon, Sun, Code, Sparkles, ArrowRight } from 'lucide-react';

const SkillScanNavigator = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navItems = [
    { name: 'Assessments', icon: Brain, href: '#assessments' },
    { name: 'Features', icon: Zap, href: '#features' },
    { name: 'Community', icon: Users, href: '#community' },
    { name: 'Resources', icon: BookOpen, href: '#resources' }
  ];

  return (
    <div className={`min-h-screen transition-all duration-300 ${isDarkMode ? 'dark' : ''}`}>
      <div className={`min-h-screen transition-all duration-500 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' 
          : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
      }`}>
        
        {/* Navbar */}
        <nav className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? isDarkMode 
              ? 'bg-gray-900/80 backdrop-blur-lg shadow-lg border-b border-gray-700/20' 
              : 'bg-white/80 backdrop-blur-lg shadow-lg border-b border-gray-200/20'
            : 'bg-transparent'
        }`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 lg:h-20">
              
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    SkillScan
                  </h1>
                  <p className={`text-xs -mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Navigator</p>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-200 group ${
                      isDarkMode 
                        ? 'text-gray-300 hover:bg-gray-800/50 hover:text-blue-400' 
                        : 'text-gray-700 hover:bg-white/50 hover:text-blue-600'
                    }`}
                  >
                    <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">{item.name}</span>
                  </a>
                ))}
              </div>

              {/* Right side - Dark mode toggle & Mobile menu */}
              <div className="flex items-center space-x-4">
                
                {/* Dark Mode Toggle */}
                <button
                  onClick={toggleDarkMode}
                  className="relative p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 group"
                >
                  <div className="relative w-6 h-6">
                    <Sun className={`absolute w-6 h-6 text-yellow-500 transition-all duration-300 ${
                      isDarkMode ? 'rotate-90 scale-0' : 'rotate-0 scale-100'
                    }`} />
                    <Moon className={`absolute w-6 h-6 text-blue-400 transition-all duration-300 ${
                      isDarkMode ? 'rotate-0 scale-100' : '-rotate-90 scale-0'
                    }`} />
                  </div>
                </button>

                {/* Mobile menu button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`lg:hidden p-2 rounded-xl transition-all duration-200 ${
                    isDarkMode 
                      ? 'bg-gray-800 hover:bg-gray-700' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <Menu className={`w-6 h-6 transition-all duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  } ${isMenuOpen ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`} />
                  <X className={`absolute w-6 h-6 transition-all duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  } ${isMenuOpen ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden border-t ${
            isDarkMode 
              ? 'bg-gray-900/90 backdrop-blur-lg border-gray-700/20' 
              : 'bg-white/90 backdrop-blur-lg border-gray-200/20'
          }`}>
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isDarkMode 
                      ? 'text-gray-300 hover:bg-gray-800' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Main Content - Development Page */}
        <div className="pt-20 lg:pt-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            
            {/* Hero Section */}
            <div className="text-center py-16 lg:py-24">
              
              {/* Animated Background Elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
              </div>

              <div className="relative z-10">
                {/* Status Badge */}
                <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full border mb-8 ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-700' 
                    : 'bg-gradient-to-r from-blue-100 to-purple-100 border-blue-200'
                }`}>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className={`text-sm font-medium ${
                    isDarkMode ? 'text-blue-300' : 'text-blue-700'
                  }`}>Development in Progress</span>
                  <Code className={`w-4 h-4 ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  }`} />
                </div>

                {/* Main Title */}
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    AI-Powered
                  </span>
                  <br />
                  <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>
                    Skill Assessment
                  </span>
                </h1>

                {/* Subtitle */}
                <p className={`text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Discover your technical skills, identify gaps, and get personalized learning recommendations 
                  with our intelligent assessment platform.
                </p>

                {/* Feature Cards */}
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                  {[
                    { icon: Brain, title: 'Smart AI Analysis', desc: 'Advanced AI evaluates your responses in real-time' },
                    { icon: Zap, title: '15-Minute Assessment', desc: 'Quick yet comprehensive skill evaluation' },
                    { icon: Sparkles, title: 'Personalized Results', desc: 'Tailored recommendations for your growth' }
                  ].map((feature, idx) => (
                    <div key={idx} className={`p-6 rounded-2xl border transition-all duration-300 group ${
                      isDarkMode 
                        ? 'bg-gray-800/50 border-gray-700/50 hover:bg-gray-800/70 backdrop-blur-sm' 
                        : 'bg-white/50 border-gray-200/50 hover:bg-white/70 backdrop-blur-sm'
                    }`}>
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className={`font-semibold mb-2 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>{feature.title}</h3>
                      <p className={`text-sm ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>{feature.desc}</p>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2">
                    <span>Get Early Access</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className={`font-semibold text-lg border backdrop-blur-sm transition-all duration-300 px-8 py-4 rounded-2xl ${
                    isDarkMode 
                      ? 'bg-gray-800/50 hover:bg-gray-800/70 text-white border-gray-700' 
                      : 'bg-white/50 hover:bg-white/70 text-gray-900 border-gray-200'
                  }`}>
                    View Demo
                  </button>
                </div>

                {/* Coming Soon Notice */}
                <div className={`mt-16 rounded-2xl p-6 max-w-2xl mx-auto border ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-amber-900/20 to-orange-900/20 border-amber-700' 
                    : 'bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200'
                }`}>
                  <div className="flex items-center justify-center space-x-3 mb-3">
                    <Sparkles className={`w-6 h-6 ${
                      isDarkMode ? 'text-amber-400' : 'text-amber-600'
                    }`} />
                    <h3 className={`text-lg font-semibold ${
                      isDarkMode ? 'text-amber-200' : 'text-amber-800'
                    }`}>Coming Soon</h3>
                  </div>
                  <p className={`text-center ${
                    isDarkMode ? 'text-amber-300' : 'text-amber-700'
                  }`}>
                    We&apos;re putting the finishing touches on our AI-powered assessment engine. 
                    Sign up to be notified when we launch!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillScanNavigator;