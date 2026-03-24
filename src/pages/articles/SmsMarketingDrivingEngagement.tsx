import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";

const SmsMarketingDrivingEngagement = () => {
  return (
    <ServicePageLayout
      badge="Resources"
      title="How SMS Marketing is Driving Instant Customer Engagement in Sri Lanka"
      subtitle=""
    >
      <SEOHead
        title="How SMS Marketing Drives Instant Customer Engagement in Sri Lanka | Buzz Connect"
        description="SMS marketing delivers 90%+ open rates for Sri Lankan businesses. Discover how instant text message campaigns drive customer engagement and conversions."
        canonical="/sms-marketing-driving-engagement-sri-lanka"
        ogType="article"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "SMS Marketing Driving Engagement", url: "/sms-marketing-driving-engagement-sri-lanka" },
        ]}
        jsonLd={[{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "How SMS Marketing is Driving Instant Customer Engagement in Sri Lanka",
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
            <p className="text-muted-foreground leading-relaxed">
              SMS marketing is one of the fastest and most effective ways to reach customers in Sri Lanka. With open rates exceeding 90%, businesses can instantly connect with their audience and drive immediate action.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">Why SMS Marketing Works</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Instant delivery to customers</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> High open rates exceeding 90%</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Perfect for promotions and time-sensitive alerts</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Works without internet access — reaches everyone</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">SMS Marketing Use Cases in Sri Lanka</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              From retail promotions to banking alerts, SMS marketing plays a crucial role in customer communication across industries in Sri Lanka.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> Promotional offers and flash sales</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> Appointment and booking reminders</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> Transaction and order notifications</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> Event marketing and invitations</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Businesses looking to maximize engagement should integrate SMS into their marketing strategy. Learn more about professional solutions with our{" "}
              <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">
                SMS Marketing Services in Sri Lanka
              </Link>.
            </p>
          </div>

          <div className="p-6 rounded-2xl gradient-hero text-center">
            <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">SMS Marketing Ensures Your Message is Seen — Every Time</h3>
            <p className="text-primary-foreground/80 mb-4">Reach thousands of customers instantly with Buzz Connect SMS campaigns.</p>
            <Link to="/sms-marketing" className="inline-block px-6 py-2.5 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
              View SMS Marketing Packages
            </Link>
          </div>
        </motion.article>
        <RelatedArticles currentPath="/sms-marketing-driving-engagement-sri-lanka" />
      </div>
    </ServicePageLayout>
  );
};

export default SmsMarketingDrivingEngagement;
