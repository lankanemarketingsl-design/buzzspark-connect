import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { CheckCircle, Users, Crown, Target, Briefcase } from "lucide-react";

const databases = [
  {
    icon: Users,
    title: "Corporate database for executive decisions",
    desc: "This is our general and most popular database, you can target majority of the Colombo based private sector organizations employees through this database. Subscribers: 300,000+ age between 18 and 65.",
    items: ["Executives & Officers", "Small business owners", "Managers", "General Managers", "Association members", "Gender - Male 80% & Female 20%"],
    pricing: "1 LKR for one text message\nVideo LKR 2 For one message",
  },
  {
    icon: Crown,
    title: "VIP Database For Achievers",
    desc: "Our database has more than 50,000+ contacts in Colombo and greater colombo area, Age between 30 and 65 with majority being 80% Male and 20% Female.",
    items: ["Premium business leaders", "Multinational companies Directors", "CEOs", "Celebrities", "Sports personals", "Doctors", "Entrepreneurs", "Private sector high salary earning employees (Over 500,000 per month)", "Head of Government institutes"],
    pricing: "2 LKR for one text message\nVideo LKR 3 For one message",
  },
  {
    icon: Target,
    title: "Marketing Database to Promote your business",
    desc: "This database consist of marketing fraternity professionals which attach to marketing related works. Our database has more than 200,000+ contacts in All Island.",
    items: ["Director marketing", "Marketing Managers", "Brand managers", "Advertising Managers", "Sales Managers", "DGM Marketing", "Marketing Executives", "Sales Executives"],
    pricing: "2 LKR for one text message\nVideo LKR 3 For one message",
  },
  {
    icon: Briefcase,
    title: "HR Database to Promote your business",
    desc: "Human resources specialists are responsible for recruiting, screening, interviewing and placing workers. Our database has more than 25,000+ contacts in All Island.",
    items: ["HR Directors", "HR Managers", "Senior HR Managers", "Assistant HR Managers", "HR Executives", "Administrative managers", "Training Managers"],
    pricing: "2 LKR for one text message\nVideo LKR 3 For one message",
  },
];

const districts = [
  { name: "Colombo", count: "500,000" }, { name: "Galle", count: "185,000" }, { name: "Kandy", count: "175,000" },
  { name: "Kurunegala", count: "150,000" }, { name: "Matara", count: "120,000" }, { name: "Gampaha", count: "115,000" },
  { name: "Hambantota", count: "85,000" }, { name: "Kalutara", count: "80,000" }, { name: "Nuwara Eliya", count: "60,000" },
  { name: "Polonnaruwa", count: "52,000" }, { name: "Matale", count: "50,000" }, { name: "Anuradhapura", count: "45,000" },
  { name: "Monaragala", count: "45,000" }, { name: "Ratnapura", count: "42,000" }, { name: "Kegalle", count: "42,000" },
  { name: "Badulla", count: "40,000" }, { name: "Batticaloa", count: "40,000" }, { name: "Mannar", count: "40,000" },
  { name: "Puttalam", count: "40,000" }, { name: "Kilinochchi", count: "35,000" }, { name: "Trincomalee", count: "31,000" },
  { name: "Jaffna", count: "31,000" }, { name: "Mullaitivu", count: "30,000" }, { name: "Vavuniya", count: "28,000" },
  { name: "Ampara", count: "15,000" }, { name: "Wattala", count: "10,000" },
];

const WhatsAppMarketing = () => {
  return (
    <ServicePageLayout
      badge="WhatsApp Marketing"
      title="WhatsApp Marketing"
      subtitle=""
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {databases.map((db, i) => (
          <motion.div
            key={db.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-2xl bg-card shadow-card border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
                <db.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">{db.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{db.desc}</p>
            <ul className="space-y-2 mb-4">
              {db.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <div className="inline-block px-4 py-2 rounded-lg bg-accent/10 text-accent font-semibold text-sm whitespace-pre-line">
              Pricing -<br />{db.pricing}
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-sm text-muted-foreground text-center mb-2">
        * Minimum send number count 30,000 Numbers.
      </p>
      <p className="text-sm text-muted-foreground text-center mb-12">
        ** Payment should be settled before the campaign.
      </p>

      {/* Gender-wise Database */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">Gender-wise Database</h2>
        <div className="flex justify-center gap-8">
          <div className="text-center p-6 rounded-xl bg-secondary/10 border border-secondary/20">
            <div className="text-2xl font-heading font-bold text-secondary">350,000+</div>
            <div className="text-sm text-muted-foreground">Male Subscribers</div>
            <div className="text-xs text-muted-foreground">Age - 18 - 65</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-accent/10 border border-accent/20">
            <div className="text-2xl font-heading font-bold text-accent">250,000+</div>
            <div className="text-sm text-muted-foreground">Female Subscribers</div>
            <div className="text-xs text-muted-foreground">Age - 18 - 65</div>
          </div>
        </div>
      </motion.div>

      {/* District Coverage */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">District-wise Database</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {districts.map((d) => (
            <div key={d.name} className="p-4 rounded-xl bg-card shadow-card border border-border text-center">
              <div className="font-heading font-bold text-accent text-lg">{d.count}</div>
              <div className="text-xs text-muted-foreground mt-1">{d.name}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </ServicePageLayout>
  );
};

export default WhatsAppMarketing;
