import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, FileCheck, Truck, ClipboardCheck, Handshake } from "lucide-react";

const AgricTradeSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      icon: Users,
      title: "Market & Buyer Matching",
      description:
        "Matching exporters and aggregators with serious buyers for grains, oilseeds, and other agric products.",
    },
    {
      icon: FileCheck,
      title: "Compliance & Documentation",
      description:
        "Support with export/import documentation, quality standards, certifications, and regulatory checks so shipments are not delayed or rejected.",
    },
    {
      icon: Truck,
      title: "Logistics Coordination",
      description:
        "Coordination with transporters, warehouses, and freight agents to move products from farm or warehouse to port and final destination.",
    },
    {
      icon: ClipboardCheck,
      title: "Quality & Inspection Support",
      description:
        "Helping arrange inspections, lab tests, and quality control to meet buyer and country requirements.",
    },
    {
      icon: Handshake,
      title: "Deal Structuring Support",
      description:
        "Helping parties think through payment terms, delivery conditions, basic risk sharing, and timelines before involving lawyers and banks.",
    },
  ];

  return (
    <section id="agric-trade" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Agric Trade Facilitation & Trading
            </h2>
            <p className="text-xl text-muted-foreground">
              We focus on moving agricultural products – raw and semi-processed – across borders in
              Africa, and between Africa, the Middle East, the UK, the US, and China.
            </p>
          </div>

          <div className="space-y-8 mt-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.25, duration: 1 }}
                className="flex gap-6 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AgricTradeSection;
