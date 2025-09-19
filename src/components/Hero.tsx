import { Button } from "@/components/ui/button";
import { Sparkles, Download, Play, Star } from "lucide-react";
import PhoneMockup from "./PhoneMockup";

const Hero = () => {
  const handleDownload = () => {
    // Scroll to download section
    const downloadSection = document.querySelector("#download");
    downloadSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWatchDemo = () => {
    // You can add video modal functionality here
    console.log("Watch demo clicked");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/3 rounded-full blur-3xl animate-float" style={{animationDelay: "2s"}} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-white/10 via-white/5 to-transparent rounded-full blur-3xl animate-pulse-slow" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-white animate-pulse" />
              <span className="text-sm font-medium text-white/90">
                AI-Powered Photo Editor
              </span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-bold leading-none">
                <span className="block text-white animate-fade-in-up">Chaavify</span>
                <span className="block text-white/60 animate-fade-in-up" style={{animationDelay: "0.2s"}}>
                  Your Photos
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/70 max-w-2xl leading-relaxed animate-fade-in-up" style={{animationDelay: "0.4s"}}>
                Transform ordinary photos into extraordinary masterpieces with AI-powered editing tools designed for creators.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{animationDelay: "0.6s"}}>
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                onClick={handleDownload}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Free
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                onClick={handleWatchDemo}
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
            
            {/* Features */}
            <div className="flex items-center justify-center lg:justify-start gap-8 text-sm text-white/60 animate-fade-in-up" style={{animationDelay: "0.8s"}}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white/70 rounded-full animate-pulse" />
                <span>Privacy First</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse" />
                <span>Android Only</span>
              </div>
            </div>
          </div>
          
          {/* Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in-up" style={{animationDelay: "1s"}}>
            <div className="relative">
              <PhoneMockup className="animate-float" />
              
              {/* Floating UI Elements */}
              <div className="absolute -top-8 -left-8 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 animate-float" style={{animationDelay: "1s"}}>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                  <span className="text-sm text-white/80">AI Processing</span>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -right-8 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 animate-float" style={{animationDelay: "2s"}}>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-white/80" />
                  <span className="text-sm text-white/80">Enhanced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;