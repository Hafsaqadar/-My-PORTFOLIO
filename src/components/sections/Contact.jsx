import { RevealOnScroll } from "../RevealOnScroll"
import emailjs from 'emailjs-com';
import { useState } from "react"

export const Contact = () => {

    const[formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

   

    const handleSubmit = (e) => {
      
        e.preventDefault()
      emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, 
        import.meta.env.VITE_TEMPLATE_ID, e.target,
        import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
         alert("Message sent successfully!")
            setFormData({
                name: "",
                email: "",
                message: ""
            })
      })
      .catch(() => {
         console.log("error")
          alert("OOps! something went wrong.  please try again later.");
      });
    }
    return(
        <section id="contact" className="min-h-screen flex items-center justify-center py-20 ">
        <RevealOnScroll>
            <div className="px-4 lg:w-150 w-96 ">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Get In Touch</h2>
          <form className="space-y-6" onSubmit={handleSubmit} >
          <div className="relative">
            <input type="text" id="name" name="name"
            value={formData.name} 
            onChange={(e) => setFormData({...formData, name: e.target.value})}
             className=" w-full bg-white/10 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/5" placeholder="Name..." required/>
          </div>
          <div className="relative">
            <input type="email" id="Email" name="email"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            value={formData.email} 
             className=" w-full bg-white/10 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/5" placeholder="example@gmail.com..." required/>
          </div>
          <div className="relative">
            <textarea type="message" id="message" name="message" 
            value={formData.message} 
            onChange={(e) => setFormData({...formData, message: e.target.value})}
        
        
            rows={5}
             className=" w-full bg-white/10 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/5" placeholder="your message..." required/>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-1 hover:hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] ">
            Send message
          </button>
          </form>
            </div>
        </RevealOnScroll>
 
        </section>

    )
}