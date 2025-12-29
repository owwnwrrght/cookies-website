import React from 'react';
import { ArrowLeft } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-[#F9F8F4] text-stone-800 font-sans selection:bg-nobel-gold selection:text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F9F8F4]/90 backdrop-blur-md shadow-sm py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
            <a href="#/" className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors">
                <ArrowLeft size={20} />
                <span className="font-medium">Back to Home</span>
            </a>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-nobel-gold rounded-full flex items-center justify-center text-stone-900 font-serif font-bold text-xl shadow-sm pb-1">C</div>
            <span className="font-serif font-bold text-lg tracking-wide">
              COOKIES
            </span>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-32 max-w-4xl">
        <h1 className="font-serif text-4xl mb-8 text-stone-900">Privacy Policy</h1>
        <div className="prose prose-stone max-w-none text-stone-600">
            <p className="lead text-lg mb-8">Last Updated: December 28, 2025</p>

            <h3 className="text-2xl font-serif text-stone-800 mt-8 mb-4">1. Information Collection</h3>
            <p>We collect information you provide directly to us, such as when you sign up for our waitlist (email address, shipping preferences). We do not collect granular usage data from the hardware token itself.</p>

            <h3 className="text-2xl font-serif text-stone-800 mt-8 mb-4">2. Use of Information</h3>
            <p>We use your information to communicate with you about your order, product updates, and to improve our services. We do not sell your personal data to third parties.</p>

            <h3 className="text-2xl font-serif text-stone-800 mt-8 mb-4">3. Data Security</h3>
            <p>We implement reasonable security measures to protect your information. Your email address is stored securely using Firebase Authentication and Cloud Firestore.</p>

            <h3 className="text-2xl font-serif text-stone-800 mt-8 mb-4">4. Cookies and Tracking</h3>
            <p>We use minimal cookies on our website necessary for its operation and to analyze aggregate traffic patterns. We do not use intrusive tracking pixels.</p>
            
            <h3 className="text-2xl font-serif text-stone-800 mt-8 mb-4">5. Contact Us</h3>
            <p>If you have any questions about this Privacy Policy, please contact us at legal@cookies.tech.</p>
        </div>
      </main>

      <footer className="bg-stone-900 text-stone-400 py-16 mt-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
                <div className="text-white font-serif font-bold text-2xl mb-2">COOKIES</div>
                <p className="text-sm">Master your attention.</p>
            </div>
            <div className="text-center mt-12 md:mt-0 text-xs text-stone-600">
                © 2025 Cookies. All rights reserved.
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
