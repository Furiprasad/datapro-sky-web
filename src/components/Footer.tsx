
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Datapro<span className="text-skyblue">Institution</span></h3>
            <p className="text-gray-400 mb-4">
              Premier IT & Software Training Institute providing industry-relevant courses and career-oriented learning.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-skyblue transition-colors">
                <span className="sr-only">Facebook</span>
                F
              </a>
              <a href="#" className="text-gray-400 hover:text-skyblue transition-colors">
                <span className="sr-only">Twitter</span>
                T
              </a>
              <a href="#" className="text-gray-400 hover:text-skyblue transition-colors">
                <span className="sr-only">Instagram</span>
                I
              </a>
              <a href="#" className="text-gray-400 hover:text-skyblue transition-colors">
                <span className="sr-only">LinkedIn</span>
                L
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Courses</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-skyblue transition-colors">Python Programming</a></li>
              <li><a href="#" className="text-gray-400 hover:text-skyblue transition-colors">Java Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-skyblue transition-colors">Full Stack Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-skyblue transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-skyblue transition-colors">MS Office Suite</a></li>
              <li><a href="#" className="text-gray-400 hover:text-skyblue transition-colors">Tally & Accounting</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-skyblue transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-skyblue transition-colors">About Us</a></li>
              <li><a href="#courses" className="text-gray-400 hover:text-skyblue transition-colors">Our Courses</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-skyblue transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-skyblue transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-skyblue transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-skyblue flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">NAD, Gopalapatnam, Pendurthi, Visakhapatnam, Andhra Pradesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-skyblue flex-shrink-0" />
                <span className="text-gray-400">+91 9876543210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-skyblue flex-shrink-0" />
                <span className="text-gray-400">info@dataproinstitution.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Datapro Institution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
