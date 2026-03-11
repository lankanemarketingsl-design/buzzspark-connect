import { motion } from "framer-motion";
import { Award, Globe, Share2, LinkIcon } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Experts in the industry",
    desc: "Buzz Connect has been providing E-mail Marketing services since 2014 and has successfully completed over 20,000 E- campaigns & provided effective results to all our customers.",
  },
  {
    icon: Globe,
    title: "Reach Out more with Findit.lk",
    desc: "Findit.lk is one of the largest online promotions directory which operates in Sri Lanka. Buzz connect has joined in hand with findit.lk to provide maximum benefits to the customers with the best experience and knowledge.",
  },
  {
    icon: Share2,
    title: "Social media sharing",
    desc: "All campaigns which conducted by Buzz connect will be publish on Facebook & Instagram as stores. The flyers of the customers who using our special packages, will be posted in Facebook as a post.",
  },
  {
    icon: LinkIcon,
    title: "Landing pages linked with flyers",
    desc: "Landing page URL can be added to E-flyer in order to generate traffic to website, blog, facebook page, youtube video etc. or to get online leads.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="whyus" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2">
            Why Buzz Connect?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-8 rounded-xl bg-card shadow-card border border-border hover:border-accent/30 transition-all"
            >
              <div className="w-14 h-14 rounded-full gradient-accent flex items-center justify-center mx-auto mb-5">
                <r.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-3">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* General Advice Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
            Be on the Top & Get More Traffic to Your Website
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-2">
            The following services explain how we approach DIGITAL MARKETING for a range of common purposes:
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-2">
            For businesses which sell products online and improve their product listings in the search results.
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            If you're investing in a new business it's important to ensure it's known to your customer base.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;
