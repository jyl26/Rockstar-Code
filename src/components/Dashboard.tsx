import React from 'react';
import { motion } from 'motion/react';
import { 
  BarChart3, 
  Wallet, 
  Settings, 
  ShieldCheck, 
  Gem, 
  Zap, 
  Award,
  ArrowUpRight,
  ChevronRight
} from 'lucide-react';
import { Tier } from '../types';

export default function Dashboard() {
  const tiers = [
    { 
      id: 'STAR', 
      name: 'Star', 
      price: '$15', 
      popular: true,
      accent: 'rockstar-orange',
      features: ['100 Tokens Per Day', 'Full Community Access', 'Asset Monetization'] 
    },
    { 
      id: 'SUPERSTAR', 
      name: 'Superstar', 
      price: '$100', 
      accent: 'rockstar-orange',
      features: ['Full Community Access', 'Asset Monetization', 'Unlimited Generation', 'New Model Early Access'] 
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Profile Card */}
        <div className="flex flex-col gap-8">
          <div className="gta-hud-card p-10 flex flex-col gap-8 items-center text-center relative overflow-hidden border-rockstar-orange">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rockstar-orange/10 blur-[60px] rounded-full" />
            
            <div className="w-40 h-40 bg-white/5 border-2 border-rockstar-orange p-1 rounded-full relative z-10 flex items-center justify-center">
              <div className="w-full h-full bg-rockstar-black rounded-full flex items-center justify-center">
                <span className="font-display font-black text-5xl text-rockstar-orange italic">JK</span>
              </div>
            </div>

            <div className="relative z-10 w-full">
              <div className="flex flex-col items-center gap-2 mb-6">
                <h2 className="font-display font-black text-5xl uppercase italic tracking-tighter">Johnny_K</h2>
              </div>

              <div className="mt-8">
                <button className="w-full flex items-center justify-between p-4 bg-white/5 border border-white/5 hover:border-white/20 transition-all font-display font-black uppercase text-xs tracking-widest group">
                  <div className="flex items-center gap-4">
                    <Settings className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
                    <span>Studio Settings</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-white/20" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Subscription Column */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="font-display font-black text-xl uppercase tracking-widest text-white/40">Subscription Status</h3>
            <div className="flex flex-col gap-4">
               {tiers.map((tier) => (
                <div 
                  key={tier.id}
                  className={`p-6 border rounded-sm transition-all relative group overflow-hidden ${
                    tier.popular ? 'border-rockstar-orange bg-white/5' : 'border-white/5 hover:border-white/20'
                  }`}
                >
                   {tier.popular && (
                    <div className="absolute top-3 right-[-30px] bg-rockstar-orange text-black px-10 py-1 text-[8px] font-black uppercase tracking-widest rotate-45 shadow-lg">
                      Popular
                    </div>
                  )}

                  <div className="flex justify-between items-center mb-6">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold text-white/40">{tier.name}</span>
                      <span className="text-2xl font-display font-black italic">{tier.price}<span className="text-xs text-white/20">/mo</span></span>
                    </div>
                    {tier.id === 'STAR' ? <Zap className="text-rockstar-orange w-6 h-6" /> : <Gem className="text-rockstar-orange w-6 h-6" />}
                  </div>

                  <ul className="flex flex-col gap-3 mb-8">
                    {tier.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-[10px] text-white/60 font-medium uppercase tracking-widest">
                        <ChevronRight className="w-3 h-3 text-white/20" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 font-display font-black uppercase text-xs tracking-widest border transition-all ${
                    tier.id === 'STAR' 
                    ? 'bg-rockstar-orange text-black border-transparent hover:bg-white' 
                    : 'bg-transparent text-white border-white/20 hover:bg-white/10 hover:border-white/40'
                  }`}>
                    {tier.id === 'STAR' ? 'Current Tier' : 'Upgrade Plan'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
