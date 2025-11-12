import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Users, Workflow } from "lucide-react";

const AboutSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const highlights = [
    {
      icon: MapPin,
      title: "Where We Work",
      content: "Africa, Middle East, UK, China, US",
    },
    {
      icon: Users,
      title: "Who We Serve",
      content:
        "Agribusinesses, aggregators, exporters, importers, investment clubs, family offices, high-net-worth individuals",
    },
    {
      icon: Workflow,
      title: "How We Work",
      content:
        "1) Understand your needs, 2) Map the requirements, 3) Coordinate partners, 4) Support execution",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About TripleE</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              TripleE is a trade facilitation and cross-border coordination firm focused on
              agricultural products and access to US securities markets. We connect serious
              businesses and investors, help them navigate rules and documentation, and keep
              everyone aligned so trade and investment can actually move.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.3, duration: 1 }}
                className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
