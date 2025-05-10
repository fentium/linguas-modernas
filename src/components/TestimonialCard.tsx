
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TestimonialCardProps {
  name: string;
  role: string;
  testimonial: string;
  avatarSrc?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, testimonial, avatarSrc }) => {
  // Get initials from name
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);
    
  return (
    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg border-2">
      <CardContent className="pt-6 px-6 flex flex-col h-full">
        <div className="mb-4 text-amber-500">
          {/* Star rating */}
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i} 
                className="w-5 h-5 fill-current" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
        </div>
        
        <blockquote className="flex-grow mb-6 italic text-gray-600">
          "{testimonial}"
        </blockquote>
        
        <div className="flex items-center mt-auto">
          <Avatar className="mr-3 h-10 w-10">
            <AvatarImage src={avatarSrc} />
            <AvatarFallback className="bg-lm-blue text-white">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold">{name}</div>
            <div className="text-sm text-gray-500">{role}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
