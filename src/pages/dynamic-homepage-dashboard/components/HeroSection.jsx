import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import { useTheme } from '../../../contexts/ThemeContext';

const HeroSection = () => {
  const { isDark } = useTheme();
  const [currentTagline, setCurrentTagline] = useState(0);

  const taglines = [
    "Full-Stack Java Developer",
    "Performance-Driven Developer",
    "AI Engineer",
    "Open Source Contributor"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [taglines.length]);

  return (
    <div className={`py-20 ${isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900'} text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm <span className={isDark ? 'text-blue-400' : 'text-blue-300'}>HARSH KORI</span>
              </h1>
              <div className="h-16 flex items-center">
                <h2 className={`text-2xl lg:text-3xl font-medium kinetic-text ${isDark ? 'text-blue-300' : 'text-blue-200'}`} key={currentTagline}>
                  {taglines[currentTagline]}
                </h2>
              </div>
              <p className={`text-xl leading-relaxed max-w-2xl ${isDark ? 'text-gray-200' : 'text-blue-100'}`}>
                Crafting scalable solutions with modern technologies. Passionate about clean code, 
                performance optimization, and building products that make a difference.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="default" size="lg" iconName="Download" iconPosition="left" className={isDark ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-white text-blue-900 hover:bg-blue-50'}>
                Download Resume
              </Button>
              <Button variant="outline" size="lg" iconName="MessageCircle" iconPosition="left" className="border-white text-white hover:bg-white hover:text-gray-900">
                Let's Connect
              </Button>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className={isDark ? 'text-gray-300' : 'text-blue-200'}>Available for opportunities</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} color="#93c5fd" />
                <span className={isDark ? 'text-gray-300' : 'text-blue-200'}>Jabalpur , Madhya Pradesh</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className={`w-80 h-80 mx-auto rounded-full overflow-hidden border-4 shadow-2xl ${isDark ? 'border-blue-400' : 'border-blue-300'}`}>
              <Image 
                src="/assets/images/WhatsApp Image 2025-08-27 at 10.33.36 PM (3).jpeg"
                alt="Harsh Kori - Professional Developer" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating tech icons */}
            <div className="absolute inset-0 pointer-events-none">
              <div className={`absolute top-10 left-10 p-3 rounded-lg shadow-lg animate-bounce ${isDark ? 'bg-gray-800' : 'bg-white'}`} style={{animationDelay: '0s'}}>
                <Icon name="Code" size={20} color={isDark ? "#60a5fa" : "#3182ce"} />
              </div>
              <div className={`absolute top-20 right-10 p-3 rounded-lg shadow-lg animate-bounce ${isDark ? 'bg-gray-800' : 'bg-white'}`} style={{animationDelay: '1s'}}>
                <Icon name="Database" size={20} color={isDark ? "#4ade80" : "#38a169"} />
              </div>
              <div className={`absolute bottom-20 left-20 p-3 rounded-lg shadow-lg animate-bounce ${isDark ? 'bg-gray-800' : 'bg-white'}`} style={{animationDelay: '2s'}}>
                <Icon name="Cloud" size={20} color={isDark ? "#a78bfa" : "#805ad5"} />
              </div>
              <div className={`absolute bottom-10 right-20 p-3 rounded-lg shadow-lg animate-bounce ${isDark ? 'bg-gray-800' : 'bg-white'}`} style={{animationDelay: '0.5s'}}>
                <Icon name="Smartphone" size={20} color={isDark ? "#fb923c" : "#ed8936"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
