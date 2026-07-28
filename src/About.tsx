import { motion } from 'framer-motion';


export default function About() {
    
    const infoBlocks = [
        { title: "Projects", value: "12+" },
        { title: "Age", value: "20" },
        { title: "Confidence", value: "50%" },
        { title: "CityU Year", value: "3" }
    ];
    return (
<section id="about" className="py-24 px-6 bg-gradient-to-b from-blue-50 to-white">
            {/* 這是最外層的容器，負責將「文字區」與「方塊區」左右排列 */}
            <div className="flex flex-col md:flex-row gap-12  px-4">
                
                {/* 左側區塊：文字區 (ABOUT ME + 介紹) */}
                <div className="md:w-1/2">
                    <motion.h1 
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 0.4, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1.2 }}
                        className="text-5xl font-black text-gray-700 mb-4 italic "
                        style={{
                        WebkitTextStroke: '2px #000718', // 藍色描邊
                        WebkitTextFillColor: '#69947a'              // 內部鏤空
                        }}>
                        ABOUT ME
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, x: -300 }}
                        whileInView={{ opacity: 0.4, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 1, duration: 1.2 }}
                        className="text-lg font-black text-gray-700 mb-4 px-10 " >
                        I'm a <span className="text-blue-600 font-extrabold">YEAR 3 Computer Science</span> student at City University of Hong Kong. 
                        I have a strong passion for <span className="text-blue-600 font-extrabold">Web Development</span> and <span className="text-blue-600 font-extrabold">UI/UX Design</span>.
                        I enjoy coding some random hands-on projects. My goal is to continuously improve my skills and contribute them somewhere meaningful.
                    </motion.p>
                </div>

                {/* 右側區塊：Box 區 (獨立出來！) */}
                <div className="md:w-1/2 grid grid-cols-2 gap-4">
                    {infoBlocks.map((block, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center"
                        >
                            <h3 className="text-sm text-gray-400 uppercase tracking-widest">{block.title}</h3>
                            <p className="text-3xl font-bold text-blue-600 mt-2">{block.value}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}