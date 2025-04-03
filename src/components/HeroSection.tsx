
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-white to-blue-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
              Launch Your <span className="text-skyblue">Tech Career</span> with Datapro Institution
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              Professional IT & Software Training Institute in NAD, Gopalapatnam, Pendurthi 
              offering industry-relevant courses taught by experienced professionals.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary">Explore Courses</Button>
              <Button variant="outline" className="border-skyblue text-skyblue hover:bg-skyblue hover:text-white">
                Contact Us
              </Button>
            </div>
            
            <div className="mt-8 bg-white p-4 rounded-lg shadow-md flex flex-wrap justify-center md:justify-start gap-6">
              <div className="text-center">
                <p className="font-bold text-2xl text-skyblue">12+</p>
                <p className="text-sm text-gray-600">Courses</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-2xl text-skyblue">500+</p>
                <p className="text-sm text-gray-600">Students Trained</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-2xl text-skyblue">95%</p>
                <p className="text-sm text-gray-600">Success Rate</p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="bg-skyblue/20 absolute top-0 right-0 w-64 h-64 rounded-full -z-10 blur-3xl"></div>
              <img 
                src="/placeholder.svg" 
                alt="IT Training" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-5 -left-5 bg-white p-3 rounded-lg shadow-lg">
                <p className="text-sm font-medium text-gray-800">Trusted by top companies</p>
                <div className="flex gap-2 mt-1">
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
