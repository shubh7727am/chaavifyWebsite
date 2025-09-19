import { useState, useEffect } from "react";
import phone1 from "@/assets/phone.jpeg";
import phone2 from "@/assets/phone2.jpeg";
import phone3 from "@/assets/phone3.jpeg";

interface PhoneMockupProps {
  screenshots?: string[];
  className?: string;
}

const PhoneMockup = ({ screenshots = [], className = "" }: PhoneMockupProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Default screenshots from your app
  const defaultScreenshots = [phone1, phone2, phone3];
  const displayScreenshots = screenshots.length > 0 ? screenshots : defaultScreenshots;

  // Auto-rotate screenshots
  useEffect(() => {
    if (displayScreenshots.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % displayScreenshots.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [displayScreenshots.length]);

  return (
    <div className={`relative ${className}`}>
      {/* Phone Frame */}
      <div className="relative mx-auto w-[280px] h-[560px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
        {/* Screen Bezel */}
        <div className="relative w-full h-full bg-black rounded-[2.5rem] overflow-hidden">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10" />
          
          {/* Screen Content */}
          <div className="relative w-full h-full bg-black rounded-[2.5rem] overflow-hidden">
            {displayScreenshots.map((screenshot, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 transform ${
                  index === currentIndex
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
              >
                <img
                  src={screenshot}
                  alt={`App screenshot ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          {/* Screen Reflection */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
        </div>
        
        {/* Phone Highlights */}
        <div className="absolute top-4 left-4 w-2 h-8 bg-gray-700 rounded-full" />
        <div className="absolute top-16 left-4 w-2 h-12 bg-gray-700 rounded-full" />
        <div className="absolute top-32 left-4 w-2 h-12 bg-gray-700 rounded-full" />
        <div className="absolute top-20 right-4 w-2 h-16 bg-gray-700 rounded-full" />
      </div>
      
      {/* Floating Animation Elements */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/10 rounded-full blur-sm animate-pulse" />
      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/5 rounded-full blur-sm animate-pulse" style={{ animationDelay: "1s" }} />
      
      {/* Screenshot Indicators */}
      {displayScreenshots.length > 1 && (
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {displayScreenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PhoneMockup;