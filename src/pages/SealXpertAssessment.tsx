
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { FileUpload } from '@/components/ui/file-upload';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, FileText, MapPin, Clock, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SealXpertAssessment = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    // Project Information
    projectName: '',
    location: '',
    contactPerson: '',
    email: '',
    phone: '',
    company: '',
    
    // Technical Details
    equipmentType: '',
    problemDescription: '',
    leakageType: '',
    pressureRating: '',
    temperature: '',
    fluidType: '',
    materialType: '',
    
    // Assessment Details
    urgency: '',
    accessibilityLevel: '',
    environmentalConditions: '',
    previousRepairs: '',
    inspectionDate: '',
    
    // Additional Information
    specialRequirements: '',
    budget: '',
    timeline: ''
  });

  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    console.log('Uploaded Files:', uploadedFiles);
    
    toast({
      title: "Assessment Request Submitted",
      description: "Our SealXpert team will review your request and contact you within 24 hours.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 px-4 py-2">
              SealXpert Pro Assessment
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Smart Sealing Assessment
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Get a comprehensive assessment for your SealXpert smart sealing solution. Our experts will analyze your requirements and provide a customized implementation plan.
          </p>
        </AnimatedSection>

        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
          {/* Project Information */}
          <AnimatedSection>
            <Card className="bg-white/90 backdrop-blur-sm border-blue-200/50">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-800">
                  <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                  Project Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="projectName" className="text-slate-700">Project Name *</Label>
                    <Input
                      id="projectName"
                      value={formData.projectName}
                      onChange={(e) => handleInputChange('projectName', e.target.value)}
                      className="bg-white border-blue-200 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="location" className="text-slate-700">Location *</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      className="bg-white border-blue-200 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contactPerson" className="text-slate-700">Contact Person *</Label>
                    <Input
                      id="contactPerson"
                      value={formData.contactPerson}
                      onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                      className="bg-white border-blue-200 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-slate-700">Company</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="bg-white border-blue-200 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-slate-700">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-white border-blue-200 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-slate-700">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="bg-white border-blue-200 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Technical Details */}
          <AnimatedSection>
            <Card className="bg-white/90 backdrop-blur-sm border-blue-200/50">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-800">
                  <FileText className="w-5 h-5 mr-2 text-blue-600" />
                  Technical Specifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="equipmentType" className="text-slate-700">Equipment Type *</Label>
                    <Select value={formData.equipmentType} onValueChange={(value) => handleInputChange('equipmentType', value)}>
                      <SelectTrigger className="bg-white border-blue-200">
                        <SelectValue placeholder="Select equipment type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pipeline">Pipeline</SelectItem>
                        <SelectItem value="pressure-vessel">Pressure Vessel</SelectItem>
                        <SelectItem value="tank">Storage Tank</SelectItem>
                        <SelectItem value="heat-exchanger">Heat Exchanger</SelectItem>
                        <SelectItem value="pump">Pump System</SelectItem>
                        <SelectItem value="valve">Valve Assembly</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="leakageType" className="text-slate-700">Leakage Type *</Label>
                    <Select value={formData.leakageType} onValueChange={(value) => handleInputChange('leakageType', value)}>
                      <SelectTrigger className="bg-white border-blue-200">
                        <SelectValue placeholder="Select leakage type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pinhole">Pinhole Leak</SelectItem>
                        <SelectItem value="crack">Crack</SelectItem>
                        <SelectItem value="corrosion">Corrosion</SelectItem>
                        <SelectItem value="gasket">Gasket Failure</SelectItem>
                        <SelectItem value="weld">Weld Defect</SelectItem>
                        <SelectItem value="joint">Joint Failure</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="pressureRating" className="text-slate-700">Pressure Rating (PSI)</Label>
                    <Input
                      id="pressureRating"
                      value={formData.pressureRating}
                      onChange={(e) => handleInputChange('pressureRating', e.target.value)}
                      className="bg-white border-blue-200 focus:border-blue-500"
                      placeholder="e.g., 150, 300, 600"
                    />
                  </div>
                  <div>
                    <Label htmlFor="temperature" className="text-slate-700">Operating Temperature (°C)</Label>
                    <Input
                      id="temperature"
                      value={formData.temperature}
                      onChange={(e) => handleInputChange('temperature', e.target.value)}
                      className="bg-white border-blue-200 focus:border-blue-500"
                      placeholder="e.g., 80, 150, 250"
                    />
                  </div>
                  <div>
                    <Label htmlFor="fluidType" className="text-slate-700">Fluid Type</Label>
                    <Select value={formData.fluidType} onValueChange={(value) => handleInputChange('fluidType', value)}>
                      <SelectTrigger className="bg-white border-blue-200">
                        <SelectValue placeholder="Select fluid type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="water">Water</SelectItem>
                        <SelectItem value="oil">Oil/Petroleum</SelectItem>
                        <SelectItem value="gas">Gas</SelectItem>
                        <SelectItem value="chemical">Chemical</SelectItem>
                        <SelectItem value="steam">Steam</SelectItem>
                        <SelectItem value="acid">Acid</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="materialType" className="text-slate-700">Material Type</Label>
                    <Select value={formData.materialType} onValueChange={(value) => handleInputChange('materialType', value)}>
                      <SelectTrigger className="bg-white border-blue-200">
                        <SelectValue placeholder="Select material" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="carbon-steel">Carbon Steel</SelectItem>
                        <SelectItem value="stainless-steel">Stainless Steel</SelectItem>
                        <SelectItem value="cast-iron">Cast Iron</SelectItem>
                        <SelectItem value="aluminum">Aluminum</SelectItem>
                        <SelectItem value="pvc">PVC</SelectItem>
                        <SelectItem value="concrete">Concrete</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="problemDescription" className="text-slate-700">Problem Description *</Label>
                  <Textarea
                    id="problemDescription"
                    value={formData.problemDescription}
                    onChange={(e) => handleInputChange('problemDescription', e.target.value)}
                    className="bg-white border-blue-200 focus:border-blue-500 min-h-[100px]"
                    placeholder="Describe the issue in detail..."
                    required
                  />
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Assessment Details */}
          <AnimatedSection>
            <Card className="bg-white/90 backdrop-blur-sm border-blue-200/50">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-800">
                  <Clock className="w-5 h-5 mr-2 text-blue-600" />
                  Assessment Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="urgency" className="text-slate-700">Urgency Level *</Label>
                    <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
                      <SelectTrigger className="bg-white border-blue-200">
                        <SelectValue placeholder="Select urgency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="emergency">Emergency (24h)</SelectItem>
                        <SelectItem value="urgent">Urgent (48h)</SelectItem>
                        <SelectItem value="standard">Standard (1 week)</SelectItem>
                        <SelectItem value="planned">Planned (2+ weeks)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="accessibilityLevel" className="text-slate-700">Accessibility</Label>
                    <Select value={formData.accessibilityLevel} onValueChange={(value) => handleInputChange('accessibilityLevel', value)}>
                      <SelectTrigger className="bg-white border-blue-200">
                        <SelectValue placeholder="Select accessibility" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="easy">Easy Access</SelectItem>
                        <SelectItem value="moderate">Moderate Access</SelectItem>
                        <SelectItem value="difficult">Difficult Access</SelectItem>
                        <SelectItem value="confined">Confined Space</SelectItem>
                        <SelectItem value="underwater">Underwater</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="inspectionDate" className="text-slate-700">Preferred Inspection Date</Label>
                    <Input
                      id="inspectionDate"
                      type="date"
                      value={formData.inspectionDate}
                      onChange={(e) => handleInputChange('inspectionDate', e.target.value)}
                      className="bg-white border-blue-200 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="environmentalConditions" className="text-slate-700">Environmental Conditions</Label>
                    <Textarea
                      id="environmentalConditions"
                      value={formData.environmentalConditions}
                      onChange={(e) => handleInputChange('environmentalConditions', e.target.value)}
                      className="bg-white border-blue-200 focus:border-blue-500"
                      placeholder="Weather, safety considerations, special conditions..."
                    />
                  </div>
                  <div>
                    <Label htmlFor="previousRepairs" className="text-slate-700">Previous Repairs</Label>
                    <Textarea
                      id="previousRepairs"
                      value={formData.previousRepairs}
                      onChange={(e) => handleInputChange('previousRepairs', e.target.value)}
                      className="bg-white border-blue-200 focus:border-blue-500"
                      placeholder="Details of any previous repair attempts..."
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* File Upload */}
          <AnimatedSection>
            <Card className="bg-white/90 backdrop-blur-sm border-blue-200/50">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-800">
                  <FileText className="w-5 h-5 mr-2 text-blue-600" />
                  Supporting Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Upload photos, drawings, specifications, or any other relevant documents (PDF, JPG, PNG)
                </p>
                <FileUpload
                  onFilesChange={setUploadedFiles}
                  maxFiles={10}
                  acceptedFileTypes={['image/*', 'application/pdf']}
                />
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Additional Information */}
          <AnimatedSection>
            <Card className="bg-white/90 backdrop-blur-sm border-blue-200/50">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-800">
                  <AlertTriangle className="w-5 h-5 mr-2 text-blue-600" />
                  Additional Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="specialRequirements" className="text-slate-700">Special Requirements</Label>
                  <Textarea
                    id="specialRequirements"
                    value={formData.specialRequirements}
                    onChange={(e) => handleInputChange('specialRequirements', e.target.value)}
                    className="bg-white border-blue-200 focus:border-blue-500"
                    placeholder="Safety requirements, certifications, special procedures..."
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="budget" className="text-slate-700">Budget Range</Label>
                    <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                      <SelectTrigger className="bg-white border-blue-200">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-10k">Under $10,000</SelectItem>
                        <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="over-100k">Over $100,000</SelectItem>
                        <SelectItem value="discuss">Prefer to discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="timeline" className="text-slate-700">Project Timeline</Label>
                    <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                      <SelectTrigger className="bg-white border-blue-200">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediate (within days)</SelectItem>
                        <SelectItem value="1-2weeks">1-2 weeks</SelectItem>
                        <SelectItem value="1month">Within 1 month</SelectItem>
                        <SelectItem value="3months">Within 3 months</SelectItem>
                        <SelectItem value="6months">Within 6 months</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Submit Button */}
          <AnimatedSection>
            <Card className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0">
              <CardContent className="p-6 text-center">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Submit Assessment Request
                </Button>
                <p className="mt-4 text-blue-100">
                  Our SealXpert experts will review your submission and contact you within 24 hours
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </form>
      </div>
    </div>
  );
};

export default SealXpertAssessment;
