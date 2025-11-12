import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FileText, Building, GraduationCap, Search, UsersRound, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const USSecuritiesSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      icon: FileText,
      title: "Onboarding & Documentation Guidance",
      description:
        "Helping you understand what documents you need, how to complete forms, and how to prepare for account opening with licensed US brokers or platforms.",
    },
    {
      icon: Building,
      title: "Broker / Platform Facilitation",
      description:
        "Introducing you to licensed partners and helping coordinate communication until your account is set up. TripleE does not hold your money and is not a broker.",
    },
    {
      icon: GraduationCap,
      title: "Education & Orientation",
      description:
        "Explaining in simple terms how US securities work (stocks, ETFs, funds), typical risks, and how fees and taxes generally show up – without giving specific investment advice.",
    },
    {
      icon: Search,
      title: "Process Monitoring & Troubleshooting",
      description:
        "Helping you track the status of your applications, follow up with partners, and troubleshoot common issues in KYC (Know-Your-Customer) and compliance.",
    },
    {
      icon: UsersRound,
      title: "Group & Institutional Coordination",
      description:
        "Supporting investment clubs, family offices, and cooperatives to coordinate documentation and communication as a group.",
    },
  ];

  return (
    <section id="us-securities" className="py-20 section-light-bg">
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
              Facilitation of US Securities Trading
            </h2>
            <p className="text-xl text-muted-foreground">
              We work with licensed partners to help people who hold US dollars access secure,
              regulated US securities markets. Our clients are often outside the US, but want their
              money in transparent, well-regulated markets.
            </p>
          </div>

          <Alert className="mb-12 border-primary/30 bg-primary/5">
            <AlertCircle className="h-5 w-5 text-primary" />
            <AlertDescription className="text-base ml-2">
              <strong>Important:</strong> TripleE does not provide licensed investment advice, does
              not trade on your behalf, and does not hold client funds. We facilitate access to
              licensed, regulated partners.
            </AlertDescription>
          </Alert>

          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.25, duration: 1 }}
                className="flex gap-6 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-accent" />
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

export default USSecuritiesSection;
