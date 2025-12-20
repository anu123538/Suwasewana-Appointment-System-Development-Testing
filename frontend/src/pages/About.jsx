import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  const features = [
    {
      icon: "⏰",
      title: "Efficiency",
      description:
        "Streamlined appointment scheduling that fits into your busy lifestyle.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "👥",
      title: "Convenience",
      description:
        "Access to a network of trusted healthcare professionals in your area.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "❤️",
      title: "Personalization",
      description:
        "Tailored recommendations and reminders to help you stay on top of your health.",
      color: "from-orange-500 to-red-500",
    },
  ];

  const stats = [
    { number: "50K+", label: "Happy Patients" },
    { number: "200+", label: "Expert Doctors" },
    { number: "50+", label: "Specializations" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <div className="px-4 md:px-8 bg-gradient-to-b from-white to-blue-50">
      {/* Animated Title */}
      <div className="text-center pt-10 pb-6">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="text-2xl animate-pulse">✨</span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#27AE60] ">
            About Us
          </h1>
          <span className="text-2xl animate-pulse">✨</span>
        </div>
        <p className="text-gray-600 text-lg">
          Revolutionizing Healthcare, One Appointment at a Time
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100"
          >
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent mb-2">
              {stat.number}
            </div>
            <div className="text-gray-600 text-sm md:text-base">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* About Section with Modern Card */}
      <div className="my-16 max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 relative overflow-hidden group">
              <div className="absolute inset-0  group-hover:opacity-0 transition-opacity duration-300"></div>
              <img
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                src={assets.about_image}
                alt="About suwasewan"
              />
            </div>

            <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center gap-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-green-600 to-green-400 rounded-full"></div>
                <h2 className="text-2xl font-bold text-gray-800">Our Story</h2>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Welcome to{" "}
                <span className="font-semibold text-green-600">Suwasewana</span>,
                your trusted partner in managing your healthcare needs
                conveniently and efficiently. We understand the challenges
                individuals face when scheduling doctor appointments and
                managing health records.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Suwasewana is committed to excellence in healthcare technology.
                We continuously integrate the latest advancements to improve
                user experience and deliver superior service. Whether booking
                your first appointment or managing ongoing care, we're here to
                support you every step of the way.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border-l-4 border-green-600">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🏆</span>
                  <h3 className="text-xl font-bold text-gray-800">
                    Our Vision
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To create a seamless healthcare experience for every user. We
                  aim to bridge the gap between patients and healthcare
                  providers, making it easier for you to access the care you
                  need, when you need it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us - Modern Cards */}
      <div className="my-16 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
             Suwasewana
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Experience healthcare like never before
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              <div
                className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300 text-4xl items-center justify-center w-20 h-20`}
              >
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              <div
                className={`mt-6 w-0 h-1 bg-gradient-to-r ${feature.color} group-hover:w-full transition-all duration-500 rounded-full`}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Badge */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-green-600 to-green-400 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
          <div className="text-6xl mb-6 animate-pulse">🛡️</div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Your Health, Our Priority
          </h3>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Trusted by thousands of patients nationwide. Join our community and
            experience healthcare that puts you first.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
