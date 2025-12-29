import React, { useState, useEffect } from 'react';
import { HeroScene, QuantumComputerScene } from '../components/QuantumScene';
import { SurfaceCodeDiagram, TransformerDecoderDiagram, PerformanceMetricDiagram } from '../components/Diagrams';
import { LeadForm } from '../components/LeadForm';
import { ArrowDown, Menu, X, BookOpen, Smartphone } from 'lucide-react';
import step1 from '../assets/Step1.png';
import step2 from '../assets/Step2.png';
import step3 from '../assets/Step3.png';

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F4] text-stone-800 selection:bg-nobel-gold selection:text-white font-sans">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#F9F8F4]/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-nobel-gold rounded-full flex items-center justify-center text-stone-900 font-serif font-bold text-xl shadow-sm pb-1">C</div>
            <span className={`font-serif font-bold text-lg tracking-wide transition-opacity ${scrolled ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
              COOKIES <span className="font-normal text-stone-500">2025</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-stone-600">
            <a href="#introduction" onClick={scrollToSection('introduction')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">The Problem</a>
            <a href="#science" onClick={scrollToSection('science')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">How It Works</a>
            <a href="#impact" onClick={scrollToSection('impact')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Impact</a>
            <a href="#order" onClick={scrollToSection('order')} className="px-5 py-2 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-colors shadow-sm cursor-pointer">
              Get Access
            </a>
          </div>

          <button className="md:hidden text-stone-900 p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F9F8F4] flex flex-col items-center justify-center gap-8 text-xl font-serif animate-fade-in">
            <a href="#introduction" onClick={scrollToSection('introduction')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">The Problem</a>
            <a href="#science" onClick={scrollToSection('science')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">How It Works</a>
            <a href="#impact" onClick={scrollToSection('impact')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Impact</a>
            <a href="#order" onClick={scrollToSection('order')} className="px-6 py-3 bg-stone-900 text-white rounded-full shadow-lg cursor-pointer">
              Get Access
            </a>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroScene />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(249,248,244,0.92)_0%,rgba(249,248,244,0.6)_50%,rgba(249,248,244,0.3)_100%)]" />

        <div className="relative z-10 container mx-auto px-6 text-center">

          <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl font-medium leading-tight md:leading-[0.9] mb-8 text-stone-900 drop-shadow-sm">
            Cookies <br/><span className="italic font-normal text-stone-600 text-3xl md:text-5xl block mt-4">Master Your Attention</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-700 font-light leading-relaxed mb-12">
            The physical interface for a distracted world. A secure NFC token that adds intention to your digital life.
          </p>
          
          <div className="flex justify-center">
             <a href="#introduction" onClick={scrollToSection('introduction')} className="group flex flex-col items-center gap-2 text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors cursor-pointer">
                <span>DISCOVER</span>
                <span className="p-2 border border-stone-300 rounded-full group-hover:border-stone-900 transition-colors bg-white/50">
                    <ArrowDown size={16} />
                </span>
             </a>
          </div>
        </div>
      </header>

      <main>
        {/* Introduction */}
        <section id="introduction" className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-4xl text-center">
              <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">THE PROBLEM</div>
              <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900 leading-tight">
                Your attention is being harvested.
              </h2>
              <p className="text-xl text-stone-600 leading-relaxed font-light">
                The average person checks their phone <strong>58 times a day</strong>. Most of these are unconscious habits. Cookies adds a physical "micro-transaction" of effort to break the loop.
              </p>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="science" className="py-24 bg-[#F9F8F4] border-t border-stone-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">THE SYSTEM</div>
                    <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900">Three Simple Steps</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center text-center group">
                        <div className="w-full aspect-[4/5] bg-stone-100 rounded-2xl overflow-hidden mb-8 relative shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                            <img 
                                src={step1} 
                                alt="Download app and register cookie" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="font-serif text-2xl text-stone-900 mb-3">1. Setup</h3>
                        <p className="text-stone-600 px-4">
                            Connect your Cookie.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center text-center group">
                        <div className="w-full aspect-[4/5] bg-stone-100 rounded-2xl overflow-hidden mb-8 relative shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                             <img 
                                src={step2} 
                                alt="Lock your apps" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                         <h3 className="font-serif text-2xl text-stone-900 mb-3">2. Lock</h3>
                        <p className="text-stone-600 px-4">
                            Choose apps to block.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center text-center group">
                        <div className="w-full aspect-[4/5] bg-stone-100 rounded-2xl overflow-hidden mb-8 relative shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                             <img 
                                src={step3} 
                                alt="Scan cookie to unlock" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                         <h3 className="font-serif text-2xl text-stone-900 mb-3">3. Unlock</h3>
                        <p className="text-stone-600 px-4">
                            Scan to access.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Impact */}
        <section id="impact" className="py-24 bg-white border-t border-stone-200">
             <div className="container mx-auto px-6 max-w-4xl text-center">
                <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">PHILOSOPHY</div>
                <h2 className="font-serif text-4xl mb-6 text-stone-900">Reclaim Your Autonomy</h2>
                <p className="text-xl text-stone-600 mb-12 leading-relaxed font-light">
                    Technology should serve you, not the other way around. 
                    <br/><span className="text-stone-400">Reintroduce friction. Live intentionally.</span>
                </p>
                
                <div className="p-8 bg-[#F9F8F4] rounded-2xl inline-block">
                    <p className="font-serif italic text-2xl text-stone-800">
                        "The next big thing in technology isn't a new screen.<br/>It's the ability to look away from one."
                    </p>
                </div>
             </div>
        </section>

        {/* Lead Form Section */}
        <section id="order" className="py-24 bg-[#F5F4F0] border-t border-stone-300">
           <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">GET EAR ACCESS</div>
                    <h2 className="font-serif text-3xl md:text-5xl mb-4 text-stone-900">Join the Waitlist</h2>
                    <p className="text-stone-500 max-w-2xl mx-auto">Limited batches released monthly. Secure your spot in line.</p>
                </div>
                
                <LeadForm />
           </div>
        </section>

      </main>

      <footer className="bg-stone-900 text-stone-400 py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
                <div className="text-white font-serif font-bold text-2xl mb-2">COOKIES</div>
                <p className="text-sm">Master your attention.</p>
            </div>
            <div className="flex gap-8 text-sm">
                <a href="#/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#/terms" className="hover:text-white transition-colors">Terms of Use</a>
                <a href="#/legal" className="hover:text-white transition-colors">Legal</a>
            </div>
        </div>
        <div className="text-center mt-12 text-xs text-stone-600">
            © 2025 Cookies. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
