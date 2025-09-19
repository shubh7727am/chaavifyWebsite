import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download as DownloadIcon, Smartphone, ArrowRight, Shield, Zap, Sparkles } from "lucide-react";
import PhoneMockup from "./PhoneMockup";

const Download = () => {
  return (
    <section id="download" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: "2s"}} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 text-white">
            Download
            <span className="block text-white/60">Chaavify</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Transform your photos with AI magic. Available exclusively for Android devices.
          </p>
        </div>

        {/* Main Download Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Download Card */}
          <div className="space-y-8">
            {/* Android Download */}
            <Card className="group p-10 bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-sm transform hover:scale-105">
              <div className="text-center space-y-6">
                <div className="inline-flex p-6 rounded-3xl bg-white/10 group-hover:bg-white/20 transition-all duration-300">
                  <Smartphone className="w-12 h-12 text-white" />
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold text-white mb-3">Google Play Store</h3>
                  <p className="text-white/70 text-lg mb-6">
                    Full-featured Android app with advanced AI processing and local photo editing
                  </p>
                </div>
                
                <Button 
                  size="lg" 
                  className="bg-white text-black hover:bg-white/90 transition-all duration-300 group-hover:scale-105 w-full text-lg py-6"
                >
                  <DownloadIcon className="w-6 h-6 mr-3" />
                  Download for Android
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Button>
                
                <p className="text-sm text-white/50">
                  Compatible with Android 7.0 and above
                </p>
              </div>
            </Card>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="p-4 bg-white/5 border-white/10 backdrop-blur-sm text-center">
                <div className="inline-flex p-3 rounded-xl bg-white/10 mb-3">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">AI-Powered</h4>
                <p className="text-xs text-white/60">Smart editing</p>
              </Card>
              
              <Card className="p-4 bg-white/5 border-white/10 backdrop-blur-sm text-center">
                <div className="inline-flex p-3 rounded-xl bg-white/10 mb-3">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">Private</h4>
                <p className="text-xs text-white/60">Local processing</p>
              </Card>
              
              <Card className="p-4 bg-white/5 border-white/10 backdrop-blur-sm text-center">
                <div className="inline-flex p-3 rounded-xl bg-white/10 mb-3">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">Fast</h4>
                <p className="text-xs text-white/60">Instant results</p>
              </Card>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative flex justify-center">
            <PhoneMockup className="animate-float" />
          </div>
        </div>

        {/* Why Android Only */}
        <div className="max-w-3xl mx-auto text-center">
          <Card className="p-8 bg-white/5 border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Why Android Only?</h3>
            <p className="text-white/70 leading-relaxed">
              We're focusing on delivering the best possible experience for Android users first. 
              Our AI algorithms are optimized specifically for Android devices to ensure maximum 
              performance and battery efficiency while maintaining complete privacy through local processing.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Download;