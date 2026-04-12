import ServicePageLayout from "@/components/ServicePageLayout";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HowLeadGenerationWorksSriLanka = () => {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" },
    { name: "How Lead Generation Works", url: "/how-lead-generation-works-sri-lanka" },
  ];

  return (
    <>
      <SEOHead
        title="How Lead Generation Works in Sri Lanka (Complete 2026 Guide) | Buzz Connect"
        description="Learn how lead generation works in Sri Lanka. Step-by-step guide covering digital, direct, and multi-channel strategies to grow your business in 2026."
        canonical="/how-lead-generation-works-sri-lanka"
        keywords="lead generation Sri Lanka, how lead generation works, generate leads Sri Lanka, business leads, digital marketing leads"
        breadcrumbs={breadcrumbs}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How Lead Generation Works in Sri Lanka (Complete Guide for Businesses 2026)",
            description: "Learn how lead generation works in Sri Lanka. Step-by-step guide covering digital, direct, and multi-channel strategies.",
            author: { "@type": "Organization", name: "Buzz Connect" },
            publisher: { "@type": "Organization", name: "Buzz Connect" },
            datePublished: "2026-04-12",
            dateModified: "2026-04-12",
          },
        ]}
      />
      <ServicePageLayout
        badge="Lead Generation"
        title="How Lead Generation Works in Sri Lanka (Complete Guide for Businesses 2026)"
        subtitle="Discover step-by-step how businesses in Sri Lanka attract, capture, nurture, and convert leads into paying customers."
      >
        <div className="max-w-4xl mx-auto prose prose-lg">
          {/* What is Lead Generation */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">What is Lead Generation?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Lead generation is the process of attracting potential customers and turning them into interested prospects for your business. In simple terms, it's how businesses find people who are likely to buy their products or services.
            </p>
          </motion.section>

          {/* Why Important */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Why Lead Generation is Important in Sri Lanka</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In today's competitive market, businesses cannot rely only on walk-in customers or referrals. Lead generation helps you:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Reach targeted customers</li>
              <li>Increase sales opportunities</li>
              <li>Build a consistent pipeline of clients</li>
              <li>Grow your business faster</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              👉 <Link to="/lead-generation-sri-lanka" className="text-accent font-semibold hover:underline">Learn more about professional lead generation services in Sri Lanka</Link>
            </p>
          </motion.section>

          {/* Step by Step */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">How Lead Generation Works (Step-by-Step)</h2>

            <h3 className="font-heading text-xl font-bold text-foreground mb-2">1. Attract the Right Audience</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">You bring people to your business using:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-4">
              <li><Link to="/seo-sri-lanka" className="text-accent hover:underline">SEO</Link></li>
              <li><Link to="/social-media-marketing-sri-lanka" className="text-accent hover:underline">Social media marketing</Link></li>
              <li><Link to="/google-ads-sri-lanka" className="text-accent hover:underline">Google Ads</Link></li>
              <li><Link to="/email-marketing" className="text-accent hover:underline">Email marketing</Link></li>
            </ul>

            <h3 className="font-heading text-xl font-bold text-foreground mb-2">2. Capture Leads</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">Once people show interest, you collect their name, phone number, and email through:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-4">
              <li>Landing pages</li>
              <li>Forms</li>
              <li><Link to="/whatsapp-marketing" className="text-accent hover:underline">WhatsApp</Link></li>
            </ul>

            <h3 className="font-heading text-xl font-bold text-foreground mb-2">3. Nurture Leads</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">Not all leads buy immediately. You need to build trust using:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-4">
              <li><Link to="/email-marketing" className="text-accent hover:underline">Email campaigns</Link></li>
              <li>Follow-ups</li>
              <li>Valuable content</li>
            </ul>

            <h3 className="font-heading text-xl font-bold text-foreground mb-2">4. Convert into Customers</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With proper follow-ups and strategy, leads turn into paying customers. Optimized strategies can significantly improve conversion rates.
            </p>
          </motion.section>

          {/* Types */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Types of Lead Generation in Sri Lanka</h2>

            <h3 className="font-heading text-xl font-bold text-foreground mb-2">🔍 Digital Lead Generation</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-4">
              <li>Google search (SEO)</li>
              <li>Paid ads</li>
              <li>Social media</li>
            </ul>

            <h3 className="font-heading text-xl font-bold text-foreground mb-2">📱 Direct Marketing</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-4">
              <li><Link to="/sms-marketing" className="text-accent hover:underline">SMS marketing</Link></li>
              <li><Link to="/whatsapp-marketing" className="text-accent hover:underline">WhatsApp campaigns</Link></li>
              <li><Link to="/email-marketing" className="text-accent hover:underline">Email marketing</Link></li>
            </ul>

            <h3 className="font-heading text-xl font-bold text-foreground mb-2">📢 Content-Based Lead Generation</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-6">
              <li>Blog articles</li>
              <li>Guides</li>
              <li>Lead magnets</li>
            </ul>
          </motion.section>

          {/* Multi-Channel */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Multi-Channel Lead Generation Strategy</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">The best results come from combining multiple channels:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>SEO + Google Ads</li>
              <li>Email + SMS</li>
              <li>Social media + WhatsApp</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              👉 <Link to="/multi-channel-marketing-sri-lanka" className="text-accent font-semibold hover:underline">Learn more about multi-channel marketing in Sri Lanka</Link>
            </p>
          </motion.section>

          {/* Mistakes */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Common Lead Generation Mistakes</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Targeting the wrong audience</li>
              <li>No follow-up system</li>
              <li>Weak landing pages</li>
              <li>Not tracking results</li>
            </ul>
          </motion.section>

          {/* Better Leads */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">How to Get Better Leads</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Focus on quality over quantity</li>
              <li>Use targeted campaigns</li>
              <li>Optimize landing pages</li>
              <li>Track performance</li>
            </ul>
          </motion.section>

          {/* CTA */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Grow Your Business with Lead Generation</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A strong lead generation strategy helps businesses increase inquiries, improve conversion rates, and generate consistent revenue.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Working with professionals like Buzz Connect ensures targeted strategies, high-quality leads, and better ROI.
            </p>
            <div className="mt-6 p-6 rounded-2xl bg-accent/10 border border-accent/20 text-center">
              <p className="font-heading text-xl font-bold text-foreground mb-3">📞 Get Started Today</p>
              <p className="text-muted-foreground mb-4">Want more leads for your business? Contact us today and start generating high-quality leads.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/lead-generation-sri-lanka" className="inline-flex items-center gap-2 text-accent font-semibold hover:underline">
                  Explore Lead Generation Services →
                </Link>
                <Link to="/contact-us" className="inline-flex items-center gap-2 text-accent font-semibold hover:underline">
                  Get a Free Quote →
                </Link>
              </div>
            </div>
          </motion.section>
        </div>
      </ServicePageLayout>
    </>
  );
};

export default HowLeadGenerationWorksSriLanka;
