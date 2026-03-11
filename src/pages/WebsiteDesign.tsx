import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";

const WebsiteDesign = () => {
  return (
    <ServicePageLayout
      badge="Website Design"
      title="Website Designing"
      subtitle=""
    >
      <div className="max-w-4xl space-y-6">
        <motion.p
          className="text-muted-foreground leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          In today's digital world, nearly everyone is connected in some way to the World Wide Web in order to satisfy their entertainment, education, research and consumer needs. The popularity of the Internet has prompted businesses of all sizes to have an online presence in the form of a Website.
        </motion.p>
        <motion.p
          className="text-muted-foreground leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          If your business does not have a Website as of yet, your business probably isn't performing to its fullest of capabilities. Having a Website can provide a number of benefits to your business that you may not have been aware of before.
        </motion.p>
        <motion.p
          className="text-muted-foreground leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Your website is important since it is most likely how people will find your business – along with your offerings and prices! These days, most people go online to research products and places before they make a purchase. If you don't have a website, or even if you have a bad website design, you are missing out on potential business. Those people don't purchase tickets online they are still likely to research your venue online so you want a good, responsive website so potential customers can learn about your business.
        </motion.p>
      </div>
    </ServicePageLayout>
  );
};

export default WebsiteDesign;
