"use client"
import { motion } from "framer-motion"
import { ArrowRight, Zap, Rocket, Star, Shield } from "lucide-react"

const boxdesc = {
  box1: {
    title: "AHURA MAXDA",
    description:
      "Transform your ideas into stunning AI driven content. Create varieties of professional content in seconds.",
    link: "https://ahuramaxda.netlify.app",
    linkText: "Try Now",
    color: "cyan",
    icon: Zap,
  },
  box2: {
    title: "SAMBHA",
    description:
      "Translate your code into high-performance applications. Optimize and analyze your code with AI.",
    link: "https://sambha.netlify.app",
    linkText: "Try Now",
    color: "purple",
    icon: Rocket,
  },
  box3: {
    title: "ABANINDRA",
    description:
      "Craft beautiful images, posters, mockups, artist impressions etc. with the power of AI. Unleash your creativity.",
    link: "https://abanindra.netlify.app",
    linkText: "Try Now",
    color: "pink",
    icon: Star,
  },
  box4: {
    title: "PRATAP",
    description:
      "Create prompts for any AI model with ease. Generate, refine, and optimize prompts for better results.",
    link: "https://pratap-mv.netlify.app",
    linkText: "Try Now",
    color: "green",
    icon: Shield,
  },
}

const colorVariants = {
  cyan: {
    border: "border-cyan-400/50",
    shadow: "shadow-cyan-400/25",
    glow: "shadow-[0_0_20px_rgba(34,211,238,0.3)]",
    gradient: "from-cyan-400/20 to-transparent",
    text: "text-cyan-400",
    button: "bg-cyan-500 hover:bg-cyan-400 text-black",
  },
  purple: {
    border: "border-purple-400/50",
    shadow: "shadow-purple-400/25",
    glow: "shadow-[0_0_20px_rgba(168,85,247,0.3)]",
    gradient: "from-purple-400/20 to-transparent",
    text: "text-purple-400",
    button: "bg-purple-500 hover:bg-purple-400 text-white",
  },
  pink: {
    border: "border-pink-400/50",
    shadow: "shadow-pink-400/25",
    glow: "shadow-[0_0_20px_rgba(244,114,182,0.3)]",
    gradient: "from-pink-400/20 to-transparent",
    text: "text-pink-400",
    button: "bg-pink-500 hover:bg-pink-400 text-white",
  },
  green: {
    border: "border-green-400/50",
    shadow: "shadow-green-400/25",
    glow: "shadow-[0_0_20px_rgba(34,197,94,0.3)]",
    gradient: "from-green-400/20 to-transparent",
    text: "text-green-400",
    button: "bg-green-500 hover:bg-green-400 text-black",
  },
}

export const Features = () => {
  // Handle button click with explicit navigation
  const handleButtonClick = (url: string | URL | undefined) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id='features' className="py-20 md:py-24 bg-black min-h-screen relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-center tracking-tighter bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent py-4">
            Electrifying Tools
          </h2>
          <p className="text-lg md:text-xl text-white/70 text-center tracking-tight mt-5 max-w-2xl mx-auto">
            Experience the power of AI generation with cutting-edge features
          </p>
        </motion.div>

        {/* 2x2 Grid of boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 max-w-6xl mx-auto">
          {Object.entries(boxdesc).map(([key, box], index) => {
            const colors = colorVariants[box.color as keyof typeof colorVariants]
            const IconComponent = box.icon

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative group"
              >
                {/* Main box */}
                <div
                  className={`
                    relative p-8 pt-12 rounded-2xl border-2 ${colors.border} 
                    bg-gradient-to-br ${colors.gradient} backdrop-blur-sm
                    ${colors.glow} hover:${colors.glow.replace("0.3", "0.5")}
                    transition-all duration-500 hover:scale-105
                    min-h-[300px] flex flex-col justify-between
                  `}
                >
                  {/* Icon */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                      className={`
                        w-16 h-16 rounded-full border-2 ${colors.border}
                        bg-black ${colors.glow} flex items-center justify-center
                        group-hover:${colors.glow.replace("0.3", "0.6")}
                        transition-all duration-500
                      `}
                    >
                      <IconComponent className={`w-8 h-8 ${colors.text}`} />
                    </motion.div>
                  </div>

                  {/* Text */}
                  <div className="flex-1 pt-4">
                    <h3 className={`text-2xl font-bold mb-4 ${colors.text}`}>{box.title}</h3>
                    <p className="text-white/80 text-base leading-relaxed mb-6">{box.description}</p>
                  </div>

                  {/* Fixed Button with multiple approaches */}
                  <div className="relative z-20">
                    {/* Method 1: Regular anchor tag (primary) */}
                    <a
                      href={box.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        block w-full ${colors.button} font-semibold py-3 px-6 rounded-lg
                        transition-all duration-300 text-center
                        hover:shadow-lg hover:scale-105 active:scale-95
                        cursor-pointer select-none
                      `}
                      onClick={(e) => {
                        // Fallback: if the anchor doesn't work, use JavaScript
                        e.preventDefault();
                        handleButtonClick(box.link);
                      }}
                    >
                      <span className="flex items-center justify-center gap-2">
                        {box.linkText}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </a>

                    {/* Method 2: Backup button (hidden, for extreme cases) */}
                    <button
                      onClick={() => handleButtonClick(box.link)}
                      className="hidden"
                      aria-label={`Visit ${box.title}`}
                    >
                      Backup Button
                    </button>
                  </div>

                  {/* Border animation */}
                  <div
                    className={`
                      absolute inset-0 rounded-2xl border-2 ${colors.border} opacity-0 
                      group-hover:opacity-100 transition-opacity duration-500
                      animate-pulse pointer-events-none
                    `}
                  ></div>
                </div>

                {/* Glow effect */}
                <div
                  className={`
                    absolute inset-0 rounded-2xl ${colors.glow} opacity-0 
                    group-hover:opacity-100 transition-opacity duration-500 -z-10
                    blur-xl pointer-events-none
                  `}
                ></div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom animated dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center mt-16"
        >
          <div className="flex space-x-2">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"
              ></motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}