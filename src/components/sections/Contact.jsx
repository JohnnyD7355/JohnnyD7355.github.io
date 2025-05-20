import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
    return (
        <RevealOnScroll>
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
           
                <div className="px-4 w-150">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-green-400 bg-clip-text text-transparent text-center animate-bounce"> 
                        Get In Touch
                        </h2>
                    <form className="space-y-6">
                        <div className="relative">
                            <input 
                            type="text" 
                            id="name" 
                            name="name" required 
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-red-500 focus:bg-green-500/5"
                            placeholder="Name..."
                        />
                        </div>

                        <div className="relative">
                            <input 
                            type="email" 
                            id="email" 
                            name="email" required 
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-red-500 focus:bg-green-500/5"
                            placeholder="Email..."
                        />
                        </div>
                        
                    </form>
                </div>
           
        </section>
        </RevealOnScroll>
    );
}