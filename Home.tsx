import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import VideoBackground from "@/components/VideoBackground";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <VideoBackground />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 bg-black/50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary/50">
            <img 
              src="/IMG_8817.JPG" 
              alt="Portrait"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Lexie Zhang
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Information Systems Graduate Student
          </p>

          <Link href="/content">
            <Button size="lg" className="bg-primary/90 hover:bg-primary text-white">
              View My Work
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}