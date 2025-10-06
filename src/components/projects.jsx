import ML_model from "../assets/ML_model.png"
import weatherAppImg from '../assets/weather_app.png';
import myntraCloneImg from '../assets/myntra_clone.png';
import game from "../assets/tic-tac-toe.png"
import todo from "../assets/todoapp.png"
const Projects = ({isDarkMode}) => {
  return (
    <div id="Projects" className="px-10 pb-10 md:px-24 md:pb-24 text-white">
      <h1 className={`text-2xl md:text-4xl ${isDarkMode?'text-white':'text-black'} font-bold md:text-center`}>
        Projects
      </h1>
      <div className="py-12 px-8 flex flex-wrap gap-10 justify-center">

        {/*weather app*/}
        <div className={`p-3 md:p-6 flex flex-col w-80 ${isDarkMode?'bg-[#0c0e19]':'bg-gray-400'} shadow-xl shadow-slate-900 rounded-2xl hover:scale-105 transition-transform duration-300`}>
          <img src={weatherAppImg} alt="" className="p-0 rounded-2xl" />
          <h3 className={`px-4 text-xl md:text-2xl font-bold leading-normal ${isDarkMode?'text-white':'text-black'}`}>
            Weather App
          </h3>
          <div className="flex flex-wrap gap-2 px-2 mt-4">
            <span className="bg-red-900/60 text-red-200 text-xs font-medium px-3 py-1 rounded-md">
              React
            </span>
            <span className="bg-red-900/60 text-red-200 text-xs font-medium px-3 py-1 rounded-md">
              Redux
            </span>
            <span className="bg-red-900/60 text-red-200 text-xs font-medium px-3 py-1 rounded-md">
              API
            </span>
          </div>
          <div className="mt-2 p-2 md:p-0 flex gap-2 md:gap-4 text-center">
            <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              <a
                href="https://weather-app-ten-sandy-36.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit 🚀
              </a>
            </button>
            <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              <a
                href="https://github.com/Arijit-29/Weather_App"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
            </button>
          </div>
        </div>

        {/*myntra clone*/}
        <div className={`p-3 md:p-6 flex flex-col w-80 ${isDarkMode?'bg-[#0c0e19]':'bg-gray-400'} shadow-xl shadow-slate-900 rounded-2xl hover:scale-105 transition-transform duration-300`}>
          <img src={myntraCloneImg} alt="" className="p-0 rounded-2xl" />
          <h3 className={`px-4 text-xl md:text-2xl font-bold leading-normal ${isDarkMode?'text-white':'text-black'}`}>
            Myntra Clone
          </h3>
          <div className="flex flex-wrap gap-2 px-2 mt-4">
            <span className="bg-red-900/60 text-red-200 text-xs font-medium px-3 py-1 rounded-md">
              Html
            </span>
            <span className="bg-red-900/60 text-red-200 text-xs font-medium px-3 py-1 rounded-md">
              Css
            </span>
            <span className="bg-red-900/60 text-red-200 text-xs font-medium px-3 py-1 rounded-md">
              Js
            </span>
          </div>
          <div className="mt-2 p-2 md:p-0 flex gap-2 md:gap-4 text-center">
            <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              <a
                href="https://myntra-clone-5xca3r77y-arijit-chatterjees-projects-0f8f2fd1.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit 🚀
              </a>
            </button>
            <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              <a
                href="https://github.com/Arijit-29/Myntra_Clone"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
            </button>
          </div>
        </div>


        {/*ML model*/}
        <div className={`p-3 md:p-6 flex flex-col w-80 ${isDarkMode?'bg-[#0c0e19]':'bg-gray-400'} shadow-xl shadow-slate-900 rounded-2xl hover:scale-105 transition-transform duration-300`}>
          <img src={ML_model} alt="" className="p-0 rounded-2xl" />
          <h3 className={`px-4 text-xl md:text-2xl font-bold leading-normal ${isDarkMode?'text-white':'text-black'}`}>
            Placement Predictor
          </h3>
          <div className="flex flex-wrap gap-2 px-2 mt-4">
            <span className="bg-red-900/60 text-red-200 text-xs font-medium px-3 py-1 rounded-md">
              python
            </span>
            <span className="bg-red-900/60 text-red-200 text-xs font-medium px-3 py-1 rounded-md">
              jupyter
            </span>
            <span className="bg-red-900/60 text-red-200 text-xs font-medium px-3 py-1 rounded-md">
              ml
            </span>
          </div>
          <div className="mt-2 p-2 md:p-0 flex gap-2 md:gap-4 text-center">
            <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              <a
                href="https://github.com/Arijit-29/placement_predictor"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
            </button>
          </div>
        </div>

        {/*tic tac toe game*/}
        <div className={`p-3 md:p-6 flex flex-col w-80 ${isDarkMode?'bg-[#0c0e19]':'bg-gray-400'} shadow-xl shadow-slate-900 rounded-2xl hover:scale-105 transition-transform duration-300`}>
          <img src={game} alt="" className="p-0 rounded-2xl" />
          <h3 className={`px-4 text-xl md:text-2xl font-bold leading-normal ${isDarkMode?'text-white':'text-black'}`}>
            Tic-Tac-toe game
          </h3>
          <div className="flex flex-wrap gap-2 px-2 mt-4">
            <span className="bg-red-900/60 text-red-200 text-xs font-medium px-3 py-1 rounded-md">
              Html
            </span>
            <span className="bg-red-900/60 text-red-200 text-xs font-medium px-3 py-1 rounded-md">
              Css
            </span>
            <span className="bg-red-900/60 text-red-200 text-xs font-medium px-3 py-1 rounded-md">
              Js
            </span>
          </div>
          <div className="mt-2 p-2 md:p-0 flex gap-2 md:gap-4 text-center">
            <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              <a
                href="https://tic-tac-no9vl6aa6-arijit-chatterjees-projects-0f8f2fd1.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit 🚀
              </a>
            </button>
            <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              <a
                href="https://github.com/Arijit-29/TicTacToe"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
            </button>
          </div>
        </div>

 {/*todoapp */}
 <div className={`p-3 md:p-6 flex flex-col w-80 ${isDarkMode?'bg-[#0c0e19]':'bg-gray-400'} shadow-xl shadow-slate-900 rounded-2xl hover:scale-105 transition-transform duration-300`}>
          <img src={todo} alt="" className="p-0 rounded-2xl" />
          <h3 className={`px-4 text-xl md:text-2xl font-bold leading-normal ${isDarkMode?'text-white':'text-black'}`}>
            Todo-list App
          </h3>
          <div className="flex flex-wrap gap-2 px-2 mt-4">
            <span className="bg-red-900/60 text-red-200 text-xs font-medium px-3 py-1 rounded-md">
              React
            </span>
            <span className="bg-red-900/60 text-red-200 text-xs font-medium px-3 py-1 rounded-md">
              Bootstrap
            </span>
            <span className="bg-red-900/60 text-red-200 text-xs font-medium px-3 py-1 rounded-md">
              icons
            </span>
          </div>
          <div className="mt-2 p-2 md:p-0 flex gap-2 md:gap-4 text-center">
            <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              <a
                href="https://todo-app-mocha-gamma.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit 🚀
              </a>
            </button>
            <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              <a
                href="https://github.com/Arijit-29/TodoApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
            </button>
          </div>
        </div>
      </div> 
      <center>
      <button className="md:mt-0  text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] w-2xs"><a href="https://github.com/Arijit-29?tab=repositories"target="_blank"
                rel="noopener noreferrer">see my all projects</a></button></center>
    </div>
  );
};
export default Projects;
