import React, { useState } from 'react';
import { submitLead } from '../../js/marketing';

export const LeadForm = () => {
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [honeypot, setHoneypot] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (honeypot) {
            console.log("Bot detected");
            return;
        }

        setStatus('loading');
        const result = await submitLead(email, address);

        if (result.success) {
            setStatus('success');
        } else {
            console.error(result.error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    if (status === 'success') {
        return (
            <div className="p-8 bg-green-50 rounded-xl border border-green-200 text-center animate-fade-in">
                <h3 className="text-2xl font-serif text-green-800 mb-2">You're on the list.</h3>
                <p className="text-green-600">We'll let you know when the batch is ready.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4">
             {/* Honeypot */}
             <input
                type="text"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                style={{ display: 'none' }}
                tabIndex="-1"
                autoComplete="off"
            />
            
            <div>
                <label className="block text-sm font-medium text-stone-600 mb-1">Email</label>
                <input 
                    type="email" 
                    required 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-stone-300 focus:border-nobel-gold focus:ring-1 focus:ring-nobel-gold outline-none transition-all bg-white/50 backdrop-blur-sm"
                    placeholder="you@example.com"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-stone-600 mb-1">Shipping Address (Optional)</label>
                <textarea 
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-stone-300 focus:border-nobel-gold focus:ring-1 focus:ring-nobel-gold outline-none transition-all bg-white/50 backdrop-blur-sm h-24 resize-none"
                    placeholder="For early access shipments..."
                />
            </div>
            <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full py-3 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform active:scale-[0.99] duration-200"
            >
                {status === 'loading' ? 'Processing...' : 'Request Access'}
            </button>
            {status === 'error' && (
                <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
            )}
        </form>
    );
}
