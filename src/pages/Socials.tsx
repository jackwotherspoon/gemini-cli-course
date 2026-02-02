import { motion } from 'framer-motion';

export const Socials = () => {
  const colors = [
    { name: 'Rose', hex: '#e11d48', gradient: 'from-[#fb7185] to-[#e11d48]' },
    { name: 'Indigo', hex: '#6366f1', gradient: 'from-[#818cf8] to-[#6366f1]' },
    { name: 'Dark Indigo', hex: '#312e81', gradient: 'from-[#4338ca] to-[#312e81]' },
  ];

  const fonts = [
    { name: 'Primary Font', value: 'Inter, sans-serif' },
    { name: 'Monospace', value: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace' },
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-slate-950 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-800"
        >
          <div className="p-8 md:p-12">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Social Kit</h1>
            <p className="text-slate-600 dark:text-slate-400 mb-12 max-w-2xl">
              Everything you need to share the TechStack Conference 2026 story. 
              Our brand assets are designed to communicate innovation, connection, and the future of technology.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Logo Section */}
              <div className="space-y-8">
                <section>
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="w-8 h-[2px] bg-primary-600 dark:bg-primary-400"></span>
                    Official Logo
                  </h2>
                  <div className="bg-slate-100 dark:bg-slate-900/50 p-12 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800">
                    <img 
                      src="/logo.svg" 
                      alt="TechStack Conference Logo" 
                      className="w-48 h-48 drop-shadow-lg"
                    />
                  </div>
                  <div className="mt-4 flex gap-4">
                     <a 
                       href="/logo.svg" 
                       download
                       className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 flex items-center gap-1"
                     >
                       Download SVG
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                     </a>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="w-8 h-[2px] bg-primary-600 dark:bg-primary-400"></span>
                    Typography
                  </h2>
                  <div className="grid gap-6">
                    {fonts.map((font) => (
                      <div key={font.name} className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                        <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">{font.name}</div>
                        <div className="text-lg font-medium text-slate-900 dark:text-white break-all" style={{ fontFamily: font.value.split(',')[0] }}>
                          {font.value}
                        </div>
                        <div className="mt-4 text-3xl text-slate-900 dark:text-white" style={{ fontFamily: font.value.split(',')[0] }}>
                          Aa Bb Cc 123
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Colors & Social Section */}
              <div className="space-y-12">
                 <section>
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="w-8 h-[2px] bg-primary-600 dark:bg-primary-400"></span>
                    Color Palette
                  </h2>
                  <div className="grid gap-4">
                    {colors.map((color) => (
                      <div key={color.name} className="group relative overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2 flex items-center gap-4 transition-all hover:shadow-md">
                         <div className={`w-16 h-16 rounded-lg shadow-inner bg-gradient-to-br ${color.gradient}`}></div>
                         <div>
                            <div className="font-semibold text-slate-900 dark:text-white">{color.name}</div>
                            <div className="text-sm font-mono text-slate-500 dark:text-slate-400 uppercase">{color.hex}</div>
                         </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="w-8 h-[2px] bg-primary-600 dark:bg-primary-400"></span>
                    Social Media
                  </h2>
                  <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 text-white shadow-xl relative overflow-hidden">
                    <div className="relative z-10">
                      <div className="text-slate-400 text-sm font-medium mb-2">Official Hashtag</div>
                      <div className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-rose-400">
                        #TechStack2026
                      </div>
                      <div className="mt-8 flex gap-4 flex-wrap">
                         <button className="bg-white/10 hover:bg-white/20 border border-white/10 rounded-full px-6 py-2 text-sm font-medium transition-colors">
                           Copy Hashtag
                         </button>
                      </div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-primary-500/20 blur-3xl rounded-full"></div>
                    <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-rose-500/20 blur-3xl rounded-full"></div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
