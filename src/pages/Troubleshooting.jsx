import React from 'react';
import { ArrowLeft } from 'lucide-react';

const Troubleshooting = () => {
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
        <h1 className="font-serif text-4xl mb-8 text-stone-900">Troubleshooting</h1>
        <div className="prose prose-stone max-w-none text-stone-600">
          <p className="lead text-lg mb-8">
            Most issues are resolved by restarting the app, checking permissions, and scanning
            again. If something feels off, try the steps below.
          </p>

          <h3 className="text-2xl font-serif text-stone-800 mt-8 mb-4">NFC scan fails</h3>
          <ul>
            <li>Hold the top of the phone directly over the cookie for 1 to 2 seconds.</li>
            <li>Make sure NFC is enabled and your device supports NFC scanning.</li>
            <li>Try a different cookie in the same pack to confirm the tag is readable.</li>
          </ul>

          <h3 className="text-2xl font-serif text-stone-800 mt-8 mb-4">Missing permissions</h3>
          <ul>
            <li>Confirm you are signed in to the same account that claimed the pack.</li>
            <li>Open Settings on your phone and ensure Cookies has the needed permissions.</li>
            <li>Sign out and sign back in if the session looks stale.</li>
          </ul>

          <h3 className="text-2xl font-serif text-stone-800 mt-8 mb-4">Timer does not update</h3>
          <ul>
            <li>Open the app and wait a few seconds for the timer to refresh.</li>
            <li>Ensure the app is allowed to run in the background.</li>
            <li>If the value looks wrong, rescan a cookie to extend time again.</li>
          </ul>

          <h3 className="text-2xl font-serif text-stone-800 mt-8 mb-4">Still stuck?</h3>
          <p>
            Reach out and include a screenshot of the error message plus your device model.
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

export default Troubleshooting;
