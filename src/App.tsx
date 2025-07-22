import ReactDOM from 'react-dom/client'
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Star, Users, Calendar, Plane, Heart, Menu, X, CheckCircle } from 'lucide-react';

// Type definitions
interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  gradient: string;
}

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  borderColor: string;
}

interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
  gradient: string;
}

const HappinessPlansWebsite: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = (): void => {
      const sections = ['home', 'about', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLDivElement>): Promise<void> => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Please fill in all required fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  const scrollToSection = (sectionId: string): void => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Data configurations
  const navigationItems: string[] = ['home', 'about', 'services', 'contact'];
  
  const contactInfo: ContactInfo[] = [
    {
      icon: <Phone className="h-6 w-6 text-white" />,
      label: 'Phone',
      value: '8224803424',
      href: 'tel:8224803424',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Mail className="h-6 w-6 text-white" />,
      label: 'Website',
      value: 'www.happinessplans.com',
      href: 'http://www.happinessplans.com',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: <MapPin className="h-6 w-6 text-white" />,
      label: 'Industry',
      value: 'Hospitality',
      gradient: 'from-pink-500 to-pink-600'
    }
  ];

  const services: Service[] = [
    {
      icon: <Plane className="h-8 w-8 text-white" />,
      title: 'Travel Planning',
      description: 'Complete travel solutions including flight bookings, hotel reservations, tour arrangements, and activity planning tailored to your preferences and budget.',
      gradient: 'from-blue-500 to-blue-600',
      borderColor: 'border-blue-100'
    },
    {
      icon: <Calendar className="h-8 w-8 text-white" />,
      title: 'Event Management',
      description: 'Professional event planning for corporate retreats, weddings, and special occasions with venue selection, decor, catering, and entertainment coordination.',
      gradient: 'from-purple-500 to-purple-600',
      borderColor: 'border-purple-100'
    },
    {
      icon: <Heart className="h-8 w-8 text-white" />,
      title: 'Custom Experiences',
      description: 'Personalized travel and event experiences designed specifically for your unique requirements, ensuring every moment is perfectly crafted for you.',
      gradient: 'from-pink-500 to-pink-600',
      borderColor: 'border-pink-100'
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: 'Group Tours',
      description: 'Specialized group travel packages for families, friends, and corporate teams with coordinated itineraries and group-friendly accommodations.',
      gradient: 'from-green-500 to-green-600',
      borderColor: 'border-green-100'
    },
    {
      icon: <MapPin className="h-8 w-8 text-white" />,
      title: 'Destination Guidance',
      description: 'Expert advice on destinations, local attractions, cultural experiences, and hidden gems to make your journey truly memorable and authentic.',
      gradient: 'from-yellow-500 to-yellow-600',
      borderColor: 'border-yellow-100'
    },
    {
      icon: <Star className="h-8 w-8 text-white" />,
      title: 'VIP Services',
      description: 'Premium travel and event services including priority bookings, luxury accommodations, private transfers, and exclusive access to special venues.',
      gradient: 'from-indigo-500 to-indigo-600',
      borderColor: 'border-indigo-100'
    }
  ];

  const stats: Stat[] = [
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      value: '500+',
      label: 'Happy Clients',
      gradient: 'from-blue-50 to-blue-100'
    },
    {
      icon: <Calendar className="h-12 w-12 text-purple-600" />,
      value: '200+',
      label: 'Events Managed',
      gradient: 'from-purple-50 to-purple-100'
    },
    {
      icon: <Plane className="h-12 w-12 text-pink-600" />,
      value: '1000+',
      label: 'Trips Planned',
      gradient: 'from-pink-50 to-pink-100'
    },
    {
      icon: <Star className="h-12 w-12 text-green-600" />,
      value: '5 Star',
      label: 'Average Rating',
      gradient: 'from-green-50 to-green-100'
    }
  ];

  const benefits: string[] = [
    'Personalized service tailored to your needs',
    '24/7 support throughout your journey',
    'Competitive pricing with transparent costs',
    'Years of experience in hospitality industry'
  ];

  const serviceOptions: { value: string; label: string }[] = [
    { value: '', label: 'Select Service' },
    { value: 'travel-planning', label: 'Travel Planning' },
    { value: 'event-management', label: 'Event Management' },
    { value: 'custom-experiences', label: 'Custom Experiences' },
    { value: 'group-tours', label: 'Group Tours' },
    { value: 'vip-services', label: 'VIP Services' }
  ];

  const getDisplayName = (section: string): string => {
    const names: Record<string, string> = {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      contact: 'Contact'
    };
    return names[section] || section.charAt(0).toUpperCase() + section.slice(1);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Happiness Plans
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`font-medium transition-all duration-300 hover:text-blue-600 relative ${
                    activeSection === section ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {getDisplayName(section)}
                  {activeSection === section && (
                    <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                  )}
                </button>
              ))}
              <a
                href="tel:8224803424"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Call Now
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                {navigationItems.map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="text-left font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    {getDisplayName(section)}
                  </button>
                ))}
                <a
                  href="tel:8224803424"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-semibold text-center"
                >
                  Call Now
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                Your Dream Journey Starts Here
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                From breathtaking travel adventures to unforgettable event experiences, we craft moments that last a lifetime. Let us handle every detail while you focus on creating memories.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection('services')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Explore Services
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  Get Started
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-3xl shadow-2xl flex items-center justify-center text-white text-6xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
                <Plane className="h-24 w-24 animate-bounce" />
              </div>
              <div className="absolute -top-6 -right-6 bg-yellow-400 rounded-full p-4 shadow-lg animate-pulse">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-green-400 rounded-full p-4 shadow-lg animate-pulse">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Happiness Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are your trusted partners in creating extraordinary experiences that bring joy and lasting memories.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="prose prose-lg text-gray-700 leading-relaxed">
                <p className="text-xl mb-6">
                  Looking for a reliable and experienced tour and travel company for your next vacation? Look no further! Our company specializes in travel planning and event management, ensuring that your trip is tailored to your specifications and runs smoothly from start to finish.
                </p>
                <p className="mb-6">
                  We understand that planning a trip can be overwhelming, so we take care of all the details, from booking flights and hotels to arranging tours and activities. In addition to travel planning, we specialize in event management, creating unforgettable experiences for corporate retreats, weddings, and other special occasions.
                </p>
                <p>
                  Our team works closely with clients to ensure that every detail is perfect, from venue selection and decor to catering and entertainment. So if you're looking for a trustworthy and reliable travel and event management company, look no further.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${stat.gradient} p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                >
                  <div className="flex justify-center mb-4">{stat.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From dream destinations to perfect events, we handle every detail so you can focus on what matters most.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border ${service.borderColor}`}
              >
                <div className={`bg-gradient-to-br ${service.gradient} p-4 rounded-2xl w-fit mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Start Your Journey Today
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to create unforgettable memories? Get in touch with us and let's plan something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Get In Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`bg-gradient-to-br ${contact.gradient} p-3 rounded-xl`}>
                      {contact.icon}
                    </div>
                    <div>
                      <p className="text-gray-600">{contact.label}</p>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          target={contact.href.startsWith('http') ? '_blank' : undefined}
                          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-xl font-semibold text-gray-800">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl border border-blue-100">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Why Choose Happiness Plans?</h4>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-3xl shadow-lg border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded-xl">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <p className="text-green-700 font-semibold">Thank you! We'll get back to you soon.</p>
                  </div>
                </div>
              )}

              <div className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      {serviceOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your travel dreams or event vision..."
                  />
                </div>
                
                <button
                 
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-pink-400" />
              <span className="text-2xl font-bold">Happiness Plans</span>
            </div>
            <p className="text-gray-300 mb-6">
              Creating unforgettable journeys and events that bring happiness to your life.
            </p>
            <div className="flex justify-center space-x-8 mb-8">
              <a 
                href="tel:8224803424" 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Call us"
              >
                <Phone className="h-6 w-6" />
              </a>
              <a 
                href="http://www.happinessplans.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Visit our website"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-400 text-sm">
                © 2025 Happiness Plans. All rights reserved. | Hospitality Industry Leader | 
                Made with ❤ by Kunwar
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HappinessPlansWebsite;