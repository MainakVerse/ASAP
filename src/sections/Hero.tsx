"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300])

  return (
    <motion.section
      ref={sectionRef}
      className="h-screen md:h-[800px] flex items-center overflow-hidden relative"
      style={{ backgroundPositionY }}
    >
      {/* Enhanced Multi-Layer Electric Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black">
        {/* Electric Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        {/* Animated Electric Waves - Layer 1 */}
        <motion.div
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(ellipse at 20% 50%, 
                rgba(0, 255, 255, 0.3) 0%, 
                transparent 50%
              ),
              radial-gradient(ellipse at 80% 50%, 
                rgba(0, 150, 255, 0.4) 0%, 
                transparent 50%
              )
            `,
          }}
          animate={{
            background: [
              `radial-gradient(ellipse at 20% 50%, rgba(0, 255, 255, 0.3) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(0, 150, 255, 0.4) 0%, transparent 50%)`,
              `radial-gradient(ellipse at 80% 30%, rgba(0, 255, 255, 0.4) 0%, transparent 50%), radial-gradient(ellipse at 20% 70%, rgba(0, 150, 255, 0.3) 0%, transparent 50%)`,
              `radial-gradient(ellipse at 50% 20%, rgba(0, 255, 255, 0.3) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(0, 150, 255, 0.4) 0%, transparent 50%)`,
              `radial-gradient(ellipse at 20% 50%, rgba(0, 255, 255, 0.3) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(0, 150, 255, 0.4) 0%, transparent 50%)`
            ]
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 8,
            ease: "easeInOut",
          }}
        />

        {/* Sweeping Electric Beams */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              linear-gradient(45deg, 
                transparent 0%, 
                rgba(0, 255, 255, 0.2) 25%, 
                rgba(0, 200, 255, 0.4) 50%, 
                rgba(0, 255, 255, 0.2) 75%, 
                transparent 100%
              )
            `,
          }}
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 4,
            ease: "linear",
          }}
        />

        {/* Counter-rotating Electric Beam */}
        <motion.div
          className="absolute inset-0 opacity-25"
          style={{
            background: `
              linear-gradient(-45deg, 
                transparent 0%, 
                rgba(100, 200, 255, 0.3) 30%, 
                rgba(0, 255, 255, 0.5) 60%, 
                rgba(100, 200, 255, 0.3) 90%, 
                transparent 100%
              )
            `,
          }}
          animate={{
            x: ["100%", "-100%"],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 6,
            ease: "linear",
            delay: 2,
          }}
        />

        {/* Pulsing Electric Core */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
          style={{
            background: `
              radial-gradient(circle, 
                rgba(0, 255, 255, 0.1) 0%,
                rgba(0, 150, 255, 0.05) 50%,
                transparent 70%
              )
            `,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 3,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Enhanced Electric Current Ring 1 */}
      <motion.div
        className="absolute size-[400px] md:size-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 8,
          ease: "linear",
        }}
      >
        <svg className="w-full h-full" viewBox="0 0 400 400">
          <defs>
            <linearGradient id="electric1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0, 255, 255, 0)" />
              <stop offset="30%" stopColor="rgba(0, 255, 255, 0.8)" />
              <stop offset="50%" stopColor="rgba(0, 255, 255, 1)" />
              <stop offset="70%" stopColor="rgba(100, 200, 255, 0.8)" />
              <stop offset="100%" stopColor="rgba(0, 255, 255, 0)" />
            </linearGradient>
            <filter id="glow1">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <motion.circle
            cx="200"
            cy="200"
            r="180"
            fill="none"
            stroke="url(#electric1)"
            strokeWidth="4"
            strokeDasharray="15 5 10 5"
            filter="url(#glow1)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </svg>
        
        {/* Enhanced Electric sparks */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(0,255,255,1)]"
            style={{ 
              top: `${10 + i * 10}%`, 
              left: `${20 + (i % 3) * 30}%`,
              filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.8))'
            }}
            animate={{
              scale: [0.5, 2, 0.5],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1 + i * 0.2,
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>

      {/* Enhanced Electric Current Ring 2 */}
      <motion.div
        className="absolute size-[500px] md:size-[750px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          rotate: "-1turn",
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 12,
          ease: "linear",
        }}
      >
        <svg className="w-full h-full" viewBox="0 0 500 500">
          <defs>
            <linearGradient id="electric2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(100, 200, 255, 0)" />
              <stop offset="20%" stopColor="rgba(100, 200, 255, 0.6)" />
              <stop offset="40%" stopColor="rgba(0, 150, 255, 1)" />
              <stop offset="60%" stopColor="rgba(0, 255, 255, 1)" />
              <stop offset="80%" stopColor="rgba(100, 200, 255, 0.6)" />
              <stop offset="100%" stopColor="rgba(100, 200, 255, 0)" />
            </linearGradient>
            <filter id="glow2">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <motion.circle
            cx="250"
            cy="250"
            r="220"
            fill="none"
            stroke="url(#electric2)"
            strokeWidth="3"
            strokeDasharray="20 5 15 5 10 5"
            filter="url(#glow2)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </svg>
      </motion.div>

      {/* Enhanced Lightning Bolts */}
      <motion.div
        className="absolute size-[300px] md:size-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 15,
          ease: "linear",
        }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 bg-gradient-to-b from-cyan-400 via-blue-400 to-transparent shadow-[0_0_10px_rgba(0,255,255,0.8)]"
            style={{
              height: `${40 + Math.random() * 40}px`,
              left: "50%",
              top: "5%",
              transformOrigin: "bottom center",
              transform: `rotate(${i * 45}deg) translateX(-50%)`,
              filter: 'drop-shadow(0 0 8px rgba(0, 255, 255, 0.6))'
            }}
            animate={{
              opacity: [0, 1, 0],
              scaleY: [0.3, 1.2, 0.3],
              scaleX: [0.5, 1, 0.5],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.5 + Math.random(),
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>

      {/* Enhanced Speed Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_4px_rgba(0,255,255,0.8)]"
            style={{
              width: `${150 + Math.random() * 100}px`,
              top: `${5 + i * 3}%`,
              left: "-250px",
            }}
            animate={{
              x: ["0px", "calc(100vw + 250px)"],
              opacity: [0, 0.8, 0],
              scaleY: [0.5, 1, 0.5],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1 + Math.random() * 0.5,
              delay: i * 0.05,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Floating Electric Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(0,255,255,0.6)]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.8))'
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 200],
              y: [0, (Math.random() - 0.5) * 200],
              scale: [0.5, 1.5, 0.5],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container relative mt-16 z-10">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl md:text-[170px] md:leading-none font-semibold tracking-tighter text-center bg-gradient-to-r from-white to-white text-transparent bg-clip-text relative">
            A S A P
            {/* Enhanced Electric glow effect */}
            <motion.div
              className="absolute inset-0 text-6xl md:text-[170px] md:leading-none font-semibold tracking-tighter text-center text-cyan-400 opacity-20 blur-sm"
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
              }}
            >
              A S A P
            </motion.div>
          </h1>

          {/* Enhanced Electric particles around text */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(0,255,255,0.8)]"
                style={{
                  left: `${10 + Math.random() * 80}%`,
                  top: `${20 + Math.random() * 60}%`,
                }}
                animate={{
                  scale: [0, 1.5, 0],
                  opacity: [0, 1, 0],
                  x: [0, (Math.random() - 0.5) * 150],
                  y: [0, (Math.random() - 0.5) * 150],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 2 + Math.random() * 2,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </div>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-white mt-5 text-center max-w-xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          All the tool you need to create fast and easy.
        </motion.p>

        <motion.div
          className="flex justify-center p-8 mt-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Link href="/#features">
            <button className="px-6 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all duration-300">
              Get Started
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}