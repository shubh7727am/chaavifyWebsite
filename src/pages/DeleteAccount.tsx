import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Trash2, Mail, AlertTriangle, Clock, Shield, HelpCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DeleteAccount = () => {
  const handleEmailSupport = () => {
    const subject = encodeURIComponent("Account Deletion Request - Chaavify");
    const body = encodeURIComponent(`Hello Chaavify Support Team,

I would like to request the deletion of my Chaavify account and all associated data.

Account Details:
- Email: [Your email address]
- Username: [Your username if applicable]
- Reason for deletion: [Optional - please specify]

I understand that this action is irreversible and will result in the permanent deletion of:
- My account profile
- App preferences and settings
- Any cloud-stored data (if applicable)
- Usage history and analytics data

Please confirm once the deletion is complete.

Thank you,
[Your name]`);
    
    window.location.href = `mailto:developer@speedybyte.co.in?subject=${subject}&body=${body}`;
  };

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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 backdrop-blur-sm mb-6">
                <Trash2 className="h-4 w-4 text-red-400" />
                <span className="text-sm font-medium text-red-400">Account Deletion</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
                Delete Account
              </h1>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                We're sorry to see you go. Here's how to permanently delete your Chaavify account.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Important Notice */}
            <Card className="p-8 bg-red-500/10 border-red-500/20 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-red-500/20">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Important Notice</h2>
                </div>
              </div>
              <div className="text-white/70 space-y-4">
                <p className="text-lg">
                  <strong className="text-red-400">Account deletion is permanent and irreversible.</strong> Once your account is deleted, you will lose access to all your data and settings.
                </p>
                <p>
                  Please make sure you have backed up any important data before proceeding with the deletion request.
                </p>
              </div>
            </Card>

            {/* What Gets Deleted */}
            <Card className="p-8 bg-white/5 border-white/10 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/10">
                  <Trash2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">What Gets Deleted</h2>
                </div>
              </div>
              <div className="text-white/70 space-y-4">
                <p>When you delete your account, the following information will be permanently removed:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0" />
                    <span>Your account profile and login credentials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0" />
                    <span>App preferences and custom settings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0" />
                    <span>Any cloud-stored data (if applicable)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0" />
                    <span>Usage history and analytics data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0" />
                    <span>Support ticket history</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* What's Not Deleted */}
            <Card className="p-8 bg-white/5 border-white/10 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/10">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">What Remains Protected</h2>
                </div>
              </div>
              <div className="text-white/70 space-y-4">
                <p>The following information is NOT affected by account deletion:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0" />
                    <span><strong>Your photos:</strong> All images remain on your device - we never store them</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0" />
                    <span><strong>App functionality:</strong> You can continue using Chaavify without an account</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0" />
                    <span><strong>Local data:</strong> App data stored locally on your device</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Deletion Process */}
            <Card className="p-8 bg-white/5 border-white/10 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/10">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Deletion Process</h2>
                </div>
              </div>
              <div className="text-white/70 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold text-white shrink-0">1</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Send Deletion Request</h3>
                      <p>Click the button below to send an email to our support team with your deletion request.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold text-white shrink-0">2</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Verification</h3>
                      <p>Our team will verify your identity and process your request within 48 hours.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold text-white shrink-0">3</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Confirmation</h3>
                      <p>You'll receive an email confirmation once your account has been permanently deleted.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Request Deletion */}
            <Card className="p-8 bg-white/5 border-white/10 backdrop-blur-sm text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 rounded-2xl bg-red-500/20">
                  <Mail className="w-8 h-8 text-red-400" />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Delete Your Account?</h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Clicking the button below will open your email client with a pre-filled deletion request. 
                Our support team will process your request and confirm the deletion.
              </p>
              
              <Button 
                onClick={handleEmailSupport}
                size="lg"
                className="bg-red-500 hover:bg-red-600 text-white transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Deletion Request
              </Button>
              
              <p className="text-sm text-white/50 mt-4">
                Email will be sent to: developer@speedybyte.co.in
              </p>
            </Card>

            {/* FAQ */}
            <Card className="p-8 bg-white/5 border-white/10 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/10">
                  <HelpCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Frequently Asked Questions</h2>
                </div>
              </div>
              <div className="text-white/70 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Can I recover my account after deletion?</h3>
                  <p>No, account deletion is permanent and irreversible. Once deleted, your account cannot be recovered.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">How long does the deletion process take?</h3>
                  <p>We typically process deletion requests within 48 hours of receiving your email.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Will I lose my photos?</h3>
                  <p>No, your photos remain safe on your device. Chaavify processes images locally and doesn't store them on our servers.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Can I create a new account later?</h3>
                  <p>Yes, you can create a new account at any time, but it will be completely separate from your deleted account.</p>
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

export default DeleteAccount;