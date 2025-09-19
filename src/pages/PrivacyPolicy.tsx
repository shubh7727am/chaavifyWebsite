import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";

const PrivacyPolicy = () => {
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
                <Shield className="h-4 w-4 text-white" />
                <span className="text-sm font-medium text-white/90">Privacy First</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
                Privacy Policy
              </h1>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Your privacy is our priority. Learn how we protect your data and respect your rights.
              </p>
              <p className="text-sm text-white/50 mt-4">
                Last updated: December 2024
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Overview */}
            <Card className="p-8 bg-white/5 border-white/10 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/10">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Overview</h2>
                  <p className="text-white/70">
                    Chaavify is committed to protecting your privacy and ensuring the security of your personal information.
                  </p>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed">
                This Privacy Policy explains how we collect, use, and protect your information when you use our AI-powered photo editing application. We believe in transparency and your right to understand how your data is handled.
              </p>
            </Card>

            {/* Data Collection */}
            <Card className="p-8 bg-white/5 border-white/10 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/10">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Information We Collect</h2>
                </div>
              </div>
              <div className="space-y-4 text-white/70">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Photos and Images</h3>
                  <p>We process your photos locally on your device. Your images are not uploaded to our servers unless you explicitly choose to save them to cloud storage.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Usage Analytics</h3>
                  <p>We collect anonymous usage statistics to improve our app performance and user experience. This includes feature usage, crash reports, and performance metrics.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Device Information</h3>
                  <p>We collect basic device information such as device type, operating system version, and app version for compatibility and support purposes.</p>
                </div>
              </div>
            </Card>

            {/* Data Usage */}
            <Card className="p-8 bg-white/5 border-white/10 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/10">
                  <UserCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">How We Use Your Information</h2>
                </div>
              </div>
              <div className="space-y-4 text-white/70">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white/50 rounded-full mt-2 shrink-0" />
                    <span>Process your photos using AI algorithms locally on your device</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white/50 rounded-full mt-2 shrink-0" />
                    <span>Improve app performance and fix bugs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white/50 rounded-full mt-2 shrink-0" />
                    <span>Provide customer support and respond to your inquiries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white/50 rounded-full mt-2 shrink-0" />
                    <span>Send important app updates and security notifications</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Data Protection */}
            <Card className="p-8 bg-white/5 border-white/10 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/10">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Data Protection & Security</h2>
                </div>
              </div>
              <div className="space-y-4 text-white/70">
                <p>We implement industry-standard security measures to protect your information:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 shrink-0" />
                    <span><strong>Local Processing:</strong> All photo editing happens on your device</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 shrink-0" />
                    <span><strong>Encryption:</strong> Data transmission is encrypted using TLS</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 shrink-0" />
                    <span><strong>No Data Sharing:</strong> We never sell your personal information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 shrink-0" />
                    <span><strong>Minimal Collection:</strong> We only collect what's necessary</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Your Rights */}
            <Card className="p-8 bg-white/5 border-white/10 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/10">
                  <UserCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Your Rights</h2>
                </div>
              </div>
              <div className="space-y-4 text-white/70">
                <p>You have the following rights regarding your personal information:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white/70 rounded-full mt-2 shrink-0" />
                    <span><strong>Access:</strong> Request access to your personal data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white/70 rounded-full mt-2 shrink-0" />
                    <span><strong>Correction:</strong> Request correction of inaccurate data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white/70 rounded-full mt-2 shrink-0" />
                    <span><strong>Deletion:</strong> Request deletion of your personal data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white/70 rounded-full mt-2 shrink-0" />
                    <span><strong>Portability:</strong> Request transfer of your data</span>
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
                  <h2 className="text-2xl font-bold text-white mb-2">Contact Us</h2>
                </div>
              </div>
              <div className="text-white/70">
                <p className="mb-4">
                  If you have any questions about this Privacy Policy or want to exercise your rights, please contact us:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> <a href="mailto:developer@speedybyte.co.in" className="text-white hover:underline">developer@speedybyte.co.in</a></p>
                  <p><strong>Subject:</strong> Privacy Policy Inquiry - Chaavify</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;