
import React, { useState } from 'react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const services = [
    'Composite Repair',
    'Epoxy Coatings',
    'Industrial Cleaning',
    'Tank Cleaning',
    'Emergency Repair',
    'Maintenance Services',
    'Marine Services',
    'Consultation'
  ];

  const offices = [
    {
      city: 'Dubai, UAE',
      address: 'Dubai Industrial City, Plot 123, Al Ain Road',
      phone: '+971 4 123 4567',
      email: 'dubai@industrialsolutions.com',
      hours: '24/7 Emergency Service',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      city: 'Houston, USA',
      address: '1234 Energy Corridor, Houston, TX 77084',
      phone: '+1 713 123 4567',
      email: 'houston@industrialsolutions.com',
      hours: '24/7 Emergency Service',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      city: 'Singapore',
      address: 'Jurong Industrial Estate, 45 Tuas Avenue',
      phone: '+65 6123 4567',
      email: 'singapore@industrialsolutions.com',
      hours: '24/7 Emergency Service',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Contact Us
              </span>
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed">
              Get in touch with our experts for immediate assistance and customized industrial solutions
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Quick Contact Banner */}
      <section className="py-12 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Emergency Service Available 24/7</h3>
              <p className="text-cyan-100">Critical industrial repairs and emergency response worldwide</p>
            </div>
            <div className="flex gap-4">
              <Button 
                size="lg" 
                className="bg-white text-cyan-600 hover:bg-gray-100 font-bold"
                onClick={() => window.open('tel:+971412345677', '_self')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-cyan-600"
                onClick={() => window.open('https://wa.me/971412345677', '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <AnimatedSection>
              <Card className="glass border-cyan-500/30">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-500"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-500"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                      <Input
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-500"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Service Required</label>
                      <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                        <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          {services.map(service => (
                            <SelectItem key={service} value={service} className="text-white">
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                      <Textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-500"
                        placeholder="Describe your requirements or tell us about your project..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300"
                    >
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Contact Information */}
            <AnimatedSection delay={200}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
                  <p className="text-xl text-gray-300 mb-8">
                    Our team of experts is ready to assist you with any industrial challenge. 
                    Contact us for immediate support or to discuss your project requirements.
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-6">
                  <Card className="glass border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300">
                    <CardContent className="p-6 flex items-center">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center mr-4">
                        <Phone className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Emergency Hotline</h3>
                        <p className="text-cyan-400">+971 4 123 4567</p>
                        <p className="text-sm text-gray-400">24/7 Global Support</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300">
                    <CardContent className="p-6 flex items-center">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center mr-4">
                        <Mail className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Email Support</h3>
                        <p className="text-cyan-400">info@industrialsolutions.com</p>
                        <p className="text-sm text-gray-400">Response within 2 hours</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300">
                    <CardContent className="p-6 flex items-center">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center mr-4">
                        <MessageCircle className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">WhatsApp Business</h3>
                        <p className="text-cyan-400">+971 50 123 4567</p>
                        <p className="text-sm text-gray-400">Instant messaging support</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300">
                    <CardContent className="p-6 flex items-center">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center mr-4">
                        <Clock className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Business Hours</h3>
                        <p className="text-cyan-400">Sun - Thu: 8:00 AM - 6:00 PM</p>
                        <p className="text-sm text-gray-400">Emergency service 24/7</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Global Offices
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              With offices and service centers worldwide, we're always close to your operations
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <AnimatedSection key={office.city} delay={index * 200}>
                <Card className="group h-full glass border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-500 transform hover:scale-105">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={office.image}
                        alt={office.city}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-xl font-bold text-white">{office.city}</h3>
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300">{office.address}</p>
                      </div>

                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-cyan-400 mr-3" />
                        <p className="text-cyan-400">{office.phone}</p>
                      </div>

                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                        <p className="text-cyan-400">{office.email}</p>
                      </div>

                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-cyan-400 mr-3" />
                        <p className="text-gray-300">{office.hours}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Find Us on the Map
              </span>
            </h2>
            <p className="text-gray-300">Our main headquarters in Dubai Industrial City</p>
          </AnimatedSection>

          <AnimatedSection>
            <Card className="glass border-cyan-500/30">
              <CardContent className="p-0">
                <div className="w-full h-96 bg-gray-800 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Globe className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                    <p className="text-gray-300">Interactive Map Integration</p>
                    <p className="text-sm text-gray-500">Google Maps would be embedded here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;
