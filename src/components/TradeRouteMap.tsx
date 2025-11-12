import { motion } from "framer-motion";
import { Globe, ArrowRight } from "lucide-react";

const TradeRouteMap = () => {
  const routes = [
    { from: "Africa", to: "Middle East", color: "hsl(var(--primary))" },
    { from: "Middle East", to: "UK", color: "hsl(var(--primary))" },
    { from: "Africa", to: "UK", color: "hsl(var(--primary))" },
    { from: "Middle East", to: "China", color: "hsl(var(--primary))" },
    { from: "UK", to: "US", color: "hsl(var(--primary))" },
    { from: "China", to: "US", color: "hsl(var(--primary))" },
  ];

  const regions = [
    { name: "Africa", position: "top-left" },
    { name: "Middle East", position: "top-center" },
    { name: "UK", position: "top-right" },
    { name: "China", position: "bottom-right" },
    { name: "US", position: "bottom-left" },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-3 md:p-8 bg-gradient-to-br from-primary/5 via-background to-primary/10 rounded-2xl border border-border shadow-xl">
      {/* Globe Icon */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: "backOut" }}
        className="mb-4 md:mb-6"
      >
        <div className="relative">
          <Globe className="w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 text-primary" strokeWidth={1.5} />
          <motion.div
            className="absolute inset-0 rounded-full bg-primary/20 blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>

      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-lg md:text-xl lg:text-2xl font-bold text-center mb-1 md:mb-2"
      >
        Global Trade Network
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-xs md:text-sm lg:text-base text-muted-foreground text-center mb-4 md:mb-8 max-w-md px-2"
      >
        Connecting markets across continents
      </motion.p>

      {/* Trade Routes Grid */}
      <div className="grid grid-cols-1 gap-2 md:gap-3 lg:gap-4 w-full max-w-2xl">
        {routes.map((route, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.7 + index * 0.1,
              ease: "easeOut",
            }}
            className="flex items-center gap-2 md:gap-3 bg-background/80 backdrop-blur-sm rounded-lg px-3 md:px-4 py-2.5 md:py-3 border border-border hover:border-primary/50 transition-all hover:shadow-md group"
          >
            <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
            <span className="text-sm md:text-base font-medium flex-1">{route.from}</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            <span className="text-sm md:text-base font-medium flex-1 text-right">{route.to}</span>
          </motion.div>
        ))}
      </div>

      {/* Regions Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="mt-4 md:mt-6 lg:mt-8 flex flex-wrap justify-center gap-1.5 md:gap-2"
      >
        {regions.map((region, index) => (
          <div
            key={region.name}
            className="px-2.5 md:px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20"
          >
            {region.name}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TradeRouteMap;
