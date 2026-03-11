import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="aboutus" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">About Us</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-2">
              Your digital morale in business
            </h2>
            <h3 className="font-heading text-xl text-accent font-semibold mb-5">
              The No.1 Lead generation company in Sri Lanka
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Today's marketers of the world need to do more or less connectivity to their audience through a highly personalized way is the way more important to them.while staying on a budgetary plan .Marketers will achieve this goal by way of connecting to their prospects and with their customers in a highly targeted way. They will be success in delivering ROI and revenue back to the organization.
              </p>
              <p>
                Tell a mass audience all about it within minutes. Your updates and offers, delivered directly to your target market's inbox through E-mail marketing, WhatsApp marketing and SMS marketing as well.
              </p>
              <p>
                Buzz connect is one of the leading online advertising provider which operates from 2014 in Sri Lanka.We have total solution packages for generate leads for the needs of the customers Therefore, we use E-mail campaign and WhatsApp campaign platforms as direct marketing. For the mass audience we use Findit.lk. At the same time we work with Buyit.lk which is a classified online market place in Sri Lanka that gives more visibility to our customers.
              </p>
              <p>
                Not only through E-mail marketing campaigns, Whatsapp marketing campaigns and Bulk SMS marketing campaigns, we are getting publicity through Findit.lk for a period of one month. To tell a mass audience all about it within minutes, your updates and offers delivered directly to your target markets. And also can get the highest reach from the lowest budget.
              </p>
              <p>
                We Generate leads for provides online advertising solutions like E-mail marketing, WhatsApp marketing and SMS marketing in Sri Lanka from largest organization to SME's also We have provide our service over 1500 customers to generate direct marketing and brand awareness to improve their ventures with the trust and confidence
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "350K+", label: "Email Subscribers", color: "bg-primary text-primary-foreground" },
                { num: "600K+", label: "SMS Reach", color: "bg-secondary text-secondary-foreground" },
                { num: "50K+", label: "VIP Contacts", color: "gradient-accent text-primary" },
                { num: "200K+", label: "Monthly Web Hits", color: "bg-primary text-primary-foreground" },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`${item.color} rounded-xl p-6 text-center shadow-card`}
                >
                  <div className="text-3xl font-heading font-bold">{item.num}</div>
                  <div className="text-sm mt-1 opacity-80">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
