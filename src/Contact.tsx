import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Phone} from 'lucide-react';

export default function Contact() {
   const contactLinks = [
    { 
        name: "Email", 
        value: "s01a2y023@gmail.com", 
        icon: <Mail size={20} /> 
    },

    { 
        name: "Location", 
        value: "Hong Kong", 
        icon: <MapPin size={20} /> 
    },
    
    { 
        name: "Phone", 
        value: "+852 94580174", 
        icon: <Phone size={20} /> 
    }
];

    return (
        <section id="contact" className="py-24 px-6 bg-gradient-to-t from-blue-50 to-white">
            <div className="max-w-4xl mx-auto text-center">
                
                {/* 標題動畫 */}
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl font-black text-blue-900 mb-12"
                >
                    GET IN TOUCH
                </motion.h2>

                {/* 聯絡資訊卡片 */}
                <div className="grid md:grid-cols-3 gap-6">
                    {contactLinks.map((link, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="bg-white/60 backdrop-blur-lg p-8 rounded-3xl border border-white/60 shadow-lg hover:shadow-2xl transition-all"
                        >
                            <div className="text-blue-500 flex justify-center mb-4">
                                {link.icon}
                            </div>
                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">{link.name}</h3>
                            <p className="text-blue-900 font-medium mt-2">{link.value}</p>
                        </motion.div>
                    ))}
                </div>

                {/* 底部行動呼籲 (Optional) */}
{/* 聯絡按鈕區 */}
                <div className="flex flex-col sm:flex-row justify-center gap-6 py-6">
                    
                    {/* IG DM 按鈕 */}
                    <motion.a
                        href="https://www.instagram.com/larry_chan0901/" // 👈 這裡換成你的 IG 帳號
                        target="_blank"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center gap-3 bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-500 text-white px-8 py-4 rounded-full font-bold shadow-lg transition-all"
                    >
                        <Send size={20} /> Message on Instagram
                    </motion.a>
            </div>
            {/* 加入這段作為底部裝飾線，模仿 Navbar 的底線風格 */}
            <div className="mt-24 w-full h-1 bg-gradient-to-r from-blue-300 via-pink-400 to-blue-300 opacity-50 rounded-full"></div>
            
            {/* 簡單的版權資訊，讓 footer 感覺更完整 */}
            <p className="text-center text-gray-400 text-sm mt-8">
                © {new Date().getFullYear()} Chenmei Profile. Built with Passion.
            </p>
            </div>
        </section>
    );
}