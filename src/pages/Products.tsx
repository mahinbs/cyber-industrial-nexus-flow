
import React, { useState } from 'react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Download, Eye, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const categories = [
    { id: 'all', name: 'All Products', count: 45 },
    { id: 'composite-repair', name: 'Composite Repair', count: 12 },
    { id: 'epoxy-coatings', name: 'Epoxy & Coatings', count: 15 },
    { id: 'cleaning-systems', name: 'Cleaning Systems', count: 10 },
    { id: 'maintenance-tools', name: 'Maintenance Tools', count: 8 }
  ];

  const products = [
    {
      id: 1,
      name: 'CarbonWrap Pro X1',
      category: 'composite-repair',
      description: 'Advanced carbon fiber composite repair system for high-pressure pipelines and structural reinforcement.',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      applications: ['Pipelines', 'Pressure Vessels', 'Structural Repair'],
      features: ['High Strength', 'Chemical Resistant', 'Quick Cure'],
      price: 'Contact for Quote',
      datasheet: '/datasheets/carbonwrap-pro-x1.pdf'
    },
    {
      id: 2,
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
      id: 3,
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
      id: 4,
      name: 'FiberFlex Marine',
      category: 'composite-repair',
      description: 'Specialized glass fiber repair system designed for marine environments and underwater applications.',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      applications: ['Hull Repair', 'Underwater Pipes', 'Marine Structures'],
      features: ['Underwater Cure', 'Salt Water Resistant', 'Flexible'],
      price: 'Contact for Quote',
      datasheet: '/datasheets/fiberflex-marine.pdf'
    },
    {
      id: 5,
      name: 'ThermoSeal Pro',
      category: 'epoxy-coatings',
      description: 'High-temperature resistant putty system for extreme heat applications up to 300°C continuous service.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      applications: ['Furnace Repair', 'Exhaust Systems', 'Heat Exchangers'],
      features: ['300°C Service', 'Thermal Shock Resistant', 'Fast Repair'],
      price: 'Contact for Quote',
      datasheet: '/datasheets/thermoseal-pro.pdf'
    },
    {
      id: 6,
      name: 'ChemClean Advanced',
      category: 'cleaning-systems',
      description: 'Environmentally safe chemical cleaning system for removing scale, rust, and chemical deposits.',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.6,
      applications: ['Chemical Cleaning', 'Scale Removal', 'Decontamination'],
      features: ['Eco-Friendly', 'Fast Acting', 'Safe Formula'],
      price: 'Contact for Quote',
      datasheet: '/datasheets/chemclean-advanced.pdf'
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
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Our Products
              </span>
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed">
              Advanced industrial solutions engineered for the world's most demanding applications
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-12 bg-gradient-to-b from-gray-900 to-black border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-500"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-4 w-full lg:w-auto">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full lg:w-48 bg-gray-800/50 border-gray-700 text-white">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  {categories.map(category => (
                    <SelectItem key={category.id} value={category.id} className="text-white">
                      {category.name} ({category.count})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full lg:w-40 bg-gray-800/50 border-gray-700 text-white">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  <SelectItem value="name" className="text-white">Name</SelectItem>
                  <SelectItem value="rating" className="text-white">Rating</SelectItem>
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
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
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
                <Card className="group h-full glass border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-500 transform hover:scale-105 hover:-translate-y-4">
                  <CardContent className="p-0">
                    {/* Product Image */}
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      
                      {/* Rating Badge */}
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0">
                          <Star className="w-3 h-3 mr-1 fill-current" />
                          {product.rating}
                        </Badge>
                      </div>

                      {/* Quick Actions */}
                      <div className="absolute bottom-4 left-4 flex gap-2">
                        <Button size="sm" className="bg-black/50 hover:bg-cyan-500/80 border border-cyan-400/50">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" className="bg-black/50 hover:bg-cyan-500/80 border border-cyan-400/50">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                          {categories.find(c => c.id === product.category)?.name}
                        </Badge>
                        <span className="text-cyan-400 font-semibold">{product.price}</span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                        {product.name}
                      </h3>

                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                        {product.description}
                      </p>

                      {/* Applications */}
                      <div className="mb-4">
                        <p className="text-xs text-gray-400 mb-2">Applications:</p>
                        <div className="flex flex-wrap gap-1">
                          {product.applications.map(app => (
                            <Badge key={app} variant="outline" className="text-xs border-gray-600 text-gray-300">
                              {app}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <p className="text-xs text-gray-400 mb-2">Key Features:</p>
                        <div className="flex flex-wrap gap-1">
                          {product.features.map(feature => (
                            <Badge key={feature} className="text-xs bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-500/30">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex gap-2">
                        <Link to={`/products/${product.id}`} className="flex-1">
                          <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300">
                            View Details
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                        <Button variant="outline" size="sm" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20">
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
              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20 px-8 py-4"
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
