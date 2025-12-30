import React from 'react';
import { ArrowLeft } from 'lucide-react';

const Help = () => {
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
        <h1 className="font-serif text-4xl mb-8 text-stone-900">Get Help</h1>
        <div className="prose prose-stone max-w-none text-stone-600">
          <p className="lead text-lg mb-8">
            We are here to help. Send us a note and we will get back to you as quickly as possible.
          </p>

          <h3 className="text-2xl font-serif text-stone-800 mt-8 mb-4">Support</h3>
          <p>
            Email <strong>support@cookies.tech</strong> with a brief description of the issue.
          </p>

          <h3 className="text-2xl font-serif text-stone-800 mt-8 mb-4">Include these details</h3>
          <ul>
            <li>iPhone model and iOS version</li>
            <li>What you were trying to do</li>
            <li>Any on-screen error text or screenshots</li>
          </ul>

          <h3 className="text-2xl font-serif text-stone-800 mt-8 mb-4">Privacy and billing</h3>
          <p>
            For privacy questions, contact <strong>legal@cookies.tech</strong>.
          </p>
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

export default Help;
