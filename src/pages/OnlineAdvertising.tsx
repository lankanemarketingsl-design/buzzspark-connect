import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import {
  CheckCircle, Mail, Smartphone, MessageSquare, Layout, Share2,
  TrendingUp, HelpCircle, ArrowRight,
  GraduationCap, ShoppingCart, Building2, Home, Heart,
} from "lucide-react";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import DigitalMarketingCTA from "@/components/DigitalMarketingCTA";

/* ── Ad Types ── */
const adTypes = [
  {
    icon: MessageSquare,
    title: "WhatsApp Advertising",
    desc: "WhatsApp marketing allows businesses to send direct messages to potential customers. With extremely high open rates, it is one of the fastest ways to generate engagement and responses.",
    link: "/whatsapp-marketing",
  },
  {
    icon: Mail,
    title: "Email Advertising",
    desc: "Email campaigns help businesses promote products, services, and offers to a large audience. It is ideal for building long-term customer relationships and repeat engagement.",
    link: "/email-marketing",
  },
  {
    icon: Smartphone,
    title: "SMS Advertising",
    desc: "SMS marketing delivers instant messages directly to users' phones. With near 100% open rates, it is perfect for time-sensitive promotions and announcements.",
    link: "/sms-marketing",
  },
  {
    icon: Layout,
    title: "Display Advertising",
    desc: "Banner ads and featured placements increase visibility and brand awareness across websites and platforms.",
    link: "/web-banner-advertising-sri-lanka",
  },
  {
    icon: Share2,
    title: "Social Media Advertising",
    desc: "Platforms like Facebook and Instagram help businesses target users based on interests, behavior, and demographics.",
    link: "/social-media-marketing-sri-lanka",
  },
];

/* ── Process Steps ── */
const processSteps = [
  { title: "Audience Targeting", desc: "We identify and segment your ideal audience based on your business goals." },
  { title: "Campaign Planning", desc: "We create a strategy tailored to your industry and target market." },
  { title: "Creative Development", desc: "We design engaging messages and visuals that attract attention." },
  { title: "Multi-Channel Execution", desc: "Your campaign is launched across WhatsApp, SMS, email, and other platforms." },
  { title: "Performance Tracking", desc: "We monitor results and optimize campaigns for better performance." },
];

/* ── Benefits ── */
const benefits = [
  "Reach thousands of customers instantly",
  "Highly targeted audience segmentation",
  "Cost-effective compared to traditional advertising",
  "Real-time performance tracking",
  "Scalable for businesses of all sizes",
];

/* ── Results ── */
const results = [
  "Reach over 500,000+ users per campaign",
  "Millions of impressions generated",
  "Increased inquiries and conversions",
  "Fast engagement within 24–72 hours",
];

/* ── Industries ── */
const industries = [
  { icon: GraduationCap, label: "Education & courses", link: "/education-marketing-sri-lanka" },
  { icon: ShoppingCart, label: "Restaurants & food businesses", link: "/restaurant-marketing-sri-lanka" },
  { icon: Building2, label: "E-commerce & retail", link: "/fashion-marketing-sri-lanka" },
  { icon: Home, label: "Real estate", link: "/real-estate-marketing-sri-lanka" },
  { icon: Heart, label: "Healthcare services", link: "/" },
];

/* ── Why BuzzConnect ── */
const whyBuzz = [
  "Proven multi-channel advertising system",
  "Fast campaign launch (48–72 hours)",
  "50M+ impressions delivered",
  "500+ campaigns executed",
  "Affordable and scalable solutions",
];

/* ── FAQs ── */
const faqs = [
  { q: "What is the best online advertising method in Sri Lanka?", a: "WhatsApp, SMS, and email marketing are among the most effective due to high open rates and fast delivery." },
  { q: "How quickly can online advertising campaigns start?", a: "Most campaigns can be launched within 48 hours." },
  { q: "Is online advertising expensive?", a: "No, it is one of the most cost-effective ways to reach a large audience." },
  { q: "Can I target specific customers?", a: "Yes, campaigns can be targeted based on demographics, interests, and behavior." },
];

