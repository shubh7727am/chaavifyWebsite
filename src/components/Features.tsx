import { Card } from "@/components/ui/card";
import { Wand2, Zap, Shield, Smartphone, Palette, Camera, Brain, Layers, Sparkles } from "lucide-react";
import PhoneMockup from "./PhoneMockup";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Magic Tools",
      description: "Intelligent photo enhancement with one-tap transformations using advanced machine learning algorithms.",
      highlight: "Smart"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process images in seconds with optimized AI algorithms that deliver professional results instantly.",
      highlight: "Fast"
    },
    {
      icon: Shield,
      title: "Privacy Protected",
      description: "Your photos stay private. All processing happens locally on your device with zero data collection.",
      highlight: "Secure"
    },
    {
      icon: Layers,
      title: "Advanced Filters",
      description: "Access hundreds of AI-generated filters and effects to match any mood or creative style.",
      highlight: "Creative"
    }
  ];

  const additionalFeatures = [
    { icon: Smartphone, title: "Mobile First", description: "Optimized for touch" },
    { icon: Palette, title: "Color Grading", description: "Professional tools" },
    { icon: Camera, title: "Smart Enhance", description: "Auto corrections" },
    { icon: Wand2, title: "One-Tap Magic", description: "Instant results" }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: "3s"}} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
            <Sparkles className="h-4 w-4 text-white" />
            <span className="text-sm font-medium text-white/90">Powered by AI</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 text-white">
            Intelligent
            <span className="block text-white/60">Features</span>
          </h2>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Experience the future of photo editing with cutting-edge AI that understands 
            your creative vision and brings it to life effortlessly.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          {/* Features List */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group p-8 bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-sm transform hover:scale-105"
              >
                <div className="flex items-start gap-6">
                  <div className="shrink-0 p-4 rounded-2xl bg-white/10 group-hover:bg-white/20 transition-all duration-300 transform group-hover:scale-110">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-bold text-white group-hover:text-white transition-colors">
                        {feature.title}
                      </h3>
                      <span className="px-3 py-1 text-xs font-semibold bg-white/20 text-white rounded-full">
                        {feature.highlight}
                      </span>
                    </div>
                    <p className="text-white/70 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Phone Mockup */}
          <div className="relative flex justify-center">
            <PhoneMockup className="animate-float" />
          </div>
        </div>

        {/* Additional Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalFeatures.map((feature, index) => (
            <Card 
              key={index}
              className="group p-6 bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm text-center transform hover:scale-105"
            >
              <div className="inline-flex p-4 rounded-2xl bg-white/10 group-hover:bg-white/20 transition-all duration-300 mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
              <p className="text-white/60 text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;