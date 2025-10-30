
import React, { useState } from 'react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Download, ArrowRight, Wrench, Shield, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services as servicesContent } from '@/content/services';

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const serviceCategories = [
    { id: 'all', name: 'All Services', count: 12 },
    { id: 'maintenance', name: 'Maintenance Services', count: 4 },
    { id: 'repair', name: 'Repair Services', count: 3 },
    { id: 'inspection', name: 'Inspection Services', count: 3 },
    { id: 'consulting', name: 'Consulting Services', count: 2 }
  ];

  const services = [
    {
      id: 1,
      name: 'Quick Sealing Solutions',
      category: 'repair',
      description: 'Advanced composite repair solutions for pipelines, tanks, and pressure vessels with minimal downtime.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['24/7 Emergency Response', 'Certified Technicians', 'Hot Tapping Available', 'No Production Shutdown'],
      industries: ['Oil & Gas', 'Petrochemical', 'Marine', 'Power Generation'],
      downloadLink: '/service-profiles/quick-sealing.pdf',
      assessmentForm: '/assessment/quick-sealing'
    },
    {
      id: 2,
      name: 'Predictive Maintenance',
      category: 'maintenance',
      description: 'AI-powered predictive maintenance solutions to prevent failures before they occur.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['IoT Monitoring', 'AI Analytics', 'Real-time Alerts', 'Custom Dashboards'],
      industries: ['Manufacturing', 'Oil & Gas', 'Mining', 'Utilities'],
      downloadLink: '/service-profiles/predictive-maintenance.pdf',
      assessmentForm: '/assessment/predictive-maintenance'
    },
    {
      id: 3,
      name: 'Industrial Cleaning Services',
      category: 'maintenance',
      description: 'Comprehensive industrial cleaning services including hydroblasting and chemical cleaning.',
      image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['High-Pressure Cleaning', 'Chemical Cleaning', 'Waste Management', 'Environmental Compliance'],
      industries: ['Refineries', 'Chemical Plants', 'Food Processing', 'Marine'],
      downloadLink: '/service-profiles/industrial-cleaning.pdf',
      assessmentForm: '/assessment/industrial-cleaning'
    },
    {
      id: 4,
      name: 'NDT Inspection Services',
      category: 'inspection',
      description: 'Non-destructive testing services for structural integrity and safety compliance.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Ultrasonic Testing', 'Radiographic Testing', 'Magnetic Particle Testing', 'Dye Penetrant Testing'],
      industries: ['Aerospace', 'Oil & Gas', 'Construction', 'Manufacturing'],
      downloadLink: '/service-profiles/ndt-inspection.pdf',
      assessmentForm: '/assessment/ndt-inspection'
    }
  ];

  const toSlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1565043666747-69f6646db940?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-2xl text-slate-700 leading-relaxed glass p-6 rounded-2xl">
              Comprehensive industrial maintenance and repair services backed by decades of expertise
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-12 bg-white/50 border-b border-blue-200/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 bg-white border-blue-200 text-slate-700 placeholder-slate-400 focus:border-blue-500"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full lg:w-64 bg-white border-blue-200 text-slate-700">
                <SelectValue placeholder="Service Category" />
              </SelectTrigger>
              <SelectContent className="bg-white border-blue-200">
                {serviceCategories.map(category => (
                  <SelectItem key={category.id} value={category.id} className="text-slate-700">
                    {category.name} ({category.count})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 100}>
                <Card className="group h-full glass border-blue-200/50 hover:border-blue-400/60 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-2xl">
                  <CardContent className="p-0">
                    {/* Service Image */}
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0">
                          {serviceCategories.find(c => c.id === service.category)?.name}
                        </Badge>
                      </div>
                    </div>

                    {/* Service Details */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">
                        {service.name}
                      </h3>

                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="mb-6">
                        <p className="text-sm font-semibold text-slate-700 mb-3">Key Features:</p>
                        <div className="grid grid-cols-2 gap-2">
                          {service.features.map(feature => (
                            <div key={feature} className="flex items-center text-sm text-slate-600">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Industries */}
                      <div className="mb-8">
                        <p className="text-sm font-semibold text-slate-700 mb-3">Industries Served:</p>
                        <div className="flex flex-wrap gap-2">
                          {service.industries.map(industry => (
                            <Badge key={industry} variant="outline" className="border-blue-300 text-blue-600">
                              {industry}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                          asChild
                          className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                        >
                          <a href={service.downloadLink} download>
                            <Download className="w-4 h-4 mr-2" />
                            Service Profile
                          </a>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          className="flex-1 border-blue-300 text-blue-600 hover:bg-blue-50"
                        >
                          <Link to={`/assessment/${toSlug(service.name)}`}>
                            <ArrowRight className="w-4 h-4 mr-2" />
                            Get Assessment
                          </Link>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          className="flex-1 border-blue-300 text-blue-600 hover:bg-blue-50"
                        >
                          <Link to={`/services/${service.name.toLowerCase().replace(/[^a-z0-9]+/g,'-')}`}>
                            <ArrowRight className="w-4 h-4 mr-2" />
                            View Details
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-24 bg-white/50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Why Choose REFSOL1 Services?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Decades of expertise, cutting-edge technology, and unwavering commitment to excellence
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { iconName: 'Award', title: '30+ Years Experience', description: 'Proven track record in industrial maintenance and repair solutions' },
              { iconName: 'Shield', title: 'Safety First', description: 'Rigorous safety protocols and certified technicians for every project' },
              { iconName: 'Clock', title: '24/7 Emergency Response', description: 'Round-the-clock availability for critical maintenance needs' },
              { iconName: 'Wrench', title: 'Advanced Technology', description: 'State-of-the-art equipment and innovative repair methodologies' }
            ].map((benefit, index) => {
              const Icon = benefit.iconName === 'Award' ? Award : benefit.iconName === 'Shield' ? Shield : benefit.iconName === 'Clock' ? Clock : Wrench;
              return (
              <AnimatedSection key={benefit.title} delay={index * 100}>
                <div className="text-center p-6 glass rounded-2xl border-blue-200/50 hover:border-blue-400/60 transition-all duration-300 hover:shadow-lg">
                  <Icon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </AnimatedSection>
            )})}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
