import React from "react";
import {
  Zap,
  Globe,
  Users,
  BarChart,
  Settings,
  Lock,
  ArrowRight,
} from "lucide-react";

const SAAS = () => {
  const saasFeatures = [
    {
      icon: Zap,
      title: "Image to PDF",
      description:
        "Get your SAAS product to market faster with our proven development frameworks and methodologies.",
    },
    {
      icon: Globe,
      title: "Image to Text",
      description:
        "Scalable architecture that supports multiple tenants with data isolation and customization options.",
    },
    {
      icon: Users,
      title: "PDF Editor",
      description:
        "Complete user authentication, authorization, and role-based access control systems.",
    },

    // {
    //   icon: BarChart,
    //   title: 'Analytics & Reporting',
    //   description: 'Built-in analytics dashboard with real-time metrics and customizable reporting features.'
    // },
    // {
    //   icon: Settings,
    //   title: 'API Integration',
    //   description: 'Seamless integration with third-party services and robust API development for your platform.'
    // },
    // {
    //   icon: Lock,
    //   title: 'Enterprise Security',
    //   description: 'Bank-level security with encryption, compliance features, and regular security audits.'
    // }
  ];

  return (
    <section id="saas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            SAAS{" "}
            <span className="bg-gradient-to-r from-purple-600 to-magenta-600 bg-clip-text text-transparent">
              Development Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business idea into a powerful SAAS platform with our
            comprehensive development services and proven methodologies.
          </p>
        </div>

        {/* Hero Image Section */}
        <div className="mb-20">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Team working on SAAS development"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-magenta-600/80 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-4xl font-bold mb-4">
                  Building the Future of SAAS
                </h3>
                <p className="text-xl text-purple-100 max-w-2xl">
                  Our expert team transforms innovative ideas into scalable
                  software solutions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {saasFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-purple-50 to-magenta-50 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 relative" // added 'relative'
              >
                <div className="bg-gradient-to-br from-purple-600 to-magenta-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <br/><br/>
                <button className="absolute bottom-6 right-6 bg-gradient-to-r from-purple-600 to-magenta-600 text-white px-8 py-1 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-semibold">
                  Try it
                </button>
              </div>
            );
          })}
        </div>

        {/* Process Section with Images */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our SAAS Development Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Discovery",
                description: "Understanding your vision and requirements",
                image:
                  "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2",
              },
              {
                step: "2",
                title: "Planning",
                description: "Architecture design and project roadmap",
                image:
                  "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2",
              },
              {
                step: "3",
                title: "Development",
                description: "Agile development with regular updates",
                image:
                  "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2",
              },
              {
                step: "4",
                title: "Launch",
                description: "Deployment and ongoing support",
                image:
                  "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2",
              },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <img
                    src={process.image}
                    alt={process.title}
                    className="w-full h-48 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/80 to-transparent rounded-2xl flex items-end justify-center pb-4">
                    <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-xl font-bold text-purple-600">
                        {process.step}
                      </span>
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {process.title}
                </h4>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Technologies We Use
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
                alt="Modern technology workspace"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  "React & Next.js",
                  "Node.js & Express",
                  "Python & Django",
                  "AWS & Azure",
                  "PostgreSQL & MongoDB",
                  "Docker & Kubernetes",
                  "GraphQL & REST APIs",
                  "TypeScript & JavaScript",
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-purple-50 to-magenta-50 p-4 rounded-xl text-center"
                  >
                    <span className="font-semibold text-gray-800">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-magenta-600 rounded-3xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Build Your SAAS Platform?
          </h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a customized development plan
            that fits your timeline and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-xl hover:bg-gray-100 transition-all duration-200 font-semibold flex items-center justify-center space-x-2">
              <span>Schedule Free Consultation</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-200 font-semibold">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SAAS;
