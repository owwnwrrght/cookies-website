import React from 'react';
import { ArrowLeft } from 'lucide-react';

const WhyCookies = () => {
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
        <h1 className="font-serif text-4xl mb-8 text-stone-900">Why Cookies</h1>
        <div className="prose prose-stone max-w-none text-stone-600">
          <p className="lead text-lg mb-8">
            Cookies adds a physical step to unlocking your phone. That small pause is often all you
            need to break a mindless scroll and choose what you want to do instead.
          </p>

          <h3 className="text-2xl font-serif text-stone-800 mt-8 mb-4">1. Friction on purpose</h3>
          <p>
            Most screen time tools live inside the phone, which is also where the habit lives.
            Cookies puts a tiny, intentional action outside the screen. You touch the token, then
            decide whether the unlock is worth it.
          </p>

          <h3 className="text-2xl font-serif text-stone-800 mt-8 mb-4">2. A signal you control</h3>
          <p>
            Each cookie is a vote for how you want to use your attention. It is a simple ritual that
            makes your decision explicit, not automatic.
          </p>

          <h3 className="text-2xl font-serif text-stone-800 mt-8 mb-4">3. Built for consistency</h3>
          <p>
            The value of a cookie is stable and predictable. That helps you build a daily rhythm and
            reduces the urge to negotiate with yourself in the moment.
          </p>

          <h3 className="text-2xl font-serif text-stone-800 mt-8 mb-4">4. Privacy first</h3>
          <p>
            The NFC token is just a unique identifier. It does not store personal data or track your
            activity on its own.
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

export default WhyCookies;
