import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Portrait Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 relative inline-block"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20 mx-auto">
              <img
                src="/portrait.jpg"
                alt="Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Hi, I'm <span className="text-primary">Lexie Zhang</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Full Stack Developer crafting beautiful and functional web experiences
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/content">View AI Content</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <a href="#about" className="animate-bounce block text-white">
          <ArrowDown className="h-6 w-6" />
        </a>
      </motion.div>
    </section>
  );
}