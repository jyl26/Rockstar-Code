/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Gamepad2, 
  Sparkles, 
  Users, 
  FolderHeart,
  LayoutDashboard, 
  Menu, 
  X,
  ChevronRight,
  Play
} from 'lucide-react';
import Hero from './components/Hero';
import CreatorStudio from './components/CreatorStudio';
import Marketplace from './components/Marketplace';
import SavedProjects from './components/SavedProjects';
import Dashboard from './components/Dashboard';

type View = 'LANDING' | 'STUDIO' | 'COMMUNITY' | 'SAVED' | 'DASHBOARD';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('LANDING');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'LANDING', label: 'Home', icon: Gamepad2 },
    { id: 'STUDIO', label: 'Studio', icon: Sparkles },
    { id: 'COMMUNITY', label: 'Community', icon: Users },
    { id: 'SAVED', label: 'Saved', icon: FolderHeart },
    { id: 'DASHBOARD', label: 'Dashboard', icon: LayoutDashboard },
  ];

  const renderView = () => {
    switch (currentView) {
      case 'LANDING': return <Hero onStart={() => setCurrentView('STUDIO')} />;
      case 'STUDIO': return <CreatorStudio />;
      case 'COMMUNITY': return <Marketplace />;
      case 'SAVED': return <SavedProjects />;
      case 'DASHBOARD': return <Dashboard />;
      default: return <Hero onStart={() => setCurrentView('STUDIO')} />;
    }
  };

  return (
    <div className="min-h-screen bg-rockstar-black text-white relative overflow-x-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-rockstar-orange/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-rockstar-orange/10 blur-[120px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 gta-blur border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => setCurrentView('LANDING')}
          >
            <div className="w-10 h-10 bg-rockstar-orange rounded flex items-center justify-center font-display font-black text-2xl skew-x-[-12deg] group-hover:bg-white group-hover:text-rockstar-orange transition-colors">
              R
            </div>
            <span className="font-display font-bold text-2xl tracking-tighter uppercase italic">
              ROCKSTAR <span className="text-rockstar-orange">CODE</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id as View)}
                className={`relative px-2 py-1 text-sm font-display font-medium uppercase tracking-widest transition-all hover:text-rockstar-orange ${
                  currentView === item.id ? 'text-rockstar-orange' : 'text-white/60'
                }`}
              >
                {item.label}
                {currentView === item.id && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute -bottom-[17px] left-0 right-0 h-1 bg-rockstar-orange"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setCurrentView('STUDIO')}
              className="hidden md:flex items-center gap-2 bg-white text-black px-6 py-2 rounded-sm font-display font-bold uppercase text-sm skew-x-[-12deg] hover:bg-rockstar-orange hover:text-white transition-all transform hover:scale-105"
            >
              <span className="skew-x-[12deg]">Get Started</span>
              <ChevronRight className="w-4 h-4 skew-x-[12deg]" />
            </button>
            
            <button 
              className="md:hidden p-2 text-white/60 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-rockstar-black/95 flex flex-col items-center justify-center pt-24"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentView(item.id as View);
                  setIsMenuOpen(false);
                }}
                className={`flex items-center gap-4 text-3xl font-display font-bold uppercase py-6 ${
                  currentView === item.id ? 'text-rockstar-orange' : 'text-white/40'
                }`}
              >
                <item.icon className="w-8 h-8" />
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="relative z-10 pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Branding */}
      <footer className="relative z-10 py-12 px-6 border-t border-white/5 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white text-black rounded flex items-center justify-center font-display font-black text-xl skew-x-[-12deg]">
              R
            </div>
            <span className="font-display font-bold text-lg uppercase tracking-widest italic">Rockstar Games</span>
          </div>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-mono">
            <span>© 2026 Rockstar Games Inc.</span>
            <a href="#" className="hover:text-rockstar-orange transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-rockstar-orange transition-colors">Legal</a>
            <a href="#" className="hover:text-rockstar-orange transition-colors">Code Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
