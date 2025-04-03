
import { 
  Code, 
  Workflow, 
  LineChart, 
  FileCode, 
  MonitorSmartphone,
  Calculator
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const courses = [
  {
    id: 1,
    title: "Python Programming",
    description: "Learn Python fundamentals to advanced concepts including data structures, OOP, web frameworks and more.",
    icon: <Code className="text-skyblue w-10 h-10" />,
    duration: "8 Weeks",
    level: "Beginner to Advanced"
  },
  {
    id: 2,
    title: "Java Development",
    description: "Master Java programming with core concepts, Spring framework, database integration and enterprise development.",
    icon: <FileCode className="text-skyblue w-10 h-10" />,
    duration: "10 Weeks",
    level: "Beginner to Advanced"
  },
  {
    id: 3,
    title: "Full Stack Development",
    description: "Comprehensive training in both frontend and backend technologies including React, Node.js, databases and deployment.",
    icon: <Workflow className="text-skyblue w-10 h-10" />,
    duration: "16 Weeks",
    level: "Intermediate"
  },
  {
    id: 4,
    title: "Digital Marketing",
    description: "Learn SEO, social media marketing, email campaigns, content marketing, PPC advertising and analytics.",
    icon: <LineChart className="text-skyblue w-10 h-10" />,
    duration: "8 Weeks",
    level: "Beginner to Intermediate"
  },
  {
    id: 5,
    title: "MS Office Suite",
    description: "Master Microsoft Word, Excel, PowerPoint, and Outlook for professional document management and analysis.",
    icon: <MonitorSmartphone className="text-skyblue w-10 h-10" />,
    duration: "6 Weeks",
    level: "Beginner to Intermediate"
  },
  {
    id: 6,
    title: "Tally & Accounting",
    description: "Learn financial accounting, GST, inventory management and payroll using Tally software.",
    icon: <Calculator className="text-skyblue w-10 h-10" />,
    duration: "8 Weeks",
    level: "Beginner to Intermediate"
  }
];

const CoursesSection = () => {
  return (
    <section id="courses" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Our Professional <span className="text-skyblue">Courses</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Gain industry-relevant skills with our comprehensive and hands-on training programs designed by experts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="card-hover border border-gray-100">
              <CardHeader>
                <div className="mb-4">
                  {course.icon}
                </div>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Duration: {course.duration}</span>
                  <span>Level: {course.level}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-skyblue hover:bg-skyblue/90 text-white">Course Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="btn-primary">View All Courses</Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
