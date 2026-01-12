
import { IoArrowForward } from "react-icons/io5"
const About=({isDarkMode})=>{
return(
<div id="About" className={`md:flex overflow-hidden items-center md:flex-wrap md:justify-center  shadow-xl mx-0 md:mx-20 bg-opacity-30      rounded-xl md:rounded-full p-12 ${isDarkMode?'bg-black text-white':'bg-gray-400 text-gray-900'}`}>
    <div>
        <h2 className="text-2xl md:text-4xl font-bold md:text-center md:mb-5">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
            <ul>
                <div className="flex gap-3 py-4">
                    <IoArrowForward size={30} className="mt-1"/>
                    <span className="w-96">
<h1 className="text-xl md:text-2xl font-semibold leading-normal">Full-Stack MERN Developer</h1>
<p className="text-sm md:text-md leading-tight">
   As a Full-Stack MERN Developer, I specialize in building scalable, high-performance web applications from concept to deployment. I have strong expertise in HTML, CSS, and modern JavaScript, along with hands-on experience in React for crafting intuitive, responsive, and accessible user interfaces. On the backend, I work with Node.js, Express.js, and MongoDB to design robust APIs, manage databases, and implement secure, efficient server-side logic. I am passionate about writing clean, maintainable code, optimizing application performance, and delivering seamless user experiences. Always eager to learn and adapt, I continuously explore new tools and technologies to build reliable, impactful digital products.
</p>
                    </span>
                </div>
                <div className="flex gap-3 py-4">
                    <IoArrowForward size={30} className="mt-1"/>
                    <span className="w-96">
<h1 className="text-xl md:text-2xl font-semibold leading-normal">Data Analyst</h1>
<p className="text-sm md:text-md leading-tight">
   Beyond building interfaces, I have a deep passion for data and its power to drive decisions. As a data enthusiast, I am proficient in using SQL to query complex databases and Python—with libraries like Pandas and Matplotlib—to clean, analyze, and visualize information. I enjoy the entire process of uncovering hidden patterns and transforming raw data into actionable insights that solve real-world problems.
</p>
                    </span>
                </div>
                <div className="flex gap-3 py-4">
                    <IoArrowForward size={30} className="mt-1"/>
                    <span className="w-96">
<h1 className="text-xl md:text-2xl font-semibold leading-normal">The Passionate Problem-Solver</h1>
<p className="text-sm md:text-md leading-tight">
   I have a strong passion for problem-solving, which I regularly cultivate through competitive programming. Actively participating in contests on platforms like LeetCode and Codeforces has sharpened my abilities in algorithms, data structures, and logical reasoning. I enjoy the challenge of deconstructing complex problems and translating them into efficient, elegant code under pressure.
</p>
                    </span>
                </div>
            </ul>
        </div>
    </div>
</div>
)
}
export default About