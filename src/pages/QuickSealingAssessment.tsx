
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
import { CheckCircle, Zap, MapPin, Clock, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const QuickSealingAssessment = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    // Emergency Information
    contactPerson: '',
    email: '',
    phone: '',
    company: '',
    location: '',
    
    // Emergency Details
    emergencyType: '',
    leakSeverity: '',
    fluidLoss: '',
    safetyRisk: '',
    downtime: '',
    
    // Technical Information
    equipmentType: '',
    leakLocation: '',
    accessMethod: '',
    materialType: '',
    pressure: '',
    temperature: '',
    fluidType: '',
    
    // Service Requirements
    responseTime: '',
    workingHours: '',
    safetyRequirements: '',
    equipmentAccess: '',
    
    // Additional Details
    problemDescription: '',
    previousAttempts: '',
    specialInstructions: ''
  });

  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quick Sealing Form Data:', formData);
    console.log('Uploaded Files:', uploadedFiles);
    
    toast({
      title: "Quick Sealing Request Submitted",
      description: "Our emergency response team will contact you immediately. Expected response time: 2-4 hours.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white border-0 px-4 py-2">
              Quick Sealing Emergency Service
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              Emergency Response
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Fast-track assessment for immediate leak sealing and emergency repairs. Our rapid response team is ready to deploy within hours.
          </p>
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg inline-block">
            <p className="text-red-700 font-semibold flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              24/7 Emergency Response Available
            </p>
          </div>
        </AnimatedSection>

        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
          {/* Emergency Contact */}
          <AnimatedSection>
            <Card className="bg-white/90 backdrop-blur-sm border-red-200/50">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-800">
                  <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                  Emergency Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="contactPerson" className="text-slate-700">Contact Person *</Label>
                    <Input
                      id="contactPerson"
                      value={formData.contactPerson}
                      onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                      className="bg-white border-red-200 focus:border-red-500"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-slate-700">Emergency Phone *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="bg-white border-red-200 focus:border-red-500"
                      placeholder="24/7 reachable number"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-slate-700">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-white border-red-200 focus:border-red-500"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-slate-700">Company</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="bg-white border-red-200 focus:border-red-500"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="location" className="text-slate-700">Exact Location *</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="bg-white border-red-200 focus:border-red-500"
                    placeholder="Include GPS coordinates if available"
                    required
                  />
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Emergency Assessment */}
          <AnimatedSection>
            <Card className="bg-white/90 backdrop-blur-sm border-orange-200/50">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-800">
                  <Zap className="w-5 h-5 mr-2 text-orange-600" />
                  Emergency Assessment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="emergencyType" className="text-slate-700">Emergency Type *</Label>
                    <Select value={formData.emergencyType} onValueChange={(value) => handleInputChange('emergencyType', value)}>
                      <SelectTrigger className="bg-white border-orange-200">
                        <SelectValue placeholder="Select emergency type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active-leak">Active Leak</SelectItem>
                        <SelectItem value="pressure-drop">Pressure Drop</SelectItem>
                        <SelectItem value="crack-propagation">Crack Propagation</SelectItem>
                        <SelectItem value="gasket-failure">Gasket Failure</SelectItem>
                        <SelectItem value="corrosion-breakthrough">Corrosion Breakthrough</SelectItem>
                        <SelectItem value="impact-damage">Impact Damage</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="leakSeverity" className="text-slate-700">Leak Severity *</Label>
                    <Select value={formData.leakSeverity} onValueChange={(value) => handleInputChange('leakSeverity', value)}>
                      <SelectTrigger className="bg-white border-orange-200">
                        <SelectValue placeholder="Select severity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="minor-seepage">Minor Seepage</SelectItem>
                        <SelectItem value="moderate-leak">Moderate Leak</SelectItem>
                        <SelectItem value="major-leak">Major Leak</SelectItem>
                        <SelectItem value="catastrophic">Catastrophic</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="fluidLoss" className="text-slate-700">Estimated Fluid Loss Rate</Label>
                    <Select value={formData.fluidLoss} onValueChange={(value) => handleInputChange('fluidLoss', value)}>
                      <SelectTrigger className="bg-white border-orange-200">
                        <SelectValue placeholder="Select loss rate" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="drops">Drops per minute</SelectItem>
                        <SelectItem value="liters-hour">Liters per hour</SelectItem>
                        <SelectItem value="liters-minute">Liters per minute</SelectItem>
                        <SelectItem value="barrels-hour">Barrels per hour</SelectItem>
                        <SelectItem value="unknown">Unknown</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="safetyRisk" className="text-slate-700">Safety Risk Level *</Label>
                    <Select value={formData.safetyRisk} onValueChange={(value) => handleInputChange('safetyRisk', value)}>
                      <SelectTrigger className="bg-white border-orange-200">
                        <SelectValue placeholder="Select risk level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low Risk</SelectItem>
                        <SelectItem value="medium">Medium Risk</SelectItem>
                        <SelectItem value="high">High Risk</SelectItem>
                        <SelectItem value="critical">Critical Risk</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="downtime" className="text-slate-700">Acceptable Downtime</Label>
                  <Select value={formData.downtime} onValueChange={(value) => handleInputChange('downtime', value)}>
                    <SelectTrigger className="bg-white border-orange-200">
                      <SelectValue placeholder="Select downtime window" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="no-downtime">No Downtime Allowed</SelectItem>
                      <SelectItem value="minimal">Minimal (< 2 hours)</SelectItem>
                      <SelectItem value="limited">Limited (2-8 hours)</SelectItem>
                      <SelectItem value="planned">Planned Shutdown OK</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Technical Details */}
          <AnimatedSection>
            <Card className="bg-white/90 backdrop-blur-sm border-blue-200/50">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-800">
                  <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                  Technical Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="equipmentType" className="text-slate-700">Equipment Type *</Label>
                    <Select value={formData.equipmentType} onValueChange={(value) => handleInputChange('equipmentType', value)}>
                      <SelectTrigger className="bg-white border-blue-200">
                        <SelectValue placeholder="Select equipment" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pipeline">Pipeline</SelectItem>
                        <SelectItem value="tank">Storage Tank</SelectItem>
                        <SelectItem value="vessel">Pressure Vessel</SelectItem>
                        <SelectItem value="pump">Pump</SelectItem>
                        <SelectItem value="valve">Valve</SelectItem>
                        <SelectItem value="flange">Flange</SelectItem>
                        <SelectItem value="heat-exchanger">Heat Exchanger</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="leakLocation" className="text-slate-700">Leak Location</Label>
                    <Select value={formData.leakLocation} onValueChange={(value) => handleInputChange('leakLocation', value)}>
                      <SelectTrigger className="bg-white border-blue-200">
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="body">Equipment Body</SelectItem>
                        <SelectItem value="weld">Weld Joint</SelectItem>
                        <SelectItem value="flange">Flange Joint</SelectItem>
                        <SelectItem value="connection">Connection Point</SelectItem>
                        <SelectItem value="gasket">Gasket Area</SelectItem>
                        <SelectItem value="valve-seat">Valve Seat</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="pressure" className="text-slate-700">Operating Pressure (PSI)</Label>
                    <Input
                      id="pressure"
                      value={formData.pressure}
                      onChange={(e) => handleInputChange('pressure', e.target.value)}
                      className="bg-white border-blue-200 focus:border-blue-500"
                      placeholder="Current operating pressure"
                    />
                  </div>
                  <div>
                    <Label htmlFor="temperature" className="text-slate-700">Operating Temperature (°C)</Label>
                    <Input
                      id="temperature"
                      value={formData.temperature}
                      onChange={(e) => handleInputChange('temperature', e.target.value)}
                      className="bg-white border-blue-200 focus:border-blue-500"
                      placeholder="Current temperature"
                    />
                  </div>
                  <div>
                    <Label htmlFor="fluidType" className="text-slate-700">Fluid Type *</Label>
                    <Select value={formData.fluidType} onValueChange={(value) => handleInputChange('fluidType', value)}>
                      <SelectTrigger className="bg-white border-blue-200">
                        <SelectValue placeholder="Select fluid" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="water">Water</SelectItem>
                        <SelectItem value="oil">Oil/Petroleum</SelectItem>
                        <SelectItem value="gas">Natural Gas</SelectItem>
                        <SelectItem value="chemical">Chemical</SelectItem>
                        <SelectItem value="acid">Acid</SelectItem>
                        <SelectItem value="steam">Steam</SelectItem>
                        <SelectItem value="hazardous">Hazardous Material</SelectItem>
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
                        <SelectItem value="unknown">Unknown</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Service Requirements */}
          <AnimatedSection>
            <Card className="bg-white/90 backdrop-blur-sm border-green-200/50">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-800">
                  <Clock className="w-5 h-5 mr-2 text-green-600" />
                  Service Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="responseTime" className="text-slate-700">Required Response Time *</Label>
                    <Select value={formData.responseTime} onValueChange={(value) => handleInputChange('responseTime', value)}>
                      <SelectTrigger className="bg-white border-green-200">
                        <SelectValue placeholder="Select response time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediate (0-2 hours)</SelectItem>
                        <SelectItem value="urgent">Urgent (2-4 hours)</SelectItem>
                        <SelectItem value="same-day">Same Day (4-8 hours)</SelectItem>
                        <SelectItem value="next-day">Next Day</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="workingHours" className="text-slate-700">Preferred Working Hours</Label>
                    <Select value={formData.workingHours} onValueChange={(value) => handleInputChange('workingHours', value)}>
                      <SelectTrigger className="bg-white border-green-200">
                        <SelectValue placeholder="Select working hours" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="24-7">24/7 Available</SelectItem>
                        <SelectItem value="business">Business Hours Only</SelectItem>
                        <SelectItem value="extended">Extended Hours (6AM-10PM)</SelectItem>
                        <SelectItem value="weekend">Weekend Available</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="equipmentAccess" className="text-slate-700">Equipment Access</Label>
                    <Select value={formData.equipmentAccess} onValueChange={(value) => handleInputChange('equipmentAccess', value)}>
                      <SelectTrigger className="bg-white border-green-200">
                        <SelectValue placeholder="Select access method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ground-level">Ground Level</SelectItem>
                        <SelectItem value="ladder">Ladder Access</SelectItem>
                        <SelectItem value="scaffolding">Scaffolding Required</SelectItem>
                        <SelectItem value="crane">Crane Required</SelectItem>
                        <SelectItem value="confined-space">Confined Space</SelectItem>
                        <SelectItem value="underwater">Underwater</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="accessMethod" className="text-slate-700">Site Access</Label>
                    <Select value={formData.accessMethod} onValueChange={(value) => handleInputChange('accessMethod', value)}>
                      <SelectTrigger className="bg-white border-green-200">
                        <SelectValue placeholder="Select site access" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vehicle">Vehicle Access</SelectItem>
                        <SelectItem value="walking">Walking Only</SelectItem>
                        <SelectItem value="boat">Boat Required</SelectItem>
                        <SelectItem value="helicopter">Helicopter Access</SelectItem>
                        <SelectItem value="restricted">Restricted Access</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="safetyRequirements" className="text-slate-700">Safety Requirements</Label>
                  <Textarea
                    id="safetyRequirements"
                    value={formData.safetyRequirements}
                    onChange={(e) => handleInputChange('safetyRequirements', e.target.value)}
                    className="bg-white border-green-200 focus:border-green-500"
                    placeholder="Special safety protocols, permits required, PPE requirements..."
                  />
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Problem Description */}
          <AnimatedSection>
            <Card className="bg-white/90 backdrop-blur-sm border-purple-200/50">
              <CardHeader>
                <CardTitle className="text-slate-800">Detailed Problem Description</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="problemDescription" className="text-slate-700">Problem Description *</Label>
                  <Textarea
                    id="problemDescription"
                    value={formData.problemDescription}
                    onChange={(e) => handleInputChange('problemDescription', e.target.value)}
                    className="bg-white border-purple-200 focus:border-purple-500 min-h-[120px]"
                    placeholder="Describe the emergency situation in detail..."
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="previousAttempts" className="text-slate-700">Previous Repair Attempts</Label>
                  <Textarea
                    id="previousAttempts"
                    value={formData.previousAttempts}
                    onChange={(e) => handleInputChange('previousAttempts', e.target.value)}
                    className="bg-white border-purple-200 focus:border-purple-500"
                    placeholder="Any temporary measures or repair attempts made..."
                  />
                </div>
                <div>
                  <Label htmlFor="specialInstructions" className="text-slate-700">Special Instructions</Label>
                  <Textarea
                    id="specialInstructions"
                    value={formData.specialInstructions}
                    onChange={(e) => handleInputChange('specialInstructions', e.target.value)}
                    className="bg-white border-purple-200 focus:border-purple-500"
                    placeholder="Any special instructions for our response team..."
                  />
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* File Upload */}
          <AnimatedSection>
            <Card className="bg-white/90 backdrop-blur-sm border-indigo-200/50">
              <CardHeader>
                <CardTitle className="text-slate-800">Emergency Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Upload photos of the leak, technical drawings, or any relevant emergency documentation
                </p>
                <FileUpload
                  onFilesChange={setUploadedFiles}
                  maxFiles={15}
                  acceptedFileTypes={['image/*', 'application/pdf']}
                />
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Submit Button */}
          <AnimatedSection>
            <Card className="bg-gradient-to-r from-red-500 to-orange-500 text-white border-0">
              <CardContent className="p-6 text-center">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 text-lg font-semibold"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Submit Emergency Request
                </Button>
                <p className="mt-4 text-red-100">
                  Emergency response team will be contacted immediately. Expected response: 2-4 hours
                </p>
                <p className="mt-2 text-sm text-red-200">
                  For critical emergencies, call our 24/7 hotline: +971 (4) 123-4567
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </form>
      </div>
    </div>
  );
};

export default QuickSealingAssessment;
