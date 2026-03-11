import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const smsPackages = [
  {
    name: "Budget Package - SMS Marketing",
    reach: "Reach 450,000",
    items: ["SMS Campaign for 20,000 contacts", "Email Campaign for 350,000 subscribers", "Findit.lk feature Ad 50,000 hits for month for free", "Promotion landing page creation", "Findit.lk Pop up Banner for one day", "Facebook Boosting"],
  },
  {
    name: "Silver Package - SMS Marketing",
    reach: "Reach 550,000",
    items: ["SMS Campaign For 50,000 contacts", "Email campaign for 350,000 subscribers", "Findit.lk feature Ad 50,000 hits for month for free", "Findit.lk Pop - Up Banner for a One Day", "Promotion landing page creation", "Facebook Boosting"],
  },
  {
    name: "Gold Package - SMS Marketing",
    reach: "Reach 950,000",
    items: ["SMS Campaign For 150,000 contacts", "Two email campaign for 350,000 subscribers", "Findit.lk feature ad 50,000 hits for month for free", "Findit.lk Pop - Up Banner for a Two Days", "Promotion landing page creation", "Findit.lk Main Banner for two Weeks", "Findit.lk Side Banner for one week", "Facebook Boosting"],
  },
  {
    name: "Platinum Package - SMS Marketing",
    reach: "Reach 1.2 Million +",
    items: ["SMS Campaign For 400,000 contacts", "Two email campaign for 350,000 subscribers", "Findit.lk feature ad 50,000 hits for month for free", "Findit.lk Pop - Up Banner for a Four Days", "Findit.lk main banner Advertisement (One month for free)", "Promotion landing page creation", "Findit.lk Side Banner for two weeks", "Facebook boosting"],
  },
];

const waPackages = [
  {
    name: "Budget Package - WhatsApp",
    reach: "Reach 450,000",
    items: ["WhatsApp campaign for 30,000 contacts", "Email Campaign for 350,000 corporate database", "Findit.lk feature Ad 50,000 hits for month for free", "Findit.lk Pop up Banner for one day", "Facebook Boosting"],
  },
  {
    name: "Silver Package - WhatsApp",
    reach: "Reach 550,000",
    items: ["WhatsApp Campaign for 60,000 contacts", "Email campaign for 350,000 corporate database", "Findit.lk feature Ad 50,000 hits for month for free", "Findit.lk main banner Advertisement (2 weeks for free)", "Facebook Boosting"],
  },
  {
    name: "Gold Package - WhatsApp",
    reach: "Reach 575,000",
    items: ["WhatsApp campaign for 110,000 contacts", "Two email campaign for 350,000 corporate database", "Findit.lk life time Feature Profile", "Findit.lk feature ad 50,000 hits for month for free", "Findit.lk main banner Advertisement (3 Weeks for free)", "Findit.lk Main Banner for two Weeks", "Findit.lk Side Banner for one week", "Facebook Boosting"],
  },
  {
    name: "Platinum Package - WhatsApp",
    reach: "Reach 625,000",
    items: ["WhatsApp campaign for 175,000 contacts", "Two email campaign for 350,000 corporate database", "Findit.lk life time Feature Profile", "Findit.lk feature ad 50,000 hits for month for free", "Findit.lk main banner Advertisement (One month for free)", "Findit.lk Side Banner for two weeks", "Facebook boosting"],
  },
];

const PackageCard = ({ pkg, index }: { pkg: { name: string; reach: string; items: string[] }; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="p-6 rounded-2xl bg-card shadow-card border-2 border-border hover:shadow-card-hover transition-all"
  >
    <div className="text-sm font-semibold text-accent uppercase tracking-wider">{pkg.name}</div>
    <div className="font-heading text-3xl font-bold text-foreground mt-1">{pkg.reach}</div>
    <ul className="mt-5 space-y-2">
      {pkg.items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm text-foreground">
          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /> {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

const SpecialPackages = () => {
  return (
    <ServicePageLayout
      badge="Special Packages"
      title="Special Advertising Packages"
      subtitle=""
    >
      <h2 className="font-heading text-2xl font-bold text-foreground mb-8">SMS Marketing Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {smsPackages.map((pkg, i) => (
          <PackageCard key={pkg.name} pkg={pkg} index={i} />
        ))}
      </div>

      <h2 className="font-heading text-2xl font-bold text-foreground mb-8">WhatsApp Marketing Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {waPackages.map((pkg, i) => (
          <PackageCard key={pkg.name} pkg={pkg} index={i} />
        ))}
      </div>
    </ServicePageLayout>
  );
};

export default SpecialPackages;
