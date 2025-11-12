import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Package, DollarSign, Network } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      icon: Package,
      title: "Agric Trade Facilitation & Trading",
      description:
        "We help move raw and semi-processed agricultural products within Africa and between Africa, the Middle East, the UK, and China – from contracts to compliance and logistics coordination.",
      gradient: "from-primary/10 to-primary/5",
    },
    {
      icon: DollarSign,
      title: "Facilitation of US Securities Trading",
      description:
        "For individuals, families, and groups with US dollars, we help you access secure, regulated US securities markets through licensed partners.",
      gradient: "from-accent/10 to-accent/5",
    },
    {
      icon: Network,
      title: "Cross-Border Advisory & Coordination",
      description:
        "We help you understand requirements, coordinate with partners, and reduce risk when trading across borders.",
      gradient: "from-brand-green-light/10 to-brand-green-light/5",
    },
  ];

  return (
    <section id="services" className="py-20 section-light-bg">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Two main pillars of our business, designed to facilitate cross-border trade and investment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.3, duration: 1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4`}>
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
