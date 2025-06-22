import React from 'react';
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 pb-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-magenta-50">
        <div className="absolute inset-0 opacity-30">
          <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgb(147 51 234)" strokeWidth="1" opacity="0.1"/>
              </pattern>
              <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1.5" fill="rgb(147 51 234)" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-purple-400 to-magenta-400 rounded-full opacity-20 animate-bounce-slow"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-magenta-400 to-purple-400 rounded-full opacity-20 animate-bounce-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-br from-purple-500 to-magenta-500 rounded-full opacity-20 animate-bounce-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-gradient-to-br from-magenta-500 to-purple-500 rounded-full opacity-20 animate-bounce-slow" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-800 text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            Leading SAAS Development Company
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-7xl mb-6">
            Build Your Dream
            <span className="block bg-gradient-to-r from-purple-600 to-magenta-600 bg-clip-text text-transparent">
              Software Solutions
            </span>
          </h1>
          
          <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            ButeBuilders transforms your ideas into powerful SAAS applications. We specialize in scalable, 
            secure, and innovative software solutions that drive business growth.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('services')}
              className="bg-gradient-to-r from-purple-600 to-magenta-600 text-white px-8 py-4 rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 font-semibold"
            >
              <span>Explore Services</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            
            <button
              onClick={() => scrollToSection('saas')}
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl hover:bg-purple-600 hover:text-white transition-all duration-300 font-semibold"
            >
              View SAAS Solutions
            </button>
          </div>

          {/* Feature Cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-purple-100">
              <div className="bg-gradient-to-br from-purple-600 to-magenta-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600 text-sm">Optimized performance for the best user experience</p>
            </div>

            <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-purple-100">
              <div className="bg-gradient-to-br from-purple-600 to-magenta-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
              <p className="text-gray-600 text-sm">Enterprise-grade security and reliability</p>
            </div>

            <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-purple-100">
              <div className="bg-gradient-to-br from-purple-600 to-magenta-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovative Design</h3>
              <p className="text-gray-600 text-sm">Modern UI/UX that delights users</p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-magenta-600 mb-2">99%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;