
import React from 'react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Download, Eye, FileText, Wrench, Droplets, Factory } from 'lucide-react';
import { catalogCategories as categoriesContent, catalogs } from '@/content/catalogs';
import { Link } from 'react-router-dom';

const Catalog = () => {
  const IconMap = {
    Wrench,
    Droplets,
    Factory,
  } as const;

  const catalogCategories = categoriesContent.map((c) => ({
    ...c,
    catalogs: catalogs.filter((k) => k.categoryId === c.id),
  }));

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Technical Catalogs
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional product documentation and technical specifications for REFSOL1 solutions
            </p>
            <div className="flex justify-center">
              <FileText className="w-16 h-16 text-cyan-400" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Catalog Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {catalogCategories.map((category, categoryIndex) => (
            <AnimatedSection
              key={category.id}
              animation="fade-up"
              delay={categoryIndex * 200}
              className="mb-16"
            >
              <div className="mb-12 text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-500/30">
                    {(() => {
                      const Icon = IconMap[category.iconName as keyof typeof IconMap] || Wrench;
                      return <Icon className="w-12 h-12 text-cyan-400" />;
                    })()}
                  </div>
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">{category.title}</h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.catalogs.map((catalog, catalogIndex) => (
                  <AnimatedSection
                    key={catalog.slug}
                    animation="scale"
                    delay={300 + catalogIndex * 150}
                    className="group"
                  >
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-cyan-500/20 overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
                      {/* Catalog Preview */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={catalog.preview}
                          alt={catalog.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                        <div className="absolute top-4 right-4 bg-cyan-500/20 backdrop-blur-sm px-3 py-1 rounded-full">
                          <span className="text-cyan-400 text-sm font-medium">{catalog.pages}</span>
                        </div>
                      </div>

                      {/* Catalog Info */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                          {catalog.name}
                        </h3>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {catalog.description}
                        </p>
                        
                        <div className="flex items-center justify-between mb-6">
                          <span className="text-sm text-gray-400">Size: {catalog.size}</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            <span className="text-sm text-green-400">Available</span>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-3">
                          <Button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white group/btn" asChild>
                            <Link to={`/catalog/${catalog.slug}`}>
                              <Eye className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                              View Details
                            </Link>
                          </Button>
                          <Button variant="outline" className="flex-1 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black group/btn" asChild>
                            <a href={catalog.pdfUrl || '#'} download>
                              <Download className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                              Download
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <AnimatedSection animation="fade-up" className="py-16 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need Custom Documentation?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our technical team for customized product specifications and application guides
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4"
          >
            Contact Technical Support
          </Button>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Catalog;