const OnlineAdvertising = () => {
  const jsonLd = useMemo(() => [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(f => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Online Advertising in Sri Lanka",
      provider: {
        "@type": "Organization",
        name: "BuzzConnect",
        url: "https://buzzconnect.lk",
      },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      description: "Online advertising in Sri Lanka with WhatsApp, SMS & email campaigns. Reach targeted customers instantly and grow your business fast.",
      serviceType: "Online Advertising",
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "5000",
        highPrice: "50000",
        priceCurrency: "LKR",
      },
    },
  ], []);

  return (
    <ServicePageLayout
      badge="Online Advertising Sri Lanka"
      title="Online Advertising in Sri Lanka"
      subtitle="Online advertising in Sri Lanka with WhatsApp, SMS & email campaigns. Reach targeted customers instantly and grow your business fast."
    >
      <SEOHead
        title="Online Advertising Sri Lanka | Reach 500,000+ Customers Fast"
        description="Online advertising in Sri Lanka with WhatsApp, SMS & email campaigns. Reach targeted customers instantly and grow your business fast."
        canonical="/online-advertising-sri-lanka"
        keywords="online advertising sri lanka, digital advertising sri lanka, online marketing sri lanka, digital marketing sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Online Advertising Sri Lanka", url: "/online-advertising-sri-lanka" },
        ]}
        jsonLd={jsonLd}
      />

      {/* ── Introduction ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          <strong>Online advertising in Sri Lanka</strong> has become the most powerful way for businesses to reach customers quickly and efficiently. With the rapid growth of mobile users and internet access, digital platforms now dominate how brands connect with their audience.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          At BuzzConnect, we specialize in online advertising campaigns that deliver fast, measurable results. Using a combination of WhatsApp, SMS, email, and display advertising, we help businesses reach over <strong>500,000+ targeted users</strong> within just a few days.
        </p>
      </motion.div>

      {/* ── What is Online Advertising ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto p-8 sm:p-10 rounded-2xl bg-primary/5 border border-primary/20"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">What is Online Advertising?</h2>
        <p className="text-muted-foreground mb-4">
          Online advertising refers to promoting your business through digital channels such as mobile messaging, email, websites, and online platforms. Unlike traditional advertising, online campaigns allow precise targeting, real-time tracking, and faster engagement.
        </p>
        <p className="text-muted-foreground">
          This makes <strong>online advertising in Sri Lanka</strong> one of the most cost-effective and scalable marketing solutions available today.
        </p>
      </motion.div>

      {/* ── Types of Online Advertising ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3">Types of Online Advertising in Sri Lanka</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {adTypes.map((ad, i) => (
            <motion.div
              key={ad.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={ad.link}
                className="block h-full p-6 rounded-2xl bg-card border border-border shadow-card hover:border-accent/40 hover:shadow-lg transition-all group"
              >
                <ad.icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{ad.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{ad.desc}</p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm text-accent font-semibold">
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── How It Works ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">How Online Advertising Works</h2>
        <p className="text-muted-foreground mb-6">Our online advertising process is designed to maximize reach and results:</p>
        <div className="space-y-4">
          {processSteps.map((step, i) => (
            <div key={step.title} className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-accent font-bold text-sm">{i + 1}</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Benefits ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto p-8 sm:p-10 rounded-2xl bg-primary/5 border border-primary/20"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">Benefits of Online Advertising in Sri Lanka</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {benefits.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-foreground text-sm">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground">
          Online advertising allows businesses to grow faster by reaching the right people at the right time.
        </p>
      </motion.div>

      {/* ── Real Campaign Results ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Real Campaign Results</h2>
        <p className="text-muted-foreground mb-6">Our campaigns consistently deliver strong results:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {results.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-foreground text-sm">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground font-medium">
          We focus on delivering <strong>real business outcomes</strong>, not just visibility.
        </p>
      </motion.div>

      {/* ── Industries ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Industries We Serve</h2>
        <p className="text-muted-foreground mb-6">Our online advertising solutions are effective across multiple industries:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {industries.map((ind) => (
            <Link
              key={ind.label}
              to={ind.link}
              className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-accent/40 hover:shadow-md transition-all group"
            >
              <ind.icon className="w-5 h-5 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-foreground text-sm font-medium">{ind.label}</span>
            </Link>
          ))}
        </div>
        <p className="text-muted-foreground mt-4">Each campaign is customized to suit the specific needs of the industry.</p>
      </motion.div>

      {/* ── Why Choose BuzzConnect ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto p-8 sm:p-10 rounded-2xl bg-primary/5 border border-primary/20"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">Why Choose BuzzConnect for Online Advertising in Sri Lanka</h2>
        <div className="space-y-3 mb-6">
          {whyBuzz.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-foreground text-sm">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground">
          We combine strategy, technology, and data to deliver high-impact advertising campaigns.
        </p>
      </motion.div>

      {/* ── Internal Link ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto p-6 rounded-2xl bg-card border border-border shadow-card"
      >
        <h2 className="font-heading text-xl font-bold text-foreground mb-2">Complete Advertising Solutions</h2>
        <p className="text-muted-foreground">
          Looking for a broader approach? Explore our{" "}
          <Link to="/advertising-sri-lanka" className="text-accent hover:underline font-semibold">
            Advertising in Sri Lanka
          </Link>{" "}
          services to combine online and multi-channel campaigns for maximum reach and effectiveness.
        </p>
      </motion.div>

      {/* ── FAQ ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-3 mb-8">
          <HelpCircle className="w-7 h-7 text-primary" />
          <h2 className="font-heading text-2xl font-bold text-foreground">FAQs</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="group p-5 rounded-xl bg-card shadow-card border border-border">
              <summary className="font-heading font-semibold text-foreground cursor-pointer list-none flex items-center justify-between">
                {faq.q}
                <span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-muted-foreground leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </motion.div>

      {/* ── Related Articles ── */}
      <RelatedArticles currentPath="/online-advertising-sri-lanka" max={4} />

      {/* ── Final CTA ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center p-10 rounded-2xl gradient-hero"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
          Start Your Online Advertising Campaign in Sri Lanka Today
        </h2>
        <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
          Reach thousands of potential customers and grow your business faster with BuzzConnect.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact-us"
            className="inline-block px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity"
          >
            Get a Free Quote
          </Link>
          <a
            href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20online%20advertising%20in%20Sri%20Lanka."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-full bg-primary-foreground/10 text-primary-foreground font-bold border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>
      </motion.div>
      <DigitalMarketingCTA variant="alt" />
    </ServicePageLayout>
  );
};

export default OnlineAdvertising;
