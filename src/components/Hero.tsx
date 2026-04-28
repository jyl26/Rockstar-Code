import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Play, Shield, Zap } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

export default function Hero({ onStart }: HeroProps) {
  const features = [
    { icon: Zap, title: "Vibe Coding", desc: "Speak your world into existence with generative mission building." },
    { icon: Play, title: "Infinite Play", desc: "Access a universe of user-generated missions updated in real-time." },
    { icon: Shield, title: "Secure Marketplace", desc: "Monetize your creations in the largest gaming ecosystem." },
    { icon: Zap, title: "Next-Gen Engine", desc: "Powered by Rockstar's advanced AI simulation backend." }
  ];

  return (
    <div className="px-6 relative">
      <section className="max-w-7xl mx-auto py-20 lg:py-32 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 bg-black border-l-4 border-rockstar-orange text-white text-xs font-mono font-bold uppercase tracking-[0.3em] shadow-lg"
        >
          <div className="w-2 h-2 bg-rockstar-orange animate-pulse" />
          <span>Rockstar Games Studio // CODE V1.0</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display font-black text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-none italic mb-10"
        >
          DESIGN <br />
          <span className="text-rockstar-orange">PLAY SHARE</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 mb-24"
        >
          <button 
            onClick={onStart}
            className="group relative bg-rockstar-orange px-12 py-5 font-display font-black uppercase text-xl transition-all hover:bg-white hover:text-rockstar-orange"
          >
            <div className="absolute inset-0 border-2 border-white/20 translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform" />
            <span className="relative">Start Creating</span>
          </button>
          
          <button className="bg-white/5 border border-white/10 px-12 py-5 font-display font-black uppercase text-xl hover:bg-white/10 transition-colors">
            Explore Community
          </button>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4 + i * 0.1 }}
              className="p-8 bg-rockstar-gray/50 border border-white/5 hover:border-rockstar-orange/30 transition-all text-left group"
            >
              <f.icon className="w-8 h-8 text-rockstar-orange mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-display font-bold text-xl uppercase mb-3 text-rockstar-orange">{f.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Visual Teaser */}
      <section className="max-w-7xl mx-auto py-20 flex flex-col gap-12">
        <div className="relative aspect-video rounded-sm overflow-hidden border border-white/10 shadow-2xl">
           <div className="absolute inset-0 bg-gradient-to-t from-rockstar-black via-transparent to-transparent z-10" />
           <img 
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070" 
            alt="Neon City" 
            className="w-full h-full object-cover opacity-50 contrast-125 grayscale-[0.5]"
          />
          <div className="absolute bottom-12 left-12 z-20">
            <h2 className="font-display font-black text-4xl uppercase mb-2">Vice City <span className="text-rockstar-orange">Evolved</span></h2>
            <p className="text-white/60">Powered by Rockstar Code Generation</p>
          </div>
          <div className="absolute top-12 right-12 z-20">
            <div className="flex items-center gap-2 px-3 py-1 bg-black/80 rounded border border-rockstar-orange/50 text-[10px] font-mono uppercase tracking-[0.2em] text-rockstar-orange">
              <span className="w-2 h-2 rounded-full bg-rockstar-orange animate-pulse" />
              Live AI Inference
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
