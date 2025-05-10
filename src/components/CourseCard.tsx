
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CourseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, icon, features }) => {
  return (
    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg border-2">
      <CardHeader className="pb-2">
        <div className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-full mb-4 text-lm-blue">
          {icon}
        </div>
        <CardTitle className="text-lm-blue text-xl">{title}</CardTitle>
        <CardDescription className="text-gray-500">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg 
                className="text-lm-green mr-2 mt-1 flex-shrink-0" 
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M13.25 4.25L6 11.5L2.75 8.25" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full border-lm-blue text-lm-blue hover:bg-lm-blue hover:text-white">
          Saiba Mais
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
