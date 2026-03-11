import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { CheckCircle, Eye, TrendingUp, DollarSign } from "lucide-react";

const packages = [
  {
    name: "Package 1",
    price: "LKR 30,000/-",
    period: "",
    features: ["Keyword Research", "Website audit"],
  },
  {
    name: "Package 2",
    price: "LKR 60,000/-",
    period: "monthly",
    features: ["Keyword Research", "Website audit", "3 Keywords", "1 URL Optimization", "Title & Meta Information optimization", "CTA based Development", "Monthly Monitoring", "Reputed & Relevant Backlinks", "Recommendations"],
  },
  {
    name: "Package 3",
    price: "LKR 100,000/-",
    period: "monthly",
    features: ["Keyword Research", "Website audit", "5 Keywords", "3 URL Optimizations", "Title & Meta Information optimization", "CTA based Development", "Monthly Monitoring", "Reputed & Relevant Backlinks", "Recommendations"],
  },
];

const benefits = [
  { icon: Eye, title: "Increase Online visibility", desc: "Increase the visibility of your business online, and it will drive potential customers. We will help you dominate your competitors on the search engines." },
  { icon: TrendingUp, title: "SEO Will Drive More Customers", desc: "Increased exposure online from our unique Search Engine Optimisation strategy will drive more customers to your website and increase organic visitors." },
  { icon: DollarSign, title: "Increase Business Revenue", desc: "The increase in online exposure and number of visitors to your website will enable your company to generate more revenue and grow your business." },
];

const SeoServices = () => {
  return (
    <ServicePageLayout
      badge="SEO Services"
      title="Search Engine Optimization (SEO)"
      subtitle=""
    >
      <div className="mb-12 max-w-4xl">
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Fix bad website ranking issues. We Offer professional Search Engines and Local Listings Optimizing services that help your websites increase their organic search locally.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Get search engine based traffic that comes from being listed on search ranking. Gain higher local search rankings. Increase local visibility of your business by driving your website to the top of local listings. We provide best Search Engines and Local Listings Optimizing services that help you to rank high in google algorithm locally for affordable price rates. You'll get affordable, reliable, and organic SEO services that outperform the rest.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center p-8 rounded-2xl bg-card shadow-card border border-border"
          >
            <div className="w-14 h-14 rounded-full gradient-accent flex items-center justify-center mx-auto mb-4">
              <b.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">{b.title}</h3>
            <p className="text-sm text-muted-foreground">{b.desc}</p>
          </motion.div>
        ))}
      </div>

      <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg, i) => (
          <motion.div
            key={pkg.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`p-8 rounded-2xl bg-card shadow-card border-2 ${i === 2 ? 'border-accent' : 'border-border'} relative`}
          >
            {i === 2 && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-accent text-xs font-bold text-primary">
                POPULAR
              </div>
            )}
            <div className="text-sm font-semibold text-accent uppercase">{pkg.name}</div>
            <div className="font-heading text-3xl font-bold text-foreground mt-2">{pkg.price}</div>
            {pkg.period && <div className="text-sm text-muted-foreground mb-6">{pkg.period}</div>}
            {!pkg.period && <div className="mb-6"></div>}
            <ul className="space-y-2">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /> {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </ServicePageLayout>
  );
};

export default SeoServices;
