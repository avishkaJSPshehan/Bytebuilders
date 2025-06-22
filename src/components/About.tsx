import React from 'react';
import { Users, Target, Award, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission Driven',
      description: 'We are committed to delivering exceptional software solutions that exceed expectations and drive business success.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our skilled developers and designers bring years of experience in cutting-edge technologies and best practices.'
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'We maintain the highest standards of code quality, security, and performance in every project we deliver.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'We stay ahead of technology trends to provide innovative solutions that give our clients a competitive edge.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-purple-600 to-magenta-600 bg-clip-text text-transparent">ButeBuilders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded with a vision to revolutionize software development, ButeBuilders has grown into a trusted partner 
            for businesses seeking scalable and innovative SAAS solutions.
          </p>
        </div>

        {/* Team Image Section */}
        <div className="mt-16 mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="ButeBuilders team collaboration"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Our Expert Team</h3>
                <p className="text-purple-100">Passionate developers and designers working together to create exceptional software solutions</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-purple-50 to-magenta-50 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="bg-gradient-to-br from-purple-600 to-magenta-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-gradient-to-r from-purple-600 to-magenta-600 rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Why Choose ButeBuilders?
              </h3>
              <p className="text-purple-100 text-lg leading-relaxed mb-6">
                We combine technical expertise with creative innovation to build software that not only meets 
                your current needs but scales with your future growth. Our client-centric approach ensures 
                every solution is tailored to your unique business requirements.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                  Agile Development
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                  24/7 Support
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                  Scalable Solutions
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-white mb-2">5+</div>
                <div className="text-purple-100">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-white mb-2">100+</div>
                <div className="text-purple-100">Happy Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-purple-100">Features Built</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-white mb-2">15+</div>
                <div className="text-purple-100">Team Members</div>
              </div>
            </div>
          </div>
        </div>

        {/* Office Image Section */}
        <div className="mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Workspace</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Located in the heart of San Francisco's tech district, our modern office space fosters 
                creativity and collaboration. We've designed an environment that encourages innovation 
                and helps our team deliver exceptional results for every project.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">Modern collaborative workspaces</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">State-of-the-art development tools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">Dedicated client meeting rooms</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2" 
                alt="Modern office workspace"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;