import React, { useState } from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  // Use local logo asset to avoid external placeholder DNS issues
  const logoUrl = assets.logo;

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hello! 👋 How can I help you today?" },
  ]);
  const [inputValue, setInputValue] = useState("");

  const quickQuestions = [
    {
      question: "What are your services?",
      answer:
        "We provide comprehensive healthcare services including general consultations, specialist appointments, diagnostic services, and emergency care.",
    },
    {
      question: "How to book an appointment?",
      answer:
        'You can book an appointment through our website by clicking the "Book Appointment" button, or call us at +1-212-456-7890.',
    },
    {
      question: "What are your hours?",
      answer:
        "We are open Monday to Friday from 8:00 AM to 8:00 PM, and Saturday from 9:00 AM to 5:00 PM.",
    },
    {
      question: "Where are you located?",
      answer:
        "We are located at 123 Healthcare Drive, Medical District. Check our Contact page for detailed directions.",
    },
  ];

  const handleQuickQuestion = (question, answer) => {
    setMessages([
      ...messages,
      { type: "user", text: question },
      { type: "bot", text: answer },
    ]);
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([
        ...messages,
        { type: "user", text: inputValue },
        {
          type: "bot",
          text: "Thank you for your message! Our team will get back to you soon. For immediate assistance, please call +1-212-456-7890.",
        },
      ]);
      setInputValue("");
    }
  };

  return (
    <footer className="bg-gradient-to-b from-white to-green-50 mt-20">
      <div className="md:mx-10">
        {/* Main Footer Content */}
        <div className="relative">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#27AE60]/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#27AE60]/5 rounded-full blur-3xl -z-10"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 py-16 px-4">
            {/*---- Left Section - Logo & Description ----*/}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <img
                  className="w-40 hover:scale-105 transition-transform duration-300"
                  src={logoUrl}
                  alt="Suwasewana Logo"
                />
              </div>
              <p className="text-gray-600 leading-7 mb-6 max-w-md">
                Your trusted partner in healthcare. We provide quality medical
                services with compassion and excellence, ensuring your
                well-being is our top priority.
              </p>

              {/* Social Media Links */}
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#27AE60] hover:bg-[#27AE60] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110"
                >
                  <span className="text-xl">📘</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#27AE60] hover:bg-[#27AE60] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110"
                >
                  <span className="text-xl">🐦</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#27AE60] hover:bg-[#27AE60] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110"
                >
                  <span className="text-xl">📷</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#27AE60] hover:bg-[#27AE60] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110"
                >
                  <span className="text-xl">💼</span>
                </a>
              </div>
            </div>

            {/*---- Company Links ----*/}
            <div>
              <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                <span className="text-[#27AE60]">🏢</span> COMPANY
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#27AE60] hover:translate-x-2 inline-block transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="text-[#27AE60]">→</span> Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#27AE60] hover:translate-x-2 inline-block transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="text-[#27AE60]">→</span> About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#27AE60] hover:translate-x-2 inline-block transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="text-[#27AE60]">→</span> Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#27AE60] hover:translate-x-2 inline-block transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="text-[#27AE60]">→</span> Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/*---- Contact Information ----*/}
            <div>
              <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                <span className="text-[#27AE60]">📞</span> GET IN TOUCH
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#27AE60] transition-all duration-300">
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                      📱
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Phone</p>
                    <a
                      href="tel:+12124567890"
                      className="text-gray-700 hover:text-[#27AE60] font-medium transition-colors duration-300"
                    >
                      +1-212-456-7890
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#27AE60] transition-all duration-300">
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                      ✉️
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Email</p>
                    <a
                      href="mailto:suwasewana@gmail.com"
                      className="text-gray-700 hover:text-[#27AE60] font-medium transition-colors duration-300"
                    >
                      suwasewana@gmail.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*---- Bottom Bar ----*/}
        <div className="border-t border-gray-200">
          <div className="py-6 px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-600 text-center md:text-left">
                Copyright © 2025{" "}
                <span className="text-[#27AE60] font-semibold">Suwasewana</span>{" "}
                - All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#27AE60] transition-colors duration-300"
                >
                  Terms of Service
                </a>
                <span className="text-gray-300">|</span>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#27AE60] transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Action Buttons */}
        <div className="fixed bottom-8 left-8 flex flex-col gap-4 z-50">
          {/* Chatbot Button */}
          <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="w-14 h-14 bg-[#27AE60] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center hover:bg-[#229954] relative"
            aria-label="Open chatbot"
          >
            <span className="text-3xl">{isChatOpen ? "✕" : "💬"}</span>
            {!isChatOpen && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
            )}
          </button>
        </div>

        {/* Back to Top Button - Right Side */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 w-14 h-14 bg-white text-[#27AE60] rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center border-2 border-[#27AE60] group z-50"
          aria-label="Back to top"
        >
          <span className="text-2xl group-hover:animate-bounce">↑</span>
        </button>

        {/* Chatbot Window */}
        {isChatOpen && (
          <div className="fixed bottom-32 left-8 w-96 max-w-[calc(100vw-4rem)] bg-white rounded-3xl shadow-2xl z-50 overflow-hidden animate-slideUp">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-[#27AE60] to-[#229954] p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                  🤖
                </div>
                <div>
                  <h3 className="font-bold text-lg">Healthcare Assistant</h3>
                  <p className="text-xs text-white/80 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
                    Online
                  </p>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-80 overflow-y-auto p-6 bg-gray-50 space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl ${
                      msg.type === "user"
                        ? "bg-[#27AE60] text-white rounded-br-none"
                        : "bg-white text-gray-800 shadow-md rounded-bl-none"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Questions */}
            <div className="p-4 bg-white border-t border-gray-200">
              <p className="text-xs text-gray-500 mb-3 font-semibold">
                Quick Questions:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {quickQuestions.map((item, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      handleQuickQuestion(item.question, item.answer)
                    }
                    className="text-xs bg-green-50 hover:bg-[#27AE60] hover:text-white text-gray-700 px-3 py-2 rounded-lg transition-all duration-300 text-left"
                  >
                    {item.question}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#27AE60] focus:outline-none transition-colors duration-300"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-[#27AE60] text-white px-6 py-3 rounded-xl hover:bg-[#229954] transition-all duration-300 font-semibold"
                >
                  ➤
                </button>
              </div>
            </div>
          </div>
        )}

        <style jsx>{`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-slideUp {
            animation: slideUp 0.3s ease-out;
          }
        `}</style>
      </div>
    </footer>
  );
};

export default Footer;
