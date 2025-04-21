import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return(
        <section
        id="projects" className="min-h-screen flex items-center justify-center py-20">
             <RevealOnScroll> 
            <div className="max-w-5xl mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                Featured projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_0_8px_rgba(59,130, 246, 0.2)] transition">
                <h2 className="text-xl font-bold mb-2 "> Recipe Finder App</h2>
                <p className="text-gray-400 mb-4">
                A responsive web application that allows users to search for recipes by typing in ingredients or dish names. It fetches data from an external API and displays recipe details, including images and ingredients.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {["react", 'tailwind','firebase'].map((tech,key)=>(
                      <span 
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm  hover:bg-blue-500/20 hover:shadow-[0_0_8px_rgba(59,130, 246, 0.1)] transition-all" >
                       {tech}
   
                      </span> 
                    ))}
                </div>
                <div className="flex justify-between items-center  lg:mx-6 mt-4">
                    <a href="https://recipe-app-steel-delta.vercel.app/"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                        View project  → </a>
                        <a href="https://github.com/Hafsaqadar/RECIPE-APP"  
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4">View code  → </a>
                </div>
               </div>
               <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_0_8px_rgba(59,130, 246, 0.2)] transition">
                <h2 className="text-xl font-bold mb-2 ">Artist Finder </h2>
                <p className="text-gray-400 mb-4">The Artist Finder Landing Page is a sleek and modern single-page website designed to promote a music-related platform or app. 
                    With a strong visual layout and clean sections, it also has Clean and responsive layout, optimized for all devices Stylish typography and layout to create a modern feel</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {["HTML", 'CSS'].map((tech,key)=>(
                      <span 
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm  hover:bg-blue-500/20 hover:shadow-[0_0_8px_rgba(59,130, 246, 0.1)] transition-all" >
                       {tech}
   
                      </span> 
                    ))}
                </div>
                <div className="flex justify-between items-center  lg:mx-6 mt-4">
                    <a href="https://artist-finder-website.vercel.app/"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                        View project  → </a>
                        <a href="https://github.com/Hafsaqadar/Artist-Finder-website"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4">View code  → </a>
                </div>
               </div>
               {/* <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_0_8px_rgba(59,130, 246, 0.2)] transition">
                <h2 className="text-xl font-bold mb-2 ">Task Manager </h2>
                <p className="text-gray-400 mb-4">A task manager web application with signup and profile</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {["react", 'tailwind','firebase'].map((tech,key)=>(
                      <span 
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm  hover:bg-blue-500/20 hover:shadow-[0_0_8px_rgba(59,130, 246, 0.1)] transition-all" >
                       {tech}
   
                      </span> 
                    ))}
                </div>
                <div className="flex justify-between items-center  lg:mx-6 mt-4">
                    <a href=""
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                        View project  → </a>
                        <a href=""
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4">View code  → </a>
                </div>
               </div>
               <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_0_8px_rgba(59,130, 246, 0.2)] transition">
                <h2 className="text-xl font-bold mb-2 ">Task Manager </h2>
                <p className="text-gray-400 mb-4">A task manager web application with signup and profile</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {["react", 'tailwind','firebase'].map((tech,key)=>(
                      <span 
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm  hover:bg-blue-500/20 hover:shadow-[0_0_8px_rgba(59,130, 246, 0.1)] transition-all" >
                       {tech}
   
                      </span> 
                    ))}
                </div>
                <div className="flex justify-between items-center  lg:mx-6 mt-4">
                    <a href=""
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                        View project  → </a>
                        <a href=""
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4">View code  → </a>
                </div>
               </div> */}
                </div>
            </div>
            </RevealOnScroll>
        </section>
    )
}