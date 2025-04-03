
import { Button } from "./ui/button";

const CtaSection = () => {
  return (
    <section className="py-16 bg-skyblue">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl">
            Take the first step towards your new career path. Enroll in one of our courses and get the skills 
            employers are looking for. Our next batch starts soon.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-white text-skyblue hover:bg-white/90">Enroll Now</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Request Information
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
