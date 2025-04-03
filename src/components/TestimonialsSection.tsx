
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Software Developer",
    quote: "The Python course at Datapro Institution was exactly what I needed to transition into development. The hands-on approach and real-world projects helped me secure a job within two months of completing the course.",
    avatar: "/placeholder.svg",
    stars: 5
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Digital Marketing Specialist",
    quote: "I enrolled in the Digital Marketing course with no prior experience in the field. The comprehensive curriculum and supportive instructors helped me understand complex concepts easily.",
    avatar: "/placeholder.svg",
    stars: 5
  },
  {
    id: 3,
    name: "Karthik Reddy",
    role: "Full Stack Developer",
    quote: "The Full Stack Development program exceeded my expectations. The course structure covered everything from basics to advanced topics, and the placement assistance was incredibly helpful.",
    avatar: "/placeholder.svg",
    stars: 4
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 card-hover">
      <div className="flex gap-4 items-center mb-4">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-medium text-gray-800">{testimonial.name}</h4>
          <p className="text-gray-500 text-sm">{testimonial.role}</p>
        </div>
      </div>
      
      <div className="mb-4 flex">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-4 w-4 ${i < testimonial.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      
      <p className="text-gray-600 italic">"{testimonial.quote}"</p>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">What Our <span className="text-skyblue">Students Say</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our alumni about their learning experience and career advancements after completing our courses.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
