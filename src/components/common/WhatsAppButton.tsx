
import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [service, setService] = useState('');
  const [name, setName] = useState('');

  const services = [
    'Composite Repair',
    'Industrial Cleaning',
    'Tank Cleaning',
    'Emergency Service',
    'Marine Services',
    'General Inquiry'
  ];

  const handleSendMessage = () => {
    const whatsappMessage = `Hi! I'm interested in your services.
    
Name: ${name}
Service: ${service}
Message: ${message}`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/971412345677?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
    setMessage('');
    setService('');
    setName('');
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-110"
        >
          {isOpen ? (
            <X className="w-8 h-8 text-white" />
          ) : (
            <MessageCircle className="w-8 h-8 text-white" />
          )}
        </Button>
      </div>

      {/* WhatsApp Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 animate-slide-up">
          <Card className="glass border-green-500/30 shadow-2xl">
            <CardContent className="p-0">
              {/* Header */}
              <div className="bg-green-500 p-4 rounded-t-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                    <MessageCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Industrial Solutions</h4>
                    <p className="text-green-100 text-sm">We reply immediately</p>
                  </div>
                </div>
              </div>

              {/* Chat Form */}
              <div className="p-4 space-y-4">
                <div>
                  <p className="text-white mb-4">
                    Hi there! 👋 How can we help you today?
                  </p>
                </div>

                <div>
                  <Input
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                  />
                </div>

                <div>
                  <Select value={service} onValueChange={setService}>
                    <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white">
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      {services.map(svc => (
                        <SelectItem key={svc} value={svc} className="text-white">
                          {svc}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Textarea
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                  />
                </div>

                <Button
                  onClick={handleSendMessage}
                  disabled={!name || !message}
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>

                <p className="text-xs text-gray-400 text-center">
                  By sending a message, you agree to our Terms of Service
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};
