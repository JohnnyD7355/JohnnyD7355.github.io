import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {

    return (
    <section
    id="projects"
    className="min-h-screens flex items-center justify-center py-20">
<RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-green-400 bg-clip-text text-transparent text-center animate-bounce"> Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_80x_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-2 animate-bounce"> Task Manager App ✅</h3>
                <p className="text-gray-400 mb-4">App that helps manage daily tasks</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {["TailwindCSS", "React", "JavaScript"].map((tech,key) => (
                         <span 
                            key={key}
                            className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm 
                            hover:bg-red-500/20 hover:shadow-[0_2px_80x_rgba(59,130,246,0.1)] transition-all">
                                {tech}
                            </span>
                    ))}
                </div>

                    <div className="flex justify-between items-center">
                        <a href="https://github.com/jdang384/laravel-task-app-team" className="text-red-400 hover:text-red-300 transitions-colors my-4"> View Project </a>
                    </div>
            </div>
             <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_80x_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-2 animate-bounce"> Mecazon 🛒</h3>
                <p className="text-gray-400 mb-4">Shopping website with a cumulation all coding skills learned in 1.5 years.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {["TailwindCSS", "React", "JavaScript", "Node.js", "Expo", "Etc."].map((tech,key) => (
                         <span 
                            key={key}
                            className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm 
                            hover:bg-red-500/20 hover:shadow-[0_2px_80x_rgba(59,130,246,0.1)] transition-all">
                                {tech}
                            </span>
                    ))}
                </div>

                    <div className="flex justify-between items-center">
                        <a href="https://github.com/orgs/WestMecCoding/teams/3pm-mecazon-dev-teamd" className="text-red-400 hover:text-red-300 transitions-colors my-4"> View Project </a>
                    </div>
            </div>
             <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_80x_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-2 animate-bounce"> Guessing Game ❓</h3>
                <p className="text-gray-400 mb-4">Game where you guess the characters!</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {["HTML", "CSS", "JavaScript"].map((tech,key) => (
                         <span 
                            key={key}
                            className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm 
                            hover:bg-red-500/20 hover:shadow-[0_2px_80x_rgba(59,130,246,0.1)] transition-all">
                                {tech}
                            </span>
                    ))}
                </div>

                    <div className="flex justify-between items-center">
                        <a href="https://codepen.io/Johnny-Dang/pen/OJdLWbR" className="text-red-400 hover:text-red-300 transitions-colors my-4"> View Project </a>
                    </div>
            </div>
             <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_80x_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-2 animate-bounce"> Pandaisia Chocolates 🍫</h3>
                <p className="text-gray-400 mb-4">Chocolate website that displays foundational HTML and CSS skills</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {["HTML", "CSS"].map((tech,key) => (
                         <span 
                            key={key}
                            className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm 
                            hover:bg-red-500/20 hover:shadow-[0_2px_80x_rgba(59,130,246,0.1)] transition-all">
                                {tech}
                            </span>
                    ))}
                </div>

                    <div className="flex justify-between items-center">
                        <a href="https://codepen.io/Johnny-Dang/pen/MWLvpZQ" className="text-red-400 hover:text-red-300 transitions-colors my-4"> View Project </a>
                    </div>
            </div>
            
            </div>
        </div>
</RevealOnScroll>
    </section>
    );
};