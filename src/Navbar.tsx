interface NavItem {
    name: string;
    link: string;
}

const navItems: NavItem[] = [
    { name: 'About', link: '#about' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contact', link: '#contact' },
];

export default function Navbar() {
    return (
        
       <nav className="relative flex flex-col items-center p-6 bg-gradient-to-r from-blue-300 to-pink-400 border-b border-white/30 shadow-[0_10px_20px_rgba(0,0,0,0.1)] overflow-hidden">
  
  {/* 光晕：这里调低了 opacity 并在 nav 里保持相对定位 */}
  <div className="absolute top-[-20px] left-[-20px] w-64 h-64 bg-pink-200 rounded-full blur-3xl opacity-60 z-0"></div>
  <div className="absolute bottom-[-20px] right-[-20px] w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-60 z-0"></div>

           <div className="relative z-10 text-3xl font-black text-gray-300 tracking-tighter drop-shadow-[0_5px_5px_rgba(20,30,30,30)] ">
            Chenmei <span className="text-blue-900/50 drop-shadow-lg">Profile</span>
           </div>
        <div className="flex gap-2 justify-center mt-3">
        <div className="w-2 h-2 rounded-full bg-white/50"></div>
        <div className="w-8 h-2 rounded-full bg-white/30"></div>
        <div className="w-2 h-2 rounded-full bg-white/50"></div>
        </div>
           <div className="relative z-10 grid grid-cols-4 gap-20 mt-4 ">
            {navItems.map((item) => (
                <a key={item.name} href={item.link} className="flex items-center justify-center bg-white/80 backdrop-blur-sm text-gray-700 shadow-md rounded-xl px-6 py-2 border border-white/50 transition-all duration-300 hover-breathing font-medium">
                    {item.name}
                </a>
            ))}
            
            <a href="https://github.com/s01a2y023-ops" target="_blank" className="flex items-center justify-center bg-white/80 backdrop-blur-sm text-gray-700 shadow-md rounded-xl px-6 py-2 border border-white/50 transition-all duration-300 hover-breathing font-medium">
                GitHub
            </a>
           </div>
        </nav>
    );
};