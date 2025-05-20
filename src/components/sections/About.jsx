import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = ["React", "CSS", "TailwindCSS", "HTML"];
    const backendSkills = ["Node.js", "MongoDB"];

    return (
    <RevealOnScroll>
    <section id="about" className="min-h-screen flex items-center justfiy-center py-20">
       
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-green-400 bg-clip-text text-transparent text-center animate-bounce"> About Me</h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        Passionate coder with expertise in front-end development and UI/UX Design.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transtion-all">
                            <h3 className="text-xl font-bold mb-4 animate-bounce"> Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm 
                            hover:bg-red-500/20 hover:shadow-[0_2px_80x_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transtion-all">
                            <h3 className="text-xl font-bold mb-4 animate-bounce"> Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm 
                            hover:bg-red-500/20 hover:shadow-[0_2px_80x_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4 animate-bounce"> Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li className="text-red-500">
                                <strong> Certified in HTML5 Application Development and JavaScript</strong> - West-MEC Coding Program at the Central Campus
                                (2023-2025)
                            </li>
                            <li className="text-red-500">
                                <strong>Relevant Coursework:</strong> Application Development, Javascript, HTML, CSS, Tailwind, etc.
                            </li>
                            <ul>

                            </ul>
                        </ul>
                    </div>

                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4 animate-bounce"> Work Experience</h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">Freelance Photography (2023 - Present)</h4>
                                <p className="text-red-500">Scheduled and took photoshoots for clients. Colorgraded photos for different occasions ranging from marriage to graduation events.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold">Worship Team and Youth Group Member (2013 - Present)</h4>
                                <p className="text-red-500">Planned out holiday events and youth rallies for church. Served as a vocalist for Christ.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            </section>
        </RevealOnScroll>
    );
};