import React from 'react';
import { ArrowLeft } from 'lucide-react';

const Terms = () => {
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
        <h1 className="font-serif text-4xl mb-8 text-stone-900">Terms of Service</h1>
        <div className="prose prose-stone max-w-none text-stone-600">
            <p className="lead text-lg mb-8">Last Updated: December 28, 2025</p>

            <h3 className="text-2xl font-serif text-stone-800 mt-8 mb-4">1. Acceptance of Terms</h3>
            <p>By accessing and using the Cookies website and hardware products, you agree to comply with and be bound by these Terms of Service.</p>

            <h3 className="text-2xl font-serif text-stone-800 mt-8 mb-4">2. Product Usage</h3>
            <p>Our hardware products are designed to help you manage screen time. You agree to use them only for their intended purpose. Reverse engineering or attempting to bypass the security mechanisms of the Cookies hardware is prohibited.</p>

            <h3 className="text-2xl font-serif text-stone-800 mt-8 mb-4">3. Pre-Orders and Shipping</h3>
            <p>Pre-orders are subject to availability. Estimated shipping dates are not guaranteed. We reserve the right to cancel orders at our discretion.</p>

            <h3 className="text-2xl font-serif text-stone-800 mt-8 mb-4">4. Limitation of Liability</h3>
            <p>Cookies is not liable for any indirect, incidental, or consequential damages arising from the use of our products. Our liability is limited to the purchase price of the product.</p>
            
            <h3 className="text-2xl font-serif text-stone-800 mt-8 mb-4">5. Governing Law</h3>
            <p>These terms are governed by the laws of the State of California.</p>
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

export default Terms;
