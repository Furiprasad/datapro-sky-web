
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from './ui/use-toast';

const ContactInfo = ({ icon, title, details }: { icon: React.ReactNode; title: string; details: string | React.ReactNode }) => {
  return (
    <div className="flex gap-4 mb-6">
      <div className="h-12 w-12 rounded-full bg-skyblue/10 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-gray-800">{title}</h4>
        <div className="text-gray-600">{details}</div>
      </div>
    </div>
  );
};

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation would go here
    
    toast({
      title: "Form Submitted!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Get In <span className="text-skyblue">Touch</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our courses? Reach out to us and our team will assist you with all the information you need.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            
            <ContactInfo 
              icon={<MapPin className="h-6 w-6 text-skyblue" />}
              title="Our Location"
              details="NAD, Gopalapatnam, Pendurthi, Visakhapatnam, Andhra Pradesh"
            />
            
            <ContactInfo 
              icon={<Phone className="h-6 w-6 text-skyblue" />}
              title="Phone Number"
              details="+91 9876543210"
            />
            
            <ContactInfo 
              icon={<Mail className="h-6 w-6 text-skyblue" />}
              title="Email Address"
              details="info@dataproinstitution.com"
            />
            
            <ContactInfo 
              icon={<Clock className="h-6 w-6 text-skyblue" />}
              title="Working Hours"
              details={
                <>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 1:00 PM</p>
                </>
              }
            />
            
            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <h4 className="font-medium mb-2">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="h-10 w-10 rounded-full bg-skyblue flex items-center justify-center text-white">
                  <span className="sr-only">Facebook</span>
                  F
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-skyblue flex items-center justify-center text-white">
                  <span className="sr-only">Instagram</span>
                  I
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-skyblue flex items-center justify-center text-white">
                  <span className="sr-only">Twitter</span>
                  T
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-skyblue flex items-center justify-center text-white">
                  <span className="sr-only">LinkedIn</span>
                  L
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className="w-full"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    className="w-full"
                    rows={4}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full btn-primary">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
