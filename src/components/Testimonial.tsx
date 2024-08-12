import React, { useState } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Norma',
    role: 'CEO',
    content: 'Lorem ipsum dolor sit amet consectetur. In enim cursus odio scelerisque. Id leo urna velit magna mattis id tellus nunc consectetur. Augue lectus nulla ullamcorper amet.',
    image: '/path-to-norma-image.jpg',
  },

];

const TestimonialSlider: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4">Testimonials</h2>
      <p className="text-center text-gray-600 mb-8">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
      </p>
      <div className="flex items-center">
        <button onClick={prevTestimonial} className="text-2xl mr-4">&lt;</button>
        <div className="flex-1">
          <div className="flex items-center mb-4">
            <Image
              src={testimonials[currentTestimonial].image}
              alt={testimonials[currentTestimonial].name}
              width={64}
              height={64}
              className="rounded-full mr-4"
            />
            <div>
              <h3 className="font-bold">{testimonials[currentTestimonial].name}</h3>
              <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
            </div>
          </div>
          <p className="text-gray-700">{testimonials[currentTestimonial].content}</p>
        </div>
        <button onClick={nextTestimonial} className="text-2xl ml-4">&gt;</button>
      </div>
      <div className="flex justify-center mt-4">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${
              index === currentTestimonial ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;