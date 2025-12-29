import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { LeadForm } from '../components/LeadForm';

const AccessPage = () => {
  return (
    <div className="min-h-screen bg-[#F5F4F0] text-stone-800 font-sans selection:bg-nobel-gold selection:text-white flex flex-col">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F4F0]/90 backdrop-blur-md shadow-sm py-4">
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

      <main className="flex-grow flex items-center justify-center py-32 px-6">
        <div className="w-full max-w-2xl">
            <div className="text-center mb-12">
                <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">GET ACCESS</div>
                <h1 className="font-serif text-4xl mb-4 text-stone-900">Join the Waitlist</h1>
                <p className="text-stone-500">Secure your spot for the next batch release.</p>
            </div>
            <LeadForm />
        </div>
      </main>
      
      <footer className="bg-stone-900 text-stone-400 py-8">
        <div className="container mx-auto px-6 text-center text-xs text-stone-600">
            © 2025 Cookies. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default AccessPage;
