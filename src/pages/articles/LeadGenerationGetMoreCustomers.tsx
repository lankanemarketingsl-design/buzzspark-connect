import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";

const LeadGenerationGetMoreCustomers = () => {
  return (
    <ServicePageLayout
      badge="Resources"
      title="Lead Generation in Sri Lanka: How to Get More Customers for Your Business"
      subtitle=""
    >
      <SEOHead
        title="Lead Generation Sri Lanka: How to Get More Customers | Buzz Connect"
        description="Learn how lead generation helps Sri Lankan businesses attract and convert more customers. Discover the best methods including email, SMS, and WhatsApp marketing."
        canonical="/lead-generation-get-more-customers-sri-lanka"
        ogType="article"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "Lead Generation Get More Customers", url: "/lead-generation-get-more-customers-sri-lanka" },
        ]}
        jsonLd={[{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Lead Generation in Sri Lanka: How to Get More Customers for Your Business",
          datePublished: "2025-03-24",
          author: { "@type": "Organization", name: "Buzz Connect" },
          publisher: { "@type": "Organization", name: "Buzz Connect", logo: { "@type": "ImageObject", url: "https://buzzconnect.lk/og-image.png" } },
        }]}
      />
      <div className="max-w-3xl mx-auto">
        <Link to="/resources" className="inline-flex items-center gap-2 text-sm text-accent hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Resources
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Lead generation is the process of attracting and converting potential customers into people interested in your business.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In Sri Lanka, competition is increasing across industries, making lead generation essential for business growth.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">Why Lead Generation is Important</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Increases sales opportunities</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Builds a strong customer pipeline</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Helps target the right audience</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Improves marketing ROI</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Businesses that invest in lead generation grow faster and more consistently than those that rely only on traditional marketing.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">Best Lead Generation Methods in Sri Lanka</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <Link to="/email-marketing" className="text-accent hover:underline font-semibold">Email marketing campaigns</Link></li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS marketing promotions</Link></li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <Link to="/whatsapp-marketing" className="text-accent hover:underline font-semibold">WhatsApp marketing campaigns</Link></li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> Online advertising and landing pages</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              If you want to generate high-quality leads, check out our{" "}
              <Link to="/lead-generation-sri-lanka" className="text-accent hover:underline font-semibold">
                Lead Generation Sri Lanka services
              </Link>. A strong lead generation strategy is the foundation of business success.
            </p>
          </div>

          <div className="p-6 rounded-2xl gradient-hero text-center">
            <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">Start Generating High-Quality Leads Today</h3>
            <p className="text-primary-foreground/80 mb-4">Attract more customers with targeted marketing campaigns by Buzz Connect.</p>
            <Link to="/lead-generation-sri-lanka" className="inline-block px-6 py-2.5 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
              View Lead Generation Packages
            </Link>
          </div>
        </motion.article>
        <RelatedArticles currentPath="/lead-generation-get-more-customers-sri-lanka" />
      </div>
    </ServicePageLayout>
  );
};

export default LeadGenerationGetMoreCustomers;
