import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  ThumbsUp, 
  Users, 
  Search, 
  Filter, 
  X, 
  MapPin, 
  Sparkles, 
  Target,
  ChevronRight,
  Download,
  TrendingUp
} from 'lucide-react';
import { GeneratedMission } from '../types';

export default function Marketplace() {
  const [selectedMission, setSelectedMission] = useState<Partial<GeneratedMission> | null>(null);

  const dummyMissions: (Partial<GeneratedMission> & { imageUrl: string; price: string; downloads: number })[] = [
    { 
      id: '1', 
      title: 'The Vice Heist Pack', 
      imageUrl: 'https://images.unsplash.com/photo-1626775238053-4315516eedc9?auto=format&fit=crop&q=80&w=1000',
      description: 'A coordinated strike on the central bank during the neon festival. Includes 3 new mission variants and exclusive heist gear.', 
      location: 'Downtown', 
      author: 'ViceKing88', 
      likes: 2400, 
      plays: 12000, 
      downloads: 45000,
      price: '$4.99',
      vibe: 'High Stakes Heist', 
      estimatedDifficulty: 'HARD', 
      objectives: ['Infiltrate Vault', 'Neutralize Security', 'Escape via Helicopter'] 
    },
    { 
      id: '2', 
      title: 'Neon Nightmares Expansion', 
      imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000',
      description: 'Recover the stolen prototype chip. Features a new horror-inspired story arc and nighttime weather effects.', 
      location: 'Vice Beach', 
      author: 'Cyber_Zero', 
      likes: 1800, 
      plays: 8500, 
      downloads: 28000,
      price: '$9.99',
      vibe: 'Cyberpunk Horror', 
      estimatedDifficulty: 'MEDIUM', 
      objectives: ['Find Factory Key', 'Locate Prototype', 'Survive Ambush'] 
    },
    { 
      id: '3', 
      title: 'Cartel Wars DLC', 
      imageUrl: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=1000',
      description: 'Disrupt major drug deals across the bridge. Adds 10+ hours of narrative content and 5 new cartel-themed vehicles.', 
      location: 'Little Havana', 
      author: 'Don_Juarez', 
      likes: 3200, 
      plays: 25000, 
      downloads: 89000,
      price: '$14.99',
      vibe: 'Gritty Drugs War', 
      estimatedDifficulty: 'INSANE', 
      objectives: ['Wipe out Cartel', 'Secure 4 Briefcases', 'Rendezvous at Safehouse'] 
    },
    { 
      id: '4', 
      title: 'Skyline Snipers Asset Pack', 
      imageUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=1000',
      description: 'A sniper duel across the skyscrapers. Includes 4 legendary sniper rifles and sky-high penthouse assets.', 
      location: 'The Heights', 
      author: 'ShadowOps', 
      likes: 950, 
      plays: 4200, 
      downloads: 15600,
      price: '$2.99',
      vibe: 'Action Sandbox', 
      estimatedDifficulty: 'EASY', 
      objectives: ['Eliminate 5 Targets', 'Avoid Spotlights', 'Zip-line to Safety'] 
    },
    { 
      id: '5', 
      title: 'Sunken Treasures Pack', 
      imageUrl: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&q=80&w=1000',
      description: 'Dive deep into the coral reef. Adds underwater exploration mechanics and a submarine skin.', 
      location: 'Ocean Floor', 
      author: 'AquaExplorer', 
      likes: 1200, 
      plays: 7800, 
      downloads: 12000,
      price: 'FREE',
      vibe: 'Adventure Exploration', 
      estimatedDifficulty: 'HARD', 
      objectives: ['Locate Shipwreck', 'Retrieve Black Box', 'Watch out for Sharks'] 
    },
    { 
      id: '6', 
      title: 'Midnight Racer Mod', 
      imageUrl: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=1000',
      description: 'High-speed street race modules. Includes a custom car-tuning garage and illegal drag circuit.', 
      location: 'Airport Drag', 
      author: 'DriftMaster', 
      likes: 4500, 
      plays: 45000, 
      downloads: 125000,
      price: '$7.99',
      vibe: 'Arcade Racing', 
      estimatedDifficulty: 'MEDIUM', 
      objectives: ['Place 1st in Race', 'Perform 3 Tail-drifts', 'Evade 3-star Wanted Level'] 
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col gap-12">
        
        {/* Header & Filters */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="font-display font-black text-5xl uppercase tracking-tighter">
              COMMUNITY <span className="text-rockstar-orange">MARKET</span>
            </h1>
            <p className="text-white/40 uppercase tracking-[0.2em] text-xs font-mono">
              The First Decentralized RAGE-AI DLC Store
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-focus-within:text-rockstar-orange transition-colors" />
               <input 
                type="text" 
                placeholder="Search DLC pack..." 
                className="bg-white/5 border border-white/10 rounded-sm pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-rockstar-orange transition-colors w-64"
              />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-4 overflow-x-auto pb-4 border-b border-white/5">
          {['Top Rated', 'All Packs', 'Newest', 'Trending'].map((cat, i) => (
            <button 
              key={cat} 
              className={`px-6 py-2 text-xs font-display font-black uppercase tracking-widest whitespace-nowrap transition-all ${
                i === 0 ? 'bg-rockstar-orange text-black skew-x-[-12deg]' : 'text-white/40 hover:text-white'
              }`}
            >
              <span className={i === 0 ? 'skew-x-[12deg] inline-block' : ''}>{cat}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyMissions.map((mission, i) => (
            <motion.div
              key={mission.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="group gta-hud-card border-none hover:border-l-rockstar-orange transition-all hover:translate-x-2"
            >
              <div className="relative aspect-video bg-black overflow-hidden">
                <img 
                  src={mission.imageUrl} 
                  alt={mission.title}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 grayscale-[0.3] group-hover:grayscale-0"
                />
                
                <div className="absolute top-0 right-0 p-2 bg-black/80 font-mono text-[8px] uppercase tracking-widest text-rockstar-orange">
                  Asset ID: #{mission.id?.padStart(4, '0')}
                </div>

                <div className="absolute bottom-4 left-4 z-20">
                    <div className="flex items-center gap-2 mb-2">
                         <div className="w-2 h-2 bg-rockstar-orange animate-pulse" />
                    </div>
                    <h3 className="font-display font-black text-3xl uppercase italic tracking-tighter text-white drop-shadow-lg group-hover:text-rockstar-orange transition-colors">{mission.title}</h3>
                </div>
              </div>
              
              <div className="p-6 bg-black/60">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-[8px] font-bold px-2 py-0.5 bg-white/10 text-white/40 tracking-widest uppercase">
                    By {mission.author}
                  </div>
                  <div className="text-xl font-display font-black text-white italic tracking-tighter">
                    {mission.price}
                  </div>
                </div>
                
                <p className="text-white/40 text-xs line-clamp-2 mb-6 leading-relaxed">
                  {mission.description}
                </p>

                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5 text-[10px] text-white/40 font-mono uppercase">
                      <ThumbsUp className="w-3 h-3 text-rockstar-orange/50" />
                      {mission.likes?.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] text-white/40 font-mono uppercase">
                      <Download className="w-3 h-3 text-rockstar-orange/50" />
                      {(mission.downloads! / 1000).toFixed(1)}k DLs
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedMission(mission)}
                    className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 text-[10px] font-display font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all group/btn"
                  >
                    View Details
                    <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Briefing Modal */}
        <AnimatePresence>
          {selectedMission && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedMission(null)}
                className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              />
              
               <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="gta-hud-card border-rockstar-orange max-w-2xl w-full relative z-10 flex flex-col max-h-[80vh] overflow-y-auto"
              >
                {/* Modal Header */}
                <div className="relative aspect-video w-full bg-black">
                   <img 
                    src={selectedMission.imageUrl} 
                    alt={selectedMission.title}
                    className="w-full h-full object-cover opacity-60 contrast-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <button 
                    onClick={() => setSelectedMission(null)}
                    className="absolute top-4 right-4 p-2 bg-black/60 text-white/40 hover:text-white transition-colors z-30"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="p-8 border-b border-white/10 bg-black/40 sticky top-0 z-20">
                  
                  <h2 className="font-display font-black text-5xl uppercase tracking-tighter italic text-white mb-4 leading-none">
                    {selectedMission.title}
                  </h2>
                  
                  <div className="flex flex-wrap gap-4 font-mono text-[10px] uppercase text-rockstar-orange bg-white/5 py-2 px-3 border border-white/5">
                    <div className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {selectedMission.location}</div>
                    <div className="w-px h-3 bg-white/10" />
                    <div className="flex items-center gap-1"><Users className="w-3 h-3" /> By {selectedMission.author}</div>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col gap-8 bg-black/20">
                  <div className="flex flex-col gap-3">
                    <h4 className="text-white/40 text-[10px] uppercase font-bold tracking-[0.2em] mb-1">DLC Expansion Content</h4>
                    <p className="text-white/80 leading-relaxed italic border-l-2 border-rockstar-orange pl-6 py-2 bg-white/5 text-lg">
                      "{selectedMission.description}"
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">
                    <h4 className="text-white/40 text-[10px] uppercase font-bold tracking-[0.2em] flex items-center gap-2">
                       <Target className="w-3 h-3 text-rockstar-orange" /> Expansion Benefits
                    </h4>
                    <div className="flex flex-col gap-3 bg-black/30 p-4 border border-white/5">
                      {selectedMission.objectives?.map((obj, i) => (
                        <div key={i} className="flex gap-4 items-center group">
                          <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-white/5 font-display font-black text-xs text-rockstar-orange border border-white/5">
                            +
                          </div>
                          <span className="text-sm text-white/70 uppercase tracking-widest">{obj}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 p-6 border border-white/5 bg-black/40">
                    <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Purchase Price</span>
                        <div className="flex items-center gap-1 text-3xl font-display font-black text-white italic">
                           {(selectedMission as any).price}
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 text-right">
                        <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Community Trust</span>
                        <div className="flex gap-4 justify-end mt-1">
                          <div className="flex items-center gap-1.5 text-rockstar-orange">
                            <TrendingUp className="w-4 h-4" />
                            <span className="text-xl font-display font-black leading-none">{((selectedMission.likes! / 1000)).toFixed(1)}k</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-rockstar-orange">
                            <Download className="w-4 h-4" />
                            <span className="text-xl font-display font-black leading-none">{((selectedMission as any).downloads / 1000).toFixed(1)}k</span>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-black/60 border-t border-white/5 sticky bottom-0 z-20 flex gap-4">
                  <button 
                    onClick={() => setSelectedMission(null)}
                    className="flex-1 border border-white/20 text-white px-8 py-4 font-display font-black uppercase text-sm tracking-widest hover:bg-white/10 transition-all"
                  >
                    Dismiss
                  </button>
                  <button className="flex-[2] bg-rockstar-orange text-black px-8 py-4 font-display font-black uppercase text-sm skew-x-[-12deg] hover:bg-white transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,128,0,0.2)]">
                    <Download className="w-5 h-5" />
                    <span className="skew-x-[12deg]">Purchase DLC pack</span>
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Load More/Pagination */}
        <div className="flex justify-center mt-8">
           <button className="bg-white/5 border border-white/10 px-12 py-4 font-display font-black uppercase text-sm tracking-[0.2em] hover:bg-white/10 hover:border-rockstar-orange transition-all">
            Load More Creations
           </button>
        </div>
      </div>
    </div>
  );
}
