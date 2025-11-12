import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, TrendingUp, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticlesBackground from "./ParticlesBackground";
import TradeRouteMap from "./TradeRouteMap";

const HeroSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const threeEs = [
    {
      icon: TrendingUp,
      title: "Earn",
      description: "Earn from your strengths",
    },
    {
      icon: Globe,
      title: "Expand",
      description: "Expand into new markets",
    },
    {
      icon: Award,
      title: "Evolve",
      description: "Evolve through compliance and coordinated execution",
    },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <ParticlesBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2 }}
            className="space-y-8"
          >
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              >
                <span className="text-gradient">TripleE </span>
                <span className="text-foreground"> Trade</span>
                <br />
                <span className="text-foreground text-xl sm:text-2xl md:text-3xl lg:text-4xl block mb-1 mx-auto">
                  Investment Facilitation
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8, duration: 1 }}
                className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl"
              >
                Helping agribusinesses move products across borders and helping investors move money into secure US markets.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.1, duration: 1 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("services")}
                className="group w-full sm:w-auto"
              >
                Explore Services
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto"
              >
                Get in Touch
              </Button>
            </motion.div>

            {/* Three E's */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.4, duration: 1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-border"
            >
              {threeEs.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.7 + index * 0.3, duration: 0.8 }}
                  className="flex flex-col gap-2 items-center"
                >
                  <item.icon className="w-10 h-10 text-primary" />
                  <h3 className="font-bold text-lg sm:text-xl">{item.title}</h3>
                  <p className="text-sm text-muted-foreground text-center">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Trade Route Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8, duration: 1.2 }}
            className="w-full mt-12 lg:mt-0"
          >
            <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px]">
              <TradeRouteMap />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
