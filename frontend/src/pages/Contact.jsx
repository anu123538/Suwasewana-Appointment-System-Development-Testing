import React, { useState } from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  // Replace this with your actual image path
  const contactImage =
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Visit Us",
      detail: "54709 Willms Station",
      subDetail: "Suite 350, Washington, USA",
      color: "from-emerald-500 to-green-500",
    },
    {
      icon: "📞",
      title: "Call Us",
      detail: "(415) 555-0132",
      subDetail: "Mon-Fri: 9AM - 6PM",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: "✉️",
      title: "Email Us",
      detail: "greatstackdev@gmail.com",
      subDetail: "We reply within 24 hours",
      color: "from-teal-500 to-cyan-500",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-green-50 pb-16">
      {/* Hero Section */}
      <div className="text-center pt-10 pb-8 px-4">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="text-2xl">💬</span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#27AE60]">
            Contact Us
          </h1>
          <span className="text-2xl">💬</span>
        </div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          We'd love to hear from you! Get in touch with our team for any
          inquiries or support.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              <div
                className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${info.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300 text-3xl`}
              >
                {info.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {info.title}
              </h3>
              <p className="text-gray-700 font-medium mb-1">{info.detail}</p>
              <p className="text-gray-500 text-sm">{info.subDetail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Image & Office Info */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8">
              <div className="relative overflow-hidden group">
                <div className="absolute inset-0  transition-opacity duration-300 z-10"></div>
                <img
                  className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                  src={assets.contact_image}
                  alt="Contact Us"
                />
              </div>

              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-1 bg-[#27AE60] rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Our Office
                  </h2>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="text-gray-700 font-medium">
                        54709 Willms Station
                      </p>
                      <p className="text-gray-500">
                        Suite 350, Washington, USA
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📞</span>
                    <div>
                      <p className="text-gray-700 font-medium">
                        (415) 555-0132
                      </p>
                      <p className="text-gray-500">
                        Available Mon-Fri, 9AM - 6PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✉️</span>
                    <div>
                      <p className="text-gray-700 font-medium">
                        greatstackdev@gmail.com
                      </p>
                      <p className="text-gray-500">24-hour response time</p>
                    </div>
                  </div>
                </div>

                {/* Career Section */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-[#27AE60]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">💼</span>
                    <h3 className="text-xl font-bold text-gray-800">
                      Careers at PRESCRIPTO
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Join our innovative team and help shape the future of
                    healthcare technology.
                  </p>
                  <button className="w-full bg-[#27AE60] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 hover:bg-[#229954] transition-all duration-300">
                    Explore Open Positions →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl">📝</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Send us a Message
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#27AE60] focus:outline-none transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-green-600 to-green-400 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Send Message ✉️
                </button>
              </div>

              {/* Quick Response Badge */}
              <div className="mt-8 flex items-center justify-center gap-2 text-gray-600">
                <span className="text-green-500 text-xl">✓</span>
                <p className="text-sm">We typically respond within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map or Additional Info Section */}
      <div className="max-w-6xl mx-auto px-4 mt-16">
        <div className="bg-gradient-to-r from-green-600 to-green-400 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
          <span className="text-6xl mb-6 block">🌟</span>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            Whether you're a patient looking for care or a professional seeking
            opportunities, we're here to help you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
              Book Appointment
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
