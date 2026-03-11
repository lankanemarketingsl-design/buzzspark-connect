import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Users, Crown, CheckCircle } from "lucide-react";

const packages = [
  { name: "One Email Campaign + Findit.lk Web Ad", corp: "LKR 6,000", full: "LKR 8,000", fb: "✔", ig: "✔", li: "✔", webAd: "01", appAd: "01", feed: "✔" },
  { name: "Two Email Campaigns + Findit.lk Web Ads", corp: "LKR 10,800", full: "LKR 15,000", fb: "✔", ig: "✔", li: "✔", webAd: "02", appAd: "02", feed: "✔" },
  { name: "Five Email Campaigns (One month period) + Findit.lk Web Ads", corp: "LKR 28,000", full: "LKR 38,000", fb: "✔", ig: "✔", li: "✔", webAd: "05", appAd: "05", feed: "✔" },
  { name: "Ten Email Campaigns (Two months) + Findit.lk Web Ads", corp: "LKR 54,000", full: "LKR 72,000", fb: "✔", ig: "✔", li: "✔", webAd: "10", appAd: "10", feed: "✔" },
  { name: "Twenty Email Campaigns + Findit.lk Web Ads", corp: "LKR 108,000", full: "LKR 140,000", fb: "✔", ig: "✔", li: "✔", webAd: "40", appAd: "40", feed: "✔" },
  { name: "VIP Email Campaign (For 50,000 VIP database)", corp: "LKR 7,500", full: "", fb: "✔", ig: "✔", li: "✔", webAd: "01", appAd: "01", feed: "✔" },
];

const EmailMarketing = () => {
  return (
    <ServicePageLayout
      badge="Email Marketing"
      title="Email Marketing"
      subtitle=""
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-card shadow-card border border-border"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
              <Users className="w-6 h-6 text-secondary-foreground" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground">Corporate Reach</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Buzz Connect is a proven leader in email marketing in Sri Lanka. which has 350,000 active numbers and 500,000 active numbers, age between 18 – 55 covering mostly western province.
          </p>
          <ul className="space-y-2">
            {["Managers", "General Managers", "Executive & officers", "Small business owners", "Undergraduate students", "House wives", "Association Members", "Gender - Male 60% & Female 40%"].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="p-8 rounded-2xl bg-card shadow-card border border-border"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
              <Crown className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground">VIP Reach</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Our database has more then 50,000 + contacts in Colombo and greater Colombo area. age between 35 and 60 with majority being 80% men and 20% female.
          </p>
          <ul className="space-y-2">
            {["Premium business leaders", "Multinational companies Directors", "CEO'S", "Celebrities", "Sports personals", "Doctors", "Entrepreneurs", "Private sector high salary earning employees (Over 350,000 per month)", "Heads of Government institutes"].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Pricing Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-2 text-center">Special Advertising Packages</h2>
        <p className="text-muted-foreground text-center mb-2">Not any hidden charges, choose your plan</p>
        <p className="text-muted-foreground text-center mb-8 text-sm">We enjoy adapting our strategies to offer every client the best solutions that are at the forefront of the industry.</p>

        <div className="overflow-x-auto">
          <table className="w-full bg-card rounded-xl shadow-card border border-border overflow-hidden text-sm">
            <thead>
              <tr className="gradient-hero text-primary-foreground">
                <th className="text-left p-3 font-heading"></th>
                <th className="text-center p-3 font-heading">Facebook sharing & Story updates</th>
                <th className="text-center p-3 font-heading">Instagram story updates</th>
                <th className="text-center p-3 font-heading">Linkedin post sharing</th>
                <th className="text-center p-3 font-heading">Findit.lk Web ad for Two weeks</th>
                <th className="text-center p-3 font-heading">Findit.lk App ad for Two weeks</th>
                <th className="text-center p-3 font-heading">Promote in Findit.lk Business Feed</th>
                <th className="text-center p-3 font-heading">350,000 Corporate Database</th>
                <th className="text-center p-3 font-heading">Findit.lk Featured ad one month</th>
                <th className="text-center p-3 font-heading">500,000 Corporate Database</th>
              </tr>
            </thead>
            <tbody>
              {packages.map((pkg, i) => (
                <tr key={pkg.name} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                  <td className="p-3 text-foreground font-medium">{pkg.name}</td>
                  <td className="p-3 text-center">{pkg.fb}</td>
                  <td className="p-3 text-center">{pkg.ig}</td>
                  <td className="p-3 text-center">{pkg.li}</td>
                  <td className="p-3 text-center">{pkg.webAd}</td>
                  <td className="p-3 text-center">{pkg.appAd}</td>
                  <td className="p-3 text-center">{pkg.feed}</td>
                  <td className="p-3 text-center font-semibold text-accent">{pkg.corp}</td>
                  <td className="p-3 text-center">✔</td>
                  <td className="p-3 text-center font-semibold text-secondary">{pkg.full}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </ServicePageLayout>
  );
};

export default EmailMarketing;
