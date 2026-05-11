import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Code2, Cpu, Github, Linkedin, Mail } from "lucide-react";

export default function Portfolio() {
  const [text, setText] = useState("");
  const fullText = "> Initializing NeuralAditya System...";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#0f0_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />

      {/* Header */}
      <header className="p-6 flex justify-between items-center border-b border-green-500/30">
        <h1 className="text-xl font-bold tracking-widest">NEURAL_ADITYA</h1>
        <nav className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-white">ABOUT</a>
          <a href="#projects" className="hover:text-white">PROJECTS</a>
          <a href="#contact" className="hover:text-white">CONTACT</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="h-[80vh] flex flex-col justify-center items-center text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-sm text-green-300 mb-4">{text}</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            Full Stack Developer
          </h2>
          <p className="mt-4 text-green-400 max-w-xl">
            I transform data into intelligent systems, AI tools, and scalable digital products.
          </p>

          <div className="mt-6 flex gap-4 justify-center">
            <a href="https://github.com/" className="hover:text-white"><Github /></a>
            <a href="#" className="hover:text-white"><Linkedin /></a>
            <a href="#" className="hover:text-white"><Mail /></a>
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="p-10 border-t border-green-500/20">
        <h3 className="text-2xl mb-4">// ABOUT_ME</h3>
        <p className="text-green-300 max-w-3xl">
          Developer focused on AI systems, machine learning pipelines, trading systems,
          and scalable backend architectures. Passionate about building real-world impact tools.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="p-10 border-t border-green-500/20">
        <h3 className="text-2xl mb-6">// PROJECTS</h3>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "NeuralAditya Trade System",
            "AI Founder OS",
            "EV Sales Prediction AI"
          ].map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="border border-green-500/30 p-4 rounded-lg bg-green-500/5"
            >
              <Code2 className="mb-2" />
              <h4 className="font-bold text-white">{project}</h4>
              <p className="text-sm text-green-300 mt-2">
                Advanced AI-powered system built for real-world deployment.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="p-10 border-t border-green-500/20">
        <h3 className="text-2xl mb-4">// CONTACT</h3>
        <p className="text-green-300">Email: aditya@neuraladitya.dev</p>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center text-xs text-green-700 border-t border-green-500/20">
        © 2026 NeuralAditya System | Built in the Matrix
      </footer>
    </div>
  );
}
