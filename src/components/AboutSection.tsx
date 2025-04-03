
import { Check } from 'lucide-react';
import { Button } from './ui/button';

const AboutSection = () => {
  const features = [
    "Industry-experienced instructors",
    "Hands-on practical training",
    "Small batch sizes for personalized attention",
    "Job placement assistance",
    "Flexible timing options",
    "Industry-recognized certification"
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="bg-skyblue/30 absolute -bottom-6 -right-6 w-full h-full rounded-lg"></div>
              <img 
                src="/placeholder.svg" 
                alt="About Datapro Institution" 
                className="w-full h-auto rounded-lg shadow-lg relative z-10"
              />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              About <span className="text-skyblue">Datapro Institution</span>
            </h2>
            
            <p className="text-gray-600 mb-6">
              Datapro Institution is a premier IT and Software Training center located in NAD, Gopalapatnam, Pendurthi. 
              Since our establishment, we have been dedicated to providing high-quality, industry-relevant training to 
              students and professionals looking to enhance their technical skills and advance their careers.
            </p>
            
            <p className="text-gray-600 mb-6">
              Our mission is to bridge the gap between academic education and industry requirements by offering 
              practical, hands-on training programs designed by industry experts. We focus on building both technical 
              expertise and soft skills essential for professional success.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="text-skyblue h-5 w-5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button className="btn-primary">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
