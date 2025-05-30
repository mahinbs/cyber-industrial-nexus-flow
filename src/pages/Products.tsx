
import React, { useState } from 'react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Download, Eye, Star, ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const categories = [
    { id: 'all', name: 'All Products', count: 12 },
    { id: 'composite-repair', name: 'Composite Repair', count: 4 },
    { id: 'epoxy-coatings', name: 'Epoxy & Coatings', count: 3 },
    { id: 'cleaning-systems', name: 'Cleaning Systems', count: 2 },
    { id: 'maintenance-tools', name: 'Maintenance Tools', count: 2 },
    { id: 'marine-offshore', name: 'Marine & Offshore', count: 1 }
  ];

  const products = [
    {
      id: 1,
      name: 'SealXpert Pro',
      category: 'composite-repair',
      description: 'Revolutionary smart sealing system with IoT monitoring for critical infrastructure. Real-time leak detection and automated response capabilities.',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      applications: ['Pipelines', 'Pressure Vessels', 'Critical Infrastructure'],
      features: ['IoT Monitoring', 'Smart Alerts', 'Auto Response'],
      price: 'Contact for Quote',
      datasheet: '/datasheets/sealxpert-pro.pdf',
      isMainProduct: true,
      hasAssessment: true
    },
    {
      id: 2,
      name: 'CarbonWrap Pro X1',
      category: 'composite-repair',
      description: 'Advanced carbon fiber composite repair system for high-pressure pipelines and structural reinforcement.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      applications: ['Pipelines', 'Pressure Vessels', 'Structural Repair'],
      features: ['High Strength', 'Chemical Resistant', 'Quick Cure'],
      price: 'Contact for Quote',
      datasheet: '/datasheets/carbonwrap-pro-x1.pdf'
    },
    {
      id: 3,
      name: 'FlexSeal Composite',
      category: 'composite-repair',
      description: 'Flexible composite repair solution for underwater and marine applications with superior adhesion.',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      applications: ['Underwater Repair', 'Marine Vessels', 'Offshore Platforms'],
      features: ['Underwater Cure', 'Flexible', 'Salt Water Resistant'],
      price: 'Contact for Quote',
      datasheet: '/datasheets/flexseal-composite.pdf'
    },
    {
      id: 4,
      name: 'RapidFix Emergency Kit',
      category: 'composite-repair',
      description: 'Emergency composite repair kit for immediate leak sealing and temporary structural repairs.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      applications: ['Emergency Repair', 'Leak Sealing', 'Temporary Fix'],
      features: ['Quick Application', 'Portable Kit', '5-Min Cure'],
      price: 'Contact for Quote',
      datasheet: '/datasheets/rapidfix-emergency.pdf'
    },
    {
      id: 5,
      name: 'EpoxyShield Industrial',
      category: 'epoxy-coatings',
      description: 'Premium epoxy coating system providing superior protection against chemical corrosion and extreme temperatures.',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      applications: ['Tank Lining', 'Floor Coating', 'Marine Protection'],
      features: ['Chemical Resistant', '200°C Service', 'VOC Free'],
      price: 'Contact for Quote',
      datasheet: '/datasheets/epoxyshield-industrial.pdf'
    },
    {
      id: 6,
      name: 'ThermoSeal Pro',
      category: 'epoxy-coatings',
      description: 'High-temperature resistant putty system for extreme heat applications up to 300°C continuous service.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      applications: ['Furnace Repair', 'Exhaust Systems', 'Heat Exchangers'],
      features: ['300°C Service', 'Thermal Shock Resistant', 'Fast Repair'],
      price: 'Contact for Quote',
      datasheet: '/datasheets/thermoseal-pro.pdf'
    },
    {
      id: 7,
      name: 'ChemGuard Coating',
      category: 'epoxy-coatings',
      description: 'Chemical resistant protective coating for aggressive chemical environments and acid exposure.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      applications: ['Chemical Plants', 'Acid Storage', 'Process Equipment'],
      features: ['Acid Resistant', 'Long Lasting', 'Easy Application'],
      price: 'Contact for Quote',
      datasheet: '/datasheets/chemguard-coating.pdf'
    },
    {
      id: 8,
      name: 'HydroClean 5000',
      category: 'cleaning-systems',
      description: 'Revolutionary hydroblasting system for industrial tank cleaning with automated debris removal and filtration.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      applications: ['Tank Cleaning', 'Surface Preparation', 'Hydroblasting'],
      features: ['40,000 PSI', 'Automated System', 'Water Recycling'],
      price: 'Contact for Quote',
      datasheet: '/datasheets/hydroclean-5000.pdf'
    },
    {
      id: 9,
      name: 'ChemClean Advanced',
      category: 'cleaning-systems',
      description: 'Environmentally safe chemical cleaning system for removing scale, rust, and chemical deposits.',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.6,
      applications: ['Chemical Cleaning', 'Scale Removal', 'Decontamination'],
      features: ['Eco-Friendly', 'Fast Acting', 'Safe Formula'],
      price: 'Contact for Quote',
      datasheet: '/datasheets/chemclean-advanced.pdf'
    },
    {
      id: 10,
      name: 'InspectPro Digital',
      category: 'maintenance-tools',
      description: 'Digital inspection toolkit with advanced sensors and AI-powered analysis for predictive maintenance.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      applications: ['NDT Inspection', 'Predictive Maintenance', 'Quality Control'],
      features: ['AI Analysis', 'Digital Reports', 'Cloud Sync'],
      price: 'Contact for Quote',
      datasheet: '/datasheets/inspectpro-digital.pdf'
    },
    {
      id: 11,
      name: 'MaintenanceKit Pro',
      category: 'maintenance-tools',
      description: 'Comprehensive maintenance toolkit with specialized tools for industrial equipment servicing.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      applications: ['Equipment Maintenance', 'Field Service', 'Emergency Repair'],
      features: ['Complete Set', 'Portable Case', 'Industrial Grade'],
      price: 'Contact for Quote',
      datasheet: '/datasheets/maintenancekit-pro.pdf'
    },
    {
      id: 12,
      name: 'MarineSeal Ultimate',
      category: 'marine-offshore',
      description: 'Ultimate marine sealing solution for offshore platforms and subsea applications with extreme durability.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      applications: ['Offshore Platforms', 'Subsea Equipment', 'Marine Vessels'],
      features: ['Subsea Rated', 'Extreme Durability', 'Saltwater Proof'],
      price: 'Contact for Quote',
      datasheet: '/datasheets/marineseal-ultimate.pdf'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1), rgba(147, 197, 253, 0.2)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Our Products
              </span>
            </h1>
            <p className="text-2xl text-slate-700 leading-relaxed">
              Advanced industrial solutions engineered for the world's most demanding applications
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-12 bg-white/80 backdrop-blur-sm border-b border-blue-200/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 bg-white border-blue-200 text-slate-800 placeholder-slate-400 focus:border-blue-500"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-4 w-full lg:w-auto">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full lg:w-48 bg-white border-blue-200 text-slate-800">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-white border-blue-200">
                  {categories.map(category => (
                    <SelectItem key={category.id} value={category.id} className="text-slate-800">
                      {category.name} ({category.count})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full lg:w-40 bg-white border-blue-200 text-slate-800">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-white border-blue-200">
                  <SelectItem value="name" className="text-slate-800">Name</SelectItem>
                  <SelectItem value="rating" className="text-slate-800">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-3 mt-6">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                    : 'bg-white/80 text-slate-600 hover:bg-blue-50 border border-blue-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.map((product, index) => (
              <AnimatedSection key={product.id} delay={index * 100}>
                <Card className="group h-full bg-white/90 backdrop-blur-sm border-blue-200/50 hover:border-blue-400/60 transition-all duration-500 transform hover:scale-105 hover:-translate-y-4 hover:shadow-xl">
                  <CardContent className="p-0">
                    {/* Product Image */}
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                      
                      {/* Main Product Badge */}
                      {product.isMainProduct && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
                            Main Product
                          </Badge>
                        </div>
                      )}

                      {/* Rating Badge */}
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0">
                          <Star className="w-3 h-3 mr-1 fill-current" />
                          {product.rating}
                        </Badge>
                      </div>

                      {/* Quick Actions */}
                      <div className="absolute bottom-4 left-4 flex gap-2">
                        <Button size="sm" className="bg-white/20 hover:bg-blue-500/80 border border-white/30 text-white">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" className="bg-white/20 hover:bg-blue-500/80 border border-white/30 text-white">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
                          {categories.find(c => c.id === product.category)?.name}
                        </Badge>
                        <span className="text-blue-600 font-semibold">{product.price}</span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h3>

                      <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                        {product.description}
                      </p>

                      {/* Applications */}
                      <div className="mb-4">
                        <p className="text-xs text-slate-500 mb-2">Applications:</p>
                        <div className="flex flex-wrap gap-1">
                          {product.applications.map(app => (
                            <Badge key={app} variant="outline" className="text-xs border-slate-300 text-slate-600">
                              {app}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <p className="text-xs text-slate-500 mb-2">Key Features:</p>
                        <div className="flex flex-wrap gap-1">
                          {product.features.map(feature => (
                            <Badge key={feature} className="text-xs bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 border-blue-200">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex gap-2">
                        <Link to={`/products/${product.id}`} className="flex-1">
                          <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 text-white">
                            View Details
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                        {product.hasAssessment && (
                          <Link to={`/assessment/${product.name.toLowerCase().replace(/ /g, '-')}`}>
                            <Button variant="outline" size="sm" className="border-blue-300 text-blue-600 hover:bg-blue-50">
                              <FileText className="w-4 h-4" />
                            </Button>
                          </Link>
                        )}
                        <Button variant="outline" size="sm" className="border-blue-300 text-blue-600 hover:bg-blue-50">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {/* Load More */}
          <AnimatedSection className="text-center mt-16">
            <Button 
              variant="outline" 
              size="lg"
              className="border-blue-300 text-blue-600 hover:bg-blue-50 px-8 py-4"
            >
              Load More Products
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Products;
