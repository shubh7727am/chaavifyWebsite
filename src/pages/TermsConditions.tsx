import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, FileText, Scale, AlertTriangle, Users, Smartphone, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
                <Scale className="h-4 w-4 text-white" />
                <span className="text-sm font-medium text-white/90">Legal Terms</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
                Terms & Conditions
              </h1>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Please read these terms carefully before using Chaavify.
              </p>
              <p className="text-sm text-white/50 mt-4">
                Last updated: December 2024
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Acceptance */}
            <Card className="p-8 bg-white/5 border-white/10 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/10">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Acceptance of Terms</h2>
                </div>
              </div>
              <div className="text-white/70 space-y-4">
                <p>
                  By downloading, installing, or using the Chaavify mobile application ("App"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use our App.
                </p>
                <p>
                  These Terms constitute a legally binding agreement between you and SpeedyByte, the developer of Chaavify.
                </p>
              </div>
            </Card>

            {/* App Description */}
            <Card className="p-8 bg-white/5 border-white/10 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/10">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">App Description</h2>
                </div>
              </div>
              <div className="text-white/70 space-y-4">
                <p>
                  Chaavify is an AI-powered photo editing application exclusively designed for Android devices. The app allows users to enhance, modify, and transform their images using advanced artificial intelligence algorithms.
                </p>
                <p>
                  The App processes images locally on your Android device to ensure privacy and security. Features include but are not limited to:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white/50 rounded-full mt-2 shrink-0" />
                    <span>AI-powered photo enhancement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white/50 rounded-full mt-2 shrink-0" />
                    <span>Intelligent filters and effects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white/50 rounded-full mt-2 shrink-0" />
                    <span>Color correction and adjustment tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white/50 rounded-full mt-2 shrink-0" />
                    <span>Background removal and replacement</span>
                  </li>
                </ul>
                <p className="text-sm text-white/50 mt-4">
                  <strong>Note:</strong> Chaavify is currently available exclusively for Android devices running Android 7.0 and above.
                </p>
              </div>
            </Card>

            {/* User Responsibilities */}
            <Card className="p-8 bg-white/5 border-white/10 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/10">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">User Responsibilities</h2>
                </div>
              </div>
              <div className="text-white/70 space-y-4">
                <p>By using Chaavify, you agree to:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0" />
                    <span>Use the App only for lawful purposes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0" />
                    <span>Respect intellectual property rights of others</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0" />
                    <span>Not use the App to create harmful, offensive, or illegal content</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0" />
                    <span>Not attempt to reverse engineer or modify the App</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0" />
                    <span>Keep your device and App updated for security</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Prohibited Uses */}
            <Card className="p-8 bg-white/5 border-white/10 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-red-500/20">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Prohibited Uses</h2>
                </div>
              </div>
              <div className="text-white/70 space-y-4">
                <p>You may NOT use Chaavify to:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0" />
                    <span>Create deepfakes or misleading content without proper disclosure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0" />
                    <span>Process images you don't have rights to use</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0" />
                    <span>Create content that violates laws or regulations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0" />
                    <span>Harass, threaten, or harm others</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0" />
                    <span>Distribute malware or harmful code</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Intellectual Property */}
            <Card className="p-8 bg-white/5 border-white/10 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/10">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Intellectual Property</h2>
                </div>
              </div>
              <div className="text-white/70 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Our Rights</h3>
                  <p>
                    Chaavify, including its AI algorithms, user interface, and all related intellectual property, is owned by SpeedyByte. You may not copy, modify, or distribute our proprietary technology.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Your Content</h3>
                  <p>
                    You retain all rights to the images you process with Chaavify. We do not claim ownership of your photos or edited content. However, you are responsible for ensuring you have the right to use and modify any images you process.
                  </p>
                </div>
              </div>
            </Card>

            {/* Disclaimers */}
            <Card className="p-8 bg-white/5 border-white/10 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-yellow-500/20">
                  <AlertTriangle className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Disclaimers & Limitations</h2>
                </div>
              </div>
              <div className="text-white/70 space-y-4">
                <p>
                  Chaavify is provided "as is" without warranties of any kind. While we strive for accuracy and reliability, AI technology may produce unexpected results.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 shrink-0" />
                    <span>We are not liable for any damages resulting from App use</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 shrink-0" />
                    <span>AI results may vary and are not guaranteed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 shrink-0" />
                    <span>You use the App at your own risk</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 shrink-0" />
                    <span>We may modify or discontinue features without notice</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Contact */}
            <Card className="p-8 bg-white/5 border-white/10 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/10">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Contact Information</h2>
                </div>
              </div>
              <div className="text-white/70">
                <p className="mb-4">
                  If you have questions about these Terms and Conditions, please contact us:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> <a href="mailto:developer@speedybyte.co.in" className="text-white hover:underline">developer@speedybyte.co.in</a></p>
                  <p><strong>Subject:</strong> Terms and Conditions Inquiry - Chaavify</p>
                </div>
                <p className="mt-4 text-sm text-white/50">
                  These terms may be updated from time to time. Continued use of the App constitutes acceptance of any changes.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsConditions;