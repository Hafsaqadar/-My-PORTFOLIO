import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {

    const frontendSkills =[
       "HTML",
       "CSS",
        "JavaScript",
        "React js",
        "Firebase",
        "Tailwind CSS",
        "Bootstrap",
    
    ]
    return(
        <section id="about" className="min-h-screen flex items-center justify-center py-20  ">
        <RevealOnScroll>
       <div className="mx-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me   
        </h2>

        <div className=" rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all  w-full max-w-2xl mx-auto">
            <p className="text-gray-300 mb-6 ml-3"> Passionate developer with expertise in building scalable web
            applications and creating innovative solutions.</p>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
               <h3 className="text-2xl font-bold mb-4">Frontend Skills</h3>
               <div className="flex flex-wrap gap-2  w-90">
                {frontendSkills.map((tech,key) =>(
                   <span 
                   key={key}
                   className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm  hover:bg-blue-500/20 hover:shadow-[0_0_8px_rgba(59,130, 246, 0.2)] transition" >
                    {tech}

                   </span> 
                )) }
               </div>
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"> */}
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-4">
                    <li>
                        <strong>Bachelor of Science in Computer Science</strong> - University of kowneyn (2023 - 2027)
                    </li>
                    <li>
                        Relavant CourseWork: Data Structures, Algorithms, Web Development, Database Management Systems, graphic design...
                    </li>
                </ul>
            </div>

            {/* work experience section for later */}
        {/* </div> */}
        </div>
       </div>
       </RevealOnScroll>
       </section>
    )
}