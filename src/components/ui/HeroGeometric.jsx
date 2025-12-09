import React from "react";
import { motion } from "framer-motion";
import "./HeroGeometric.css";

function ElegantShape({ className, delay = 0, width = 400, height = 100, rotate = 0, gradient }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate: rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={`elegant-shape ${className}`}
      style={{ width, height }}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ width: "100%", height: "100%" }}
        className="relative"
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '9999px',
            background: gradient,
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function HeroGeometric() {
  return (
    <div className="hero-geo-wrapper">
      

      <div className="hero-bg-grid" />
      
      <div className="hero-bg-glow" />
      
      <div className="absolute inset-0 overflow-hidden" style={{zIndex: 1}}>
     
        <ElegantShape
          delay={0.3}
          width={1000} 
          height={300} 
          rotate={12}
          gradient="linear-gradient(135deg, rgba(233, 44, 120, 0.3) 0%, rgba(74, 14, 36, 0.1) 100%)" 
          className="shape-1"
        />
        
     
        <ElegantShape
          delay={0.5}
          width={900} 
          height={250} 
          rotate={-15}
          gradient="linear-gradient(135deg, rgba(233, 44, 120, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)" 
          className="shape-2"
        />
        
   
        <ElegantShape
          delay={0.4}
          width={600} 
          height={180} 
          rotate={-8}
          gradient="linear-gradient(135deg, rgba(244, 178, 86, 0.2) 0%, rgba(0,0,0,0) 100%)" 
          className="shape-3"
        />
        
 
        <ElegantShape
          delay={0.6}
          width={450} 
          height={120} 
          rotate={20}
          gradient="linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(233, 44, 120, 0.05) 100%)" 
          className="shape-4"
        />
        

        <ElegantShape
          delay={0.7}
          width={400} 
          height={100} 
          rotate={-25}
          gradient="linear-gradient(135deg, rgba(233, 44, 120, 0.2) 0%, rgba(0,0,0,0) 100%)" 
          className="shape-5"
        />
      </div>

      <div className="hero-vignette" />
    </div>
  );
}