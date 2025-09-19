import { Link } from "react-router-dom";
import { Mail, Trash2 } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-black/50 border-t border-white/10 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={logo} 
                alt="Chaavify Logo" 
                className="w-10 h-10 rounded-xl object-cover shadow-lg"
              />
              <span className="text-2xl font-bold text-white">Chaavify</span>
            </div>
            <p className="text-white/70 leading-relaxed max-w-md mb-6">
              Transform your photos with cutting-edge AI technology. Professional-grade 
              image editing made simple, private, and accessible to everyone.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span>AI-powered photo editing for Android</span>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-6 text-white">Legal</h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/privacy-policy" 
                  className="text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-2"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms-conditions" 
                  className="text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-2"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link 
                  to="/delete-account" 
                  className="text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-2"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-6 text-white">Support</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:developer@speedybyte.co.in" 
                  className="text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Contact Support
                </a>
              </li>
              <li>
                <a 
                  href="mailto:developer@speedybyte.co.in?subject=Chaavify Feedback" 
                  className="text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-2"
                >
                  Send Feedback
                </a>
              </li>
              <li>
                <a 
                  href="mailto:developer@speedybyte.co.in?subject=Chaavify Help" 
                  className="text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-2"
                >
                  Get Help
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © 2024 Chaavify by SpeedyByte. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6 text-sm">
              <span className="text-white/60">Available on:</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="text-white/80 font-medium">Google Play Store</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;