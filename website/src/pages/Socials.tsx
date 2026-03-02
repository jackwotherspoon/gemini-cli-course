import { motion } from 'framer-motion';
import { Download, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export const Socials = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const colors = [
    { name: 'AI Layer (Start)', hex: '#fb7185', description: 'Top layer gradient start' },
    { name: 'AI Layer (End)', hex: '#e11d48', description: 'Top layer gradient end' },
    { name: 'Logic Layer (Start)', hex: '#818cf8', description: 'Middle layer gradient start' },
    { name: 'Logic Layer (End)', hex: '#6366f1', description: 'Middle layer gradient end' },
    { name: 'Data Layer (Start)', hex: '#4338ca', description: 'Bottom layer gradient start' },
    { name: 'Data Layer (End)', hex: '#312e81', description: 'Bottom layer gradient end' },
  ];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
              Social <span className="text-primary-600">Kit</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
              Help us spread the word about TechStack Conference 2026. Use our official branding assets and tags.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
             <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg text-sm font-bold border border-primary-200 dark:border-primary-800">
               @TechStack2026
             </span>
             <span className="px-4 py-2 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 rounded-lg text-sm font-bold border border-secondary-200 dark:border-secondary-800">
               #TechStack2026
             </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Logo Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-l-4 border-primary-600 pl-4">Official Logo</h2>
            <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-12 flex items-center justify-center relative group overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:20px_20px]"></div>
              <img src="/logo.svg" alt="TechStack Logo" className="h-64 w-64 relative z-10 drop-shadow-2xl" />
              <div className="absolute top-4 right-4 flex gap-2 z-20">
                <a 
                  href="/logo.svg" 
                  download 
                  className="p-3 bg-white dark:bg-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-slate-600 dark:text-slate-200"
                  title="Download SVG"
                >
                  <Download className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-slate-600 dark:text-slate-400">
                The TechStack logo represents the vertical integration of modern computing. Three distinct layers symbolize 
                the transition from <span className="font-semibold text-indigo-600 dark:text-indigo-400">Infrastructure</span> (Bottom), 
                through <span className="font-semibold text-indigo-500">Logic & Processing</span> (Middle), 
                to <span className="font-semibold text-rose-500">AI & Intelligence</span> (Top).
              </p>
            </div>
          </section>

          <div className="space-y-12">
            {/* Social Handle & Tags */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-l-4 border-secondary-500 pl-4">Social Tagging</h2>
              <div className="bg-gradient-to-br from-[#4f46e5] via-[#6366f1] to-[#e11d48] rounded-2xl p-8 text-white relative group shadow-xl shadow-primary-500/20">
                <div className="text-4xl md:text-5xl font-black tracking-tighter mb-2">@TechStack2026</div>
                <p className="text-primary-100 font-medium">Use this handle on X, LinkedIn, and Threads</p>
                
                <button 
                  onClick={() => handleCopy('@TechStack2026', 'tag')}
                  className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-lg backdrop-blur-sm transition-colors"
                  title="Copy Tag"
                >
                  {copied === 'tag' ? <Check className="h-5 w-5 text-green-400" /> : <Copy className="h-5 w-5" />}
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {['#TechStack2026', '#AIRevolution', '#FullStackFuture', '#WebDev2026'].map(tag => (
                  <button 
                    key={tag}
                    onClick={() => handleCopy(tag, tag)}
                    className="flex items-center justify-between px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-700 dark:text-slate-300 hover:border-primary-500 transition-colors group"
                  >
                    <span className="font-mono text-sm">{tag}</span>
                    {copied === tag ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />}
                  </button>
                ))}
              </div>
            </section>

            {/* Colors Section */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-l-4 border-primary-400 pl-4">Brand Colors</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {colors.map((color) => (
                  <div key={color.name} className="space-y-2 group">
                    <div 
                      className="h-20 rounded-2xl shadow-lg border border-black/5 dark:border-white/5 transition-transform group-hover:scale-105" 
                      style={{ backgroundColor: color.hex }}
                    />
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase leading-none mb-1">{color.name}</p>
                      <button 
                        onClick={() => handleCopy(color.hex, color.hex)}
                        className="text-sm font-mono font-bold text-slate-700 dark:text-slate-200 hover:text-primary-600 flex items-center gap-1"
                      >
                        {color.hex}
                        {copied === color.hex ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3 opacity-0 group-hover:opacity-100" />}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Typography Section */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-l-4 border-slate-400 pl-4">Typography</h2>
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8">
                <div className="flex items-baseline justify-between mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Primary Typeface</span>
                  <span className="text-2xl font-sans font-black text-slate-900 dark:text-white">Inter Variable</span>
                </div>
                <div className="space-y-4">
                  <p className="text-4xl font-black tracking-tight text-slate-900 dark:text-white leading-none">AaBbCc123</p>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Designed for clarity and precision in high-performance interfaces. Use <span className="text-slate-900 dark:text-white font-bold">Extra Bold</span> for impact and <span className="text-slate-900 dark:text-white font-medium">Regular</span> for extended reading.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
