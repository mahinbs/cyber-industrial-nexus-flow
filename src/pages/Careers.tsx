
import React, { useState } from 'react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Clock, DollarSign, Users, Briefcase, Upload, Send, Star } from 'lucide-react';

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'Market-leading salaries with performance bonuses',
      icon: DollarSign
    },
    {
      title: 'Global Opportunities',
      description: 'Work across 50+ countries with international teams',
      icon: MapPin
    },
    {
      title: 'Professional Development',
      description: 'Continuous learning and certification programs',
      icon: Star
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible schedules and comprehensive benefits',
      icon: Clock
    }
  ];

  const jobs = [
    {
      id: 1,
      title: 'Senior Composite Repair Engineer',
      department: 'Engineering',
      location: 'Dubai, UAE',
      type: 'Full-time',
      experience: '5+ years',
      salary: 'AED 15,000 - 25,000',
      description: 'Lead composite repair projects for critical industrial infrastructure. Design and implement advanced carbon fiber solutions for oil & gas facilities.',
      requirements: [
        'Bachelor\'s degree in Mechanical/Chemical Engineering',
        '5+ years in composite repair or similar field',
        'API 653, NACE certification preferred',
        'Experience with offshore/marine applications',
        'Strong project management skills'
      ],
      responsibilities: [
        'Design composite repair solutions for pipelines and tanks',
        'Lead field repair teams and ensure quality standards',
        'Develop new repair methodologies and procedures',
        'Client consultation and technical presentations',
        'Mentoring junior engineers and technicians'
      ]
    },
    {
      id: 2,
      title: 'Industrial Cleaning Specialist',
      department: 'Operations',
      location: 'Houston, USA',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$65,000 - $85,000',
      description: 'Execute complex industrial cleaning operations using advanced hydroblasting and chemical cleaning techniques in petrochemical facilities.',
      requirements: [
        'High school diploma or equivalent',
        '3+ years in industrial cleaning',
        'OSHA 30, confined space entry certification',
        'Experience with hydroblasting equipment',
        'Ability to work in challenging environments'
      ],
      responsibilities: [
        'Perform tank cleaning and hydroblasting operations',
        'Operate high-pressure cleaning equipment safely',
        'Ensure compliance with HSE procedures',
        'Maintain equipment and prepare reports',
        'Train new team members on safety protocols'
      ]
    },
    {
      id: 3,
      title: 'Marine Services Technician',
      department: 'Marine Division',
      location: 'Singapore',
      type: 'Full-time',
      experience: '4+ years',
      salary: 'SGD 4,500 - 6,500',
      description: 'Provide underwater repair and maintenance services for marine vessels and offshore structures using advanced diving and repair techniques.',
      requirements: [
        'Commercial diving certification',
        '4+ years marine/underwater experience',
        'Underwater welding qualification',
        'IMCA diving supervisor certification preferred',
        'Medical fitness for diving operations'
      ],
      responsibilities: [
        'Underwater inspection and repair of marine structures',
        'Hull cleaning and maintenance operations',
        'Underwater welding and cutting',
        'Safety supervision of diving operations',
        'Equipment maintenance and safety checks'
      ]
    },
    {
      id: 4,
      title: 'HSE Manager',
      department: 'Health & Safety',
      location: 'Dubai, UAE',
      type: 'Full-time',
      experience: '8+ years',
      salary: 'AED 20,000 - 30,000',
      description: 'Develop and implement comprehensive health, safety, and environmental programs across all operations while ensuring regulatory compliance.',
      requirements: [
        'Bachelor\'s degree in Environmental/Safety Engineering',
        '8+ years HSE management experience',
        'NEBOSH Diploma, ISO 14001 Lead Auditor',
        'Oil & gas industry experience essential',
        'Strong leadership and communication skills'
      ],
      responsibilities: [
        'Develop HSE policies and procedures',
        'Conduct risk assessments and safety audits',
        'Lead incident investigations and reporting',
        'Training program development and delivery',
        'Regulatory compliance and liaison'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Join Our Team
              </span>
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed mb-8">
              Build your career with the world's leading industrial solutions company. 
              Work on cutting-edge projects across the globe.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-8 py-4 text-lg"
            >
              View Open Positions
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Why Choose Us
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join a company that values innovation, excellence, and the professional growth of every team member
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} delay={index * 150}>
                <Card className="group h-full glass border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-500 transform hover:scale-105 hover:-translate-y-4">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Open Positions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover exciting career opportunities in industrial solutions and join our global team
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Job Cards */}
            <div className="lg:col-span-2 space-y-6">
              {jobs.map((job, index) => (
                <AnimatedSection key={job.id} delay={index * 100}>
                  <Card 
                    className={`group cursor-pointer transition-all duration-500 ${
                      selectedJob === job.id 
                        ? 'glass border-cyan-400 bg-cyan-500/5' 
                        : 'glass border-cyan-500/30 hover:border-cyan-400/60'
                    } transform hover:scale-102`}
                    onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                              {job.department}
                            </Badge>
                            <Badge variant="outline" className="border-gray-600 text-gray-300">
                              {job.type}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-cyan-400 font-semibold text-lg">{job.salary}</p>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-4">{job.description}</p>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {job.experience}
                        </div>
                      </div>

                      {selectedJob === job.id && (
                        <div className="mt-6 pt-6 border-t border-gray-700 animate-fade-in">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-white mb-3">Requirements:</h4>
                              <ul className="space-y-2">
                                {job.requirements.map((req, idx) => (
                                  <li key={idx} className="text-gray-300 text-sm flex items-start">
                                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                                    {req}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-white mb-3">Responsibilities:</h4>
                              <ul className="space-y-2">
                                {job.responsibilities.map((resp, idx) => (
                                  <li key={idx} className="text-gray-300 text-sm flex items-start">
                                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                                    {resp}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          
                          <div className="mt-6 flex gap-3">
                            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500">
                              Apply Now
                            </Button>
                            <Button variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20">
                              Save Job
                            </Button>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>

            {/* Application Form */}
            <div className="lg:col-span-1">
              <AnimatedSection delay={300}>
                <Card className="sticky top-8 glass border-cyan-500/30">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-6">Quick Apply</h3>
                    
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                        <Input
                          className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-500"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                        <Input
                          type="email"
                          className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-500"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                        <Input
                          type="tel"
                          className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-500"
                          placeholder="+971 50 123 4567"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Position of Interest</label>
                        <Select>
                          <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white">
                            <SelectValue placeholder="Select position" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-800 border-gray-700">
                            {jobs.map(job => (
                              <SelectItem key={job.id} value={job.title} className="text-white">
                                {job.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Cover Letter</label>
                        <Textarea
                          rows={3}
                          className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-500"
                          placeholder="Tell us why you're interested..."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Resume/CV</label>
                        <div className="border-2 border-dashed border-gray-700 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-colors">
                          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-400">Drop your file here or click to browse</p>
                          <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX (max 5MB)</p>
                        </div>
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500"
                      >
                        Submit Application
                        <Send className="w-4 h-4 ml-2" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Our Culture
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Innovation, collaboration, and excellence drive everything we do
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection>
              <Card className="h-full glass border-cyan-500/30">
                <CardContent className="p-0">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Team Collaboration"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
                    <p className="text-gray-300">
                      We encourage creative thinking and provide resources for groundbreaking solutions
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Card className="h-full glass border-cyan-500/30">
                <CardContent className="p-0">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Professional Development"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">Growth</h3>
                    <p className="text-gray-300">
                      Continuous learning opportunities and clear career advancement paths
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <Card className="h-full glass border-cyan-500/30">
                <CardContent className="p-0">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Global Team"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">Diversity</h3>
                    <p className="text-gray-300">
                      A global team that values different perspectives and backgrounds
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
