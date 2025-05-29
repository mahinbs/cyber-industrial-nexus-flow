
import React, { useState } from 'react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Calendar, User, ArrowRight, Eye, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'technology', name: 'Technology' },
    { id: 'case-studies', name: 'Case Studies' },
    { id: 'industry-news', name: 'Industry News' },
    { id: 'safety', name: 'Safety' },
    { id: 'innovation', name: 'Innovation' }
  ];

  const posts = [
    {
      id: 1,
      title: 'Revolutionary Carbon Fiber Repair Techniques for Offshore Platforms',
      excerpt: 'Discover how our latest carbon fiber composite technology is transforming underwater pipeline repairs with 300% faster installation times.',
      content: 'Full article content would go here...',
      author: 'Dr. Sarah Mitchell',
      date: '2024-01-15',
      category: 'technology',
      tags: ['Carbon Fiber', 'Offshore', 'Innovation'],
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '8 min read',
      views: 1247
    },
    {
      id: 2,
      title: 'Case Study: Emergency Tank Repair at Major Petrochemical Facility',
      excerpt: 'How our 24/7 emergency response team successfully repaired a critical storage tank leak within 12 hours, preventing environmental disaster.',
      content: 'Full article content would go here...',
      author: 'Ahmed Al-Rashid',
      date: '2024-01-10',
      category: 'case-studies',
      tags: ['Emergency Repair', 'Tank Cleaning', 'Petrochemical'],
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '12 min read',
      views: 892
    },
    {
      id: 3,
      title: 'The Future of Industrial Cleaning: AI and Robotics Integration',
      excerpt: 'Exploring how artificial intelligence and robotic systems are revolutionizing industrial maintenance and safety protocols.',
      content: 'Full article content would go here...',
      author: 'Elena Rodriguez',
      date: '2024-01-05',
      category: 'innovation',
      tags: ['AI', 'Robotics', 'Future Tech'],
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '6 min read',
      views: 1567
    },
    {
      id: 4,
      title: 'New Environmental Standards Reshape Industrial Cleaning Practices',
      excerpt: 'Understanding the latest EPA regulations and how they impact industrial cleaning operations across different sectors.',
      content: 'Full article content would go here...',
      author: 'Mohammad Hassan',
      date: '2024-01-03',
      category: 'industry-news',
      tags: ['Regulations', 'Environment', 'Compliance'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '10 min read',
      views: 743
    },
    {
      id: 5,
      title: 'Advanced Safety Protocols for Confined Space Operations',
      excerpt: 'Essential safety measures and equipment requirements for conducting cleaning operations in confined industrial spaces.',
      content: 'Full article content would go here...',
      author: 'Dr. Sarah Mitchell',
      date: '2023-12-28',
      category: 'safety',
      tags: ['Safety', 'Confined Space', 'Protocols'],
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '7 min read',
      views: 654
    },
    {
      id: 6,
      title: 'Marine Vessel Cleaning: Challenges and Solutions in the Modern Era',
      excerpt: 'Addressing the unique challenges of marine vessel maintenance with innovative cleaning technologies and sustainable practices.',
      content: 'Full article content would go here...',
      author: 'Mohammad Hassan',
      date: '2023-12-25',
      category: 'technology',
      tags: ['Marine', 'Vessels', 'Sustainability'],
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '9 min read',
      views: 987
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = posts[0];
  const recentPosts = posts.slice(1, 4);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Industry Insights
              </span>
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed">
              Stay informed with the latest trends, technologies, and innovations in industrial cleaning and maintenance
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-12 bg-gradient-to-b from-gray-900 to-black border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-500"
              />
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full lg:w-48 bg-gray-800/50 border-gray-700 text-white">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                {categories.map(category => (
                  <SelectItem key={category.id} value={category.id} className="text-white">
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

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

      {/* Featured Article */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Featured Article
              </span>
            </h2>
            
            <Card className="glass border-cyan-500/30 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover min-h-[400px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <Badge className="absolute top-6 left-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                      Featured
                    </Badge>
                  </div>
                  
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                        {categories.find(c => c.id === featuredPost.category)?.name}
                      </Badge>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {featuredPost.views}
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User className="w-4 h-4 text-cyan-400 mr-2" />
                        <span className="text-cyan-400">{featuredPost.author}</span>
                        <span className="mx-2 text-gray-500">•</span>
                        <span className="text-gray-400">{featuredPost.readTime}</span>
                      </div>
                      
                      <div className="flex gap-3">
                        <Button variant="outline" size="sm" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20">
                          <Share2 className="w-4 h-4" />
                        </Button>
                        <Link to={`/blog/${featuredPost.id}`}>
                          <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500">
                            Read More
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Recent Articles Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Latest Articles
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our latest insights, case studies, and industry analysis
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <AnimatedSection key={post.id} delay={index * 100}>
                <Card className="group h-full glass border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-500 transform hover:scale-105 hover:-translate-y-4">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                          {categories.find(c => c.id === post.category)?.name}
                        </Badge>
                      </div>
                      
                      <div className="absolute bottom-4 right-4 flex gap-2">
                        <div className="flex items-center text-white text-xs bg-black/50 px-2 py-1 rounded">
                          <Eye className="w-3 h-3 mr-1" />
                          {post.views}
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map(tag => (
                          <Badge key={tag} variant="outline" className="text-xs border-gray-600 text-gray-400">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm">
                          <User className="w-4 h-4 text-cyan-400 mr-2" />
                          <span className="text-cyan-400">{post.author}</span>
                        </div>

                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20">
                            <Share2 className="w-3 h-3" />
                          </Button>
                          <Link to={`/blog/${post.id}`}>
                            <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500">
                              Read
                              <ArrowRight className="w-3 h-3 ml-1" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-16">
            <Button 
              variant="outline" 
              size="lg"
              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20 px-8 py-4"
            >
              Load More Articles
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <Card className="glass border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
              <CardContent className="p-12 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Stay Updated
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Subscribe to our newsletter for the latest industry insights, technical articles, and company updates
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input
                    placeholder="Enter your email"
                    className="flex-1 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-500"
                  />
                  <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 whitespace-nowrap">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Blog;
