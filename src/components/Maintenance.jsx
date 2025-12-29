import React, { useState, useEffect } from 'react';

const Maintenance = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  // Check for saved session
  useEffect(() => {
    const saved = localStorage.getItem('cookies_access');
    if (saved === 'granted') {
        onUnlock();
    }
  }, [onUnlock]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Hash the input password
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    // Compare with hash for 'cookies2025'
    if (hashHex === '9f129f815127be64d1c8914e6df63bf7472698e78bc3c9ff4ac34efe26b60479') {
      localStorage.setItem('cookies_access', 'granted');
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000); 
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-[#F5F4F0] flex flex-col items-center justify-center text-stone-900">
      <div className="text-center animate-fade-in">
        <div className="w-16 h-16 bg-nobel-gold rounded-full flex items-center justify-center text-stone-900 font-serif font-bold text-2xl mb-8 mx-auto shadow-sm">
          C
        </div>
        <h1 className="font-serif text-4xl md:text-5xl mb-4 tracking-tight">
          Coming Soon
        </h1>
        <p className="text-stone-500 font-light tracking-wide uppercase text-sm mb-12">
          Hardware • 2025
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Access Code"
            className={`bg-white border ${error ? 'border-red-400 shake' : 'border-stone-200'} px-4 py-2 rounded-full text-center text-sm outline-none focus:border-stone-400 transition-all w-48`}
          />
          <button 
            type="submit" 
            className="text-xs text-stone-400 hover:text-stone-600 transition-colors uppercase tracking-widest font-bold"
          >
            Enter
          </button>
        </form>
      </div>
      
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .shake {
          animation: shake 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Maintenance;
