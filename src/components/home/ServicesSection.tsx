import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, MessageSquare, Smartphone, Globe, Search, PenTool, Monitor, Package } from "lucide-react";

const services = [
  {
    icon: Mail,
    title: "E-Mail Marketing",
    bullets: ["Over 350,000+ database", "50,000 + VIP Reach", "10,000+ highly targeted Customized Database"],
    path: "/email-marketing",
  },
  {
    icon: Package,
    title: "Special Advertising Packages",
    bullets: ["Reach 450,000", "Reach 550,000", "Reach 575,000", "Reach 625,000"],
    path: "/special-advertising-packages",
  },
  {
    icon: Smartphone,
    title: "SMS Marketing",
    bullets: ["Corporate – 300,000", "Top marketers – 200,000", "All Island - 600,000", "HR database – 25,000", "VIP database – 25,000"],
    path: "/sms-marketing",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Marketing",
    bullets: ["Corporate – 300,000", "Top marketers – 200,000", "All Island - 600,000", "HR database – 25,000", "VIP database – 25,000"],
    path: "/whatsapp-marketing",
  },
  {
    icon: Globe,
    title: "Web Ads, Discount coupons and Banner Packages",
    bullets: ["Your Brand is, your true story", "Build your brand online with US!"],
    path: "/online-advertising-sri-lanka",
  },
  {
    icon: PenTool,
    title: "Graphic Designing",
    bullets: ["Artwork/E-flyer designing", "Social media post designing", "Short Animated video creation"],
    path: "/graphic-designing-in-sri-lanka",
  },
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    bullets: ["Increase Online visibility", "Increase Business Revenue", "SEO Will Drive More Customers"],
    path: "/seo-sri-lanka",
  },
  {
    icon: Monitor,
    title: "Website Designing",
    bullets: ["Increase Online visibility", "Increase Business Revenue", "Increase Company Reputation"],
    path: "/website-design-sri-lanka",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Services</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2">
            Complete Digital Marketing Solutions
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            From email campaigns to full-stack web presence — everything you need to grow your business in Sri Lanka
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={s.path}
                className="group block p-6 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-accent/30 h-full"
              >
                <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-3">{s.title}</h3>
                <ul className="space-y-1">
                  {s.bullets.map((b) => (
                    <li key={b} className="text-sm text-muted-foreground leading-relaxed">{b}</li>
                  ))}
                </ul>
                <span className="inline-block mt-4 text-sm font-semibold text-accent">More Info →</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
