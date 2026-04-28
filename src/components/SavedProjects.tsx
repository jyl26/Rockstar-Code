import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  Trash2, 
  Share2, 
  MapPin, 
  Users, 
  Zap, 
  Target,
  Download,
  FolderHeart,
  ChevronRight,
  TrendingUp,
  Search
} from 'lucide-react';
import { GeneratedMission } from '../types';

const SAVED_PROJECTS: Partial<GeneratedMission>[] = [
  {
    id: '102',
    title: "NEON HEIST",
    description: "A high-stakes robbery in the heart of Vice City's commercial district.",
    likes: 850,
    downloads: 12400,
    location: "Little Havana",
    author: "You",
    vibe: "Neon-Noir",
    objectives: ["Infiltrate the vault", "Fend off waves of security", "High speed getaway"]
  },
  {
    id: '105',
    title: "GHOST RIDE",
    description: "Cybernetic motorcycle chase across the bridge during a lightning storm.",
    likes: 420,
    downloads: 5600,
    location: "Ocean Drive",
    author: "You",
    vibe: "Cyberpunk",
    objectives: ["Retrieve the prototype bike", "Dodge EMP traps", "Lose the tail"]
  }
];

export default function SavedProjects() {
  const [selectedProject, setSelectedProject] = useState<Partial<GeneratedMission> | null>(null);

  const categories = ["All Saves", "Drafts", "Published"];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12"
      >
        <div className="flex flex-col gap-2">
          <h1 className="font-display font-black text-5xl uppercase tracking-tighter">
            YOUR <span className="text-rockstar-orange">LIBRARY</span>
          </h1>
          <p className="text-white/40 uppercase tracking-[0.2em] text-xs font-mono">
            Personal Archive // Private Access Only
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-focus-within:text-rockstar-orange transition-colors" />
             <input 
              type="text" 
              placeholder="Search your library..." 
              className="bg-white/5 border border-white/10 rounded-sm pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-rockstar-orange transition-colors w-64"
            />
          </div>
        </div>
      </motion.div>

      {/* Categories */}
      <div className="flex gap-4 mb-12 overflow-x-auto pb-4 no-scrollbar">
        {categories.map((cat, i) => (
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
        {SAVED_PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="group gta-hud-card border-none hover:border-l-rockstar-orange transition-all hover:translate-x-2"
          >
            <div className="relative aspect-video bg-black overflow-hidden cursor-pointer" onClick={() => setSelectedProject(project)}>
              <img 
                src={`https://picsum.photos/seed/${project.id}/800/450`} 
                alt={project.title}
                className="w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 grayscale-[0.3] group-hover:grayscale-0"
              />
              
              <div className="absolute top-0 right-0 p-3 bg-black/80 font-mono text-[8px] uppercase tracking-widest text-rockstar-orange">
                SAVED: {project.id}
              </div>

              <div className="absolute bottom-4 left-4 z-20">
                  <div className="flex items-center gap-2 mb-2">
                       <div className="w-2 h-2 bg-rockstar-orange animate-pulse" />
                  </div>
                  <h3 className="font-display font-black text-3xl uppercase italic tracking-tighter text-white drop-shadow-lg group-hover:text-rockstar-orange transition-colors">{project.title}</h3>
              </div>
            </div>
            
            <div className="p-6 bg-rockstar-gray/30">
              <p className="text-white/40 text-xs line-clamp-2 mb-6 font-medium leading-relaxed">
                {project.description}
              </p>

              <div className="flex items-center justify-between border-t border-white/5 pt-4">
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-white/40 hover:text-white transition-colors cursor-pointer">
                    <Trash2 className="w-4 h-4 hover:text-red-500" />
                  </div>
                  <div className="flex items-center gap-2 text-white/40 hover:text-white transition-colors cursor-pointer">
                    <Share2 className="w-4 h-4 hover:text-rockstar-orange" />
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="bg-white/5 hover:bg-rockstar-orange hover:text-black p-2 transition-all"
                >
                  <Play className="w-4 h-4 fill-current" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
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
                  src={`https://picsum.photos/seed/${selectedProject.id}/1200/675`} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover opacity-60"
                />
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 z-30 p-2 bg-black/50 text-white hover:text-rockstar-orange transition-colors"
                >
                  <FolderHeart className="w-6 h-6 rotate-180" />
                </button>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                
                <div className="absolute bottom-8 left-8 z-20">
                  <h2 className="font-display font-black text-5xl uppercase italic tracking-tighter text-white mb-4">
                    {selectedProject.title}
                  </h2>
                  
                  <div className="flex flex-wrap gap-4 font-mono text-[10px] uppercase text-rockstar-orange bg-white/5 py-2 px-3 border border-white/5">
                    <div className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {selectedProject.location}</div>
                    <div className="w-px h-3 bg-white/10" />
                    <div className="flex items-center gap-1"><Users className="w-3 h-3" /> Created by You</div>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-8 flex-1 flex flex-col gap-8 bg-black/20">
                <div className="flex flex-col gap-3">
                  <h4 className="text-white/40 text-[10px] uppercase font-bold tracking-[0.2em] mb-1">Mission Script Archive</h4>
                  <p className="text-white/80 leading-relaxed italic border-l-2 border-rockstar-orange pl-6 py-2 bg-white/5 text-lg">
                    "{selectedProject.description}"
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <h4 className="text-white/40 text-[10px] uppercase font-bold tracking-[0.2em] flex items-center gap-2">
                     <Target className="w-3 h-3 text-rockstar-orange" /> Active Parameters
                  </h4>
                  <div className="flex flex-col gap-3 bg-black/30 p-4 border border-white/5">
                    {selectedProject.objectives?.map((obj, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                        <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-white/5 font-display font-black text-xs text-rockstar-orange border border-white/5">
                          {i + 1}
                        </div>
                        <span className="text-sm text-white/70 uppercase tracking-widest">{obj}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="flex items-center justify-between border-t border-white/10 pt-8">
                  <div className="flex flex-col gap-1 text-left">
                      <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Inference Engine</span>
                      <div className="flex gap-4 justify-start mt-1">
                        <div className="flex items-center gap-1.5 text-rockstar-orange">
                          <Zap className="w-4 h-4" />
                          <span className="text-xl font-display font-black leading-none uppercase italic">Rockstar-V1</span>
                        </div>
                      </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="px-8 py-4 font-display font-black uppercase text-xs tracking-widest border border-white/20 hover:bg-white/10 transition-all"
                    >
                      Dismiss
                    </button>
                    <button className="bg-rockstar-orange text-black px-8 py-4 font-display font-black uppercase text-sm skew-x-[-12deg] hover:bg-white transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,128,0,0.2)]">
                      <Play className="w-5 h-5 fill-current" />
                      <span className="skew-x-[12deg]">Launch Mission</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Empty State Mock */}
      <div className="mt-20 border border-dashed border-white/5 p-12 text-center rounded-sm">
        <FolderHeart className="w-12 h-12 text-white/10 mx-auto mb-4" />
        <p className="text-white/20 font-mono text-xs uppercase tracking-widest">End of Archive</p>
      </div>
    </div>
  );
}
