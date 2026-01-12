import { AiOutlineOpenAI } from "react-icons/ai";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaPython,
  FaJava,
  FaDatabase,
  FaBootstrap,
  FaKaggle,
  FaNode,
} from "react-icons/fa";
import { FcScatterPlot } from "react-icons/fc";
import { GrMysql } from "react-icons/gr";
import { IoLogoVercel } from "react-icons/io5";
import { RiGeminiFill } from "react-icons/ri";
import {
  SiRedux,
  SiTailwindcss,
  SiJupyter,
  SiAnaconda,
  SiGithub,
  SiCplusplus,
  SiC,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiExpress,
  SiMongodb,
  SiSupabase,
  SiPostman,
  SiGithubcopilot,
  SiRender,
  SiClaude,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skills = ({isDarkMode}) => {
  const skillsData = [
    {
      category: "Frontend Development",
      icons: [
        { icon: FaHtml5, name: "HTML5" },
        { icon: FaCss3Alt, name: "CSS3" },
        { icon: FaJsSquare, name: "JavaScript" },
        { icon: FaReact, name: "React.js" },
        { icon: SiRedux, name: "Redux toolkit" },
        { icon: SiTailwindcss, name: "Tailwind CSS" },
        { icon: FaBootstrap, name: "Bootstrap" },
      ],
    },
    {
      category: "Data Analysis & ML",
      icons: [
        { icon: FaPython, name: "Python" },
        { icon: FaDatabase, name: "SQL" },
        { icon: SiJupyter, name: "Jupyter" },
        { icon: SiAnaconda, name: "Anaconda" },
        { icon: SiPandas, name: "Pandas" },
        { icon: SiNumpy, name: "Numpy" },
        { icon: SiScikitlearn, name: "Scikit-learn" },
        { icon: FcScatterPlot, name: "Matplotlib" },
        {icon:FaKaggle,name:"Kaggle"},
      ],
    },
    {
      category: "Backend and Database",
      icons: [
        {icon:FaNode, name:"Node.js"},
        {icon:SiExpress, name:"Express.js"},
        {icon:GrMysql, name:"MySQL"},
        {icon:SiMongodb, name:"MongoDB"},
        {icon:SiSupabase, name:"Supabase"},
        {icon:SiPostman, name:"Postman"},
      ],
    },
    {
      category: "Languages",
      icons: [
        { icon: FaPython, name: "Python" },
        { icon: FaJava, name: "Java" },
        { icon: SiCplusplus, name: "C++" },
        { icon: SiC, name: "C" },
        { icon: FaJsSquare, name: "JavaScript" },
      ],
    },
    {
      category: "Tools",
      icons: [
        { icon: VscVscode, name: "VsCode" },
        { icon: FaGitAlt, name: "Git" },
        { icon: SiGithub, name: "GitHub" },
        {icon:SiGithubcopilot, name:"GitHub Copilot"},
        { icon: IoLogoVercel, name: "Vercel" },
        {icon:SiRender, name:"Render"},
        { icon: AiOutlineOpenAI, name: "OpenAI" },
        { icon: RiGeminiFill, name: "Gemini" },
        {icon:SiClaude, name:"Claude"},
      ],
    },
  ];

  return (
    <section id="Skills" className={`${isDarkMode?'bg-[#171d32]':'bg-gray-100'} px-10 pb-10 md:px-24 md:pb-24`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold md:text-center ${isDarkMode? 'text-white':'text-black'} mb-12`}>
          My Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skillsData.map((skillCategory, index) => (
            <div
              key={index}
              className={`${isDarkMode?'bg-gray-800':'bg-gray-300'} rounded-lg shadow-xl p-6 transform hover:scale-105 transition-transform duration-300`}
            >
              <h3 className="text-2xl font-semibold text-sky-400 mb-6 text-center">
                {skillCategory.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {skillCategory.icons.map((tech, i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-center ${isDarkMode?'text-gray-200':'text-black'}`}
                  >
                    <tech.icon className={`w-10 h-10 md:w-12 md:h-12 ${isDarkMode?'text-white':'text-black'} hover:text-sky-400 transition-colors duration-300`} />
                    <span className="text-xs mt-2 text-center">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
