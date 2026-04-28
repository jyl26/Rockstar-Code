import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Terminal, Wand2, Loader2, Play, Share2, Save, MapPin, Target, Zap } from 'lucide-react';
import { generateMission } from '../services/geminiService';
import { GeneratedMission } from '../types';

export default function CreatorStudio() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<GeneratedMission | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    try {
      const mission = await generateMission(prompt);
      setResult(mission);
    } catch (error) {
      console.error("Failed to generate:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Left Column: Input */}
        <div className="lg:w-1/2 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="font-display font-black text-5xl uppercase tracking-tighter">
              CREATOR <span className="text-rockstar-orange">HUB</span>
            </h1>
            <p className="text-white/40 uppercase tracking-[0.2em] text-xs font-mono">
              Inference Engine: ROCKSTAR-CODE-V1
            </p>
          </div>

          <div className="p-1 bg-gradient-to-br from-rockstar-orange/40 to-rockstar-orange/20 rounded-sm">
            <div className="bg-rockstar-black p-6 rounded-sm flex flex-col gap-6">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe your mission... e.g. 'A high-stakes neon-noir heist in Little Havana involving a cybernetic underworld kingpin and a runaway getaway bike.'"
                className="w-full h-40 bg-white/5 border border-white/10 p-4 rounded-sm focus:outline-none focus:border-rockstar-orange transition-colors text-white/80 resize-none font-sans leading-relaxed"
              />

              <button
                onClick={handleGenerate}
                disabled={isGenerating || !prompt.trim()}
                className="bg-white text-black p-4 font-display font-black uppercase text-lg flex items-center justify-center gap-3 hover:bg-rockstar-orange hover:text-white disabled:opacity-50 disabled:grayscale transition-all active:scale-95"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    Synthesizing World...
                  </>
                ) : (
                  <>
                    <Wand2 className="w-6 h-6" />
                    Execute Inference
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4 p-6 bg-white/5 border border-white/5 rounded-sm">
            <h3 className="text-white/40 text-[10px] uppercase font-bold tracking-[0.2em] flex items-center gap-2">
              <span className="w-2 h-2 bg-rockstar-orange" />
              Creator Assistance
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Combine "Vibes" with specific NPC names and locations for better results. 
              The engine will automatically generate objectives, dialogue scripts, 
              and world metadata based on your input.
            </p>
          </div>
        </div>

        {/* Right Column: Output */}
        <div className="lg:w-1/2 min-h-[500px] relative">
          <AnimatePresence mode="wait">
            {result ? (
              <motion.div
                key="result"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col h-full"
              >
                <div className="gta-hud-card h-full flex flex-col relative z-10 border-rockstar-orange">
                  <div className="p-8 border-b border-white/10 bg-black/40">
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex flex-col gap-2 w-1/2">
                        <div className="text-[10px] uppercase font-bold text-rockstar-orange tracking-widest flex items-center gap-2">
                          <div className="w-2 h-2 bg-rockstar-orange animate-pulse" />
                          Job Details
                        </div>
                        <div className="gta-stat-bar w-full">
                          <div className="gta-stat-fill bg-rockstar-orange w-[85%]" />
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-white/40">
                        <button className="hover:text-rockstar-orange transition-colors"><Save className="w-5 h-5" /></button>
                        <button className="hover:text-rockstar-orange transition-colors"><Share2 className="w-5 h-5" /></button>
                      </div>
                    </div>
                    
                    <h2 className="font-display font-black text-4xl uppercase tracking-tighter mb-2 italic text-white drop-shadow-lg">
                      {result.title}
                    </h2>
                    
                    <div className="flex items-center gap-4 font-mono text-[10px] uppercase text-rockstar-orange bg-white/5 py-2 px-3 inline-flex border border-white/10">
                      <div className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {result.location}</div>
                      <div className="w-px h-3 bg-white/20" />
                      <div className="flex items-center gap-1 truncate text-gta-green font-bold"><span className="text-white/40">Payout:</span> ${result.reward?.toLocaleString()}</div>
                    </div>
                  </div>

                   <div className="p-8 flex-1 flex flex-col gap-8 bg-black/20">
                    <div className="flex flex-col gap-3">
                      <h4 className="text-white/40 text-[10px] uppercase font-bold tracking-[0.2em]">Context Summary</h4>
                      <p className="text-white/80 leading-relaxed italic border-l-2 border-rockstar-orange pl-4 py-1 bg-white/5">
                        "{result.description}"
                      </p>
                    </div>

                    <div className="flex flex-col gap-4">
                      <h4 className="text-white/40 text-[10px] uppercase font-bold tracking-[0.2em] flex items-center gap-2">
                         <Target className="w-3 h-3 text-rockstar-orange" /> Objectives
                      </h4>
                      <div className="flex flex-col gap-3">
                        {result.objectives.map((obj, i) => (
                          <div key={i} className="flex gap-4 items-center group p-2 hover:bg-white/5 transition-colors">
                            <div className="w-6 h-6 flex items-center justify-center bg-white/10 font-display font-black text-xs text-rockstar-orange group-hover:bg-rockstar-orange group-hover:text-black transition-all">
                              {i+1}
                            </div>
                            <span className="text-sm text-white/70 group-hover:text-white transition-colors">{obj}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-8 bg-black/60 border-t border-white/5 flex items-center justify-between">
                    <div className="flex flex-col gap-2">
                      <span className="text-white/40 text-[8px] uppercase font-bold tracking-[0.2em]">Difficulty Rating</span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4].map(i => (
                          <div key={i} className={`w-4 h-1 rotate-[-15deg] ${
                            (result.estimatedDifficulty === 'EASY' && i === 1) ||
                            (result.estimatedDifficulty === 'MEDIUM' && i <= 2) ||
                            (result.estimatedDifficulty === 'HARD' && i <= 3) ||
                            (result.estimatedDifficulty === 'INSANE')
                            ? 'bg-rockstar-orange' : 'bg-white/10'
                          }`} />
                        ))}
                      </div>
                    </div>
                    <button className="bg-rockstar-orange text-black px-8 py-3 font-display font-black uppercase text-sm skew-x-[-12deg] hover:bg-white transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,128,0,0.3)]">
                      <Play className="w-4 h-4 fill-current" />
                      <span>Execute Mission</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="w-full h-full border border-dashed border-white/10 rounded-sm flex flex-col items-center justify-center text-center p-12 gap-6 group">
                <div className="w-24 h-24 rounded-full border border-white/5 flex items-center justify-center group-hover:border-rockstar-orange/30 transition-all duration-700">
                  <Wand2 className="w-10 h-10 text-white/10 group-hover:text-rockstar-orange group-hover:scale-125 transition-all duration-700" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl uppercase mb-2 text-white/20 group-hover:text-white/40 transition-colors">Awaiting Input...</h3>
                  <p className="text-white/10 max-w-xs text-sm group-hover:text-white/20 transition-colors">The generative engine is ready. State your vision in the prompt field to begin.</p>
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
