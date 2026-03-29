import SEOHead from "@/components/SEOHead";
import ServicePageLayout from "@/components/ServicePageLayout";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { ArrowRight, CheckCircle2, Briefcase, Mail, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import articleImg from "@/assets/blog/article-recruitment-email-hiring.jpg";
import RelatedArticles from "@/components/RelatedArticles";

const faqs = [
  { q: "Why is email marketing effective for recruitment in Sri Lanka?", a: "Email marketing allows employers to reach targeted candidates directly with job vacancies, application reminders, and employer branding content." },
  { q: "How can companies speed up hiring with email?", a: "By combining email campaigns with SMS alerts and Findit.lk job listings, companies can reach active job seekers faster and improve candidate quality." },
  { q: "What types of email campaigns work for recruitment?", a: "Job alerts, hiring campaigns, walk-in interview promotions, and employer branding newsletters are the most effective campaign types." },
  { q: "Is email marketing cost-effective for hiring?", a: "Yes. Email marketing significantly reduces cost per hire compared to traditional recruitment methods and paid job portals." },
];

const RecruitmentEmailHiring = () => {
  const jsonLd = useMemo(() => ({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }), []);
  const articleJsonLd = useMemo(() => ({ "@context": "https://schema.org", "@type": "Article", headline: "Recruitment Marketing in Sri Lanka: How Email Campaigns Speed Up Hiring", author: { "@type": "Organization", name: "Buzz Connect" }, publisher: { "@type": "Organization", name: "Buzz Connect", url: "https://buzzconnect.lk" }, datePublished: "2026-03-29", description: "How email marketing helps companies in Sri Lanka speed up hiring with targeted recruitment campaigns." }), []);

  return (
    <ServicePageLayout badge="Article" title="Recruitment Marketing in Sri Lanka: How Email Campaigns Speed Up Hiring" subtitle="Reach the right candidates faster with targeted email campaigns and multi-channel recruitment strategies.">
      <SEOHead title="Recruitment Email Marketing Sri Lanka | Speed Up Hiring" description="How email marketing speeds up hiring for companies in Sri Lanka. Targeted job campaigns, candidate sourcing & multi-channel recruitment strategies." canonical="/recruitment-email-marketing-hiring-sri-lanka" breadcrumbs={[{ name: "Home", url: "/" }, { name: "Resources", url: "/resources" }, { name: "Recruitment Email Marketing", url: "/recruitment-email-marketing-hiring-sri-lanka" }]} jsonLd={[jsonLd, articleJsonLd]} />
      <article className="max-w-4xl mx-auto space-y-12">
        <div className="rounded-2xl overflow-hidden shadow-card"><img src={articleImg} alt="Recruitment email marketing to speed up hiring in Sri Lanka" className="w-full h-auto" /></div>
        <section className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed">Recruitment in Sri Lanka requires reaching the right candidates quickly. Traditional job postings alone are not enough.</p>
          <p className="text-lg text-muted-foreground leading-relaxed"><Link to="/email-marketing" className="text-accent hover:underline font-semibold">Email marketing</Link> helps employers connect directly with job seekers and improve hiring efficiency.</p>
        </section>
        <section>
          <div className="flex items-center gap-3 mb-4"><Mail className="w-7 h-7 text-accent" /><h2 className="font-heading text-2xl font-bold text-foreground">Why Email Marketing Works for Recruitment</h2></div>
          <ul className="space-y-2 mb-6">{["Reach targeted candidates", "Promote job vacancies", "Send application reminders", "Build employer branding"].map(item => (<li key={item} className="flex items-start gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />{item}</li>))}</ul>
          <p className="text-muted-foreground">👉 Our <Link to="/email-marketing" className="text-accent hover:underline font-semibold">email marketing Sri Lanka</Link> services help companies attract quality candidates.</p>
        </section>
        <section className="bg-muted/30 rounded-2xl p-8 border border-border">
          <div className="flex items-center gap-3 mb-4"><Zap className="w-7 h-7 text-accent" /><h2 className="font-heading text-2xl font-bold text-foreground">Multi-Channel Approach</h2></div>
          <p className="text-muted-foreground mb-4">Combining email with <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS</Link> and job platforms improves results significantly.</p>
          <p className="text-muted-foreground">👉 Explore <Link to="/multi-channel-marketing-sri-lanka" className="text-accent hover:underline font-semibold">multi-channel marketing campaigns</Link>.</p>
        </section>
        <section>
          <div className="flex items-center gap-3 mb-4"><Target className="w-7 h-7 text-accent" /><h2 className="font-heading text-2xl font-bold text-foreground">High-Intent Candidate Reach</h2></div>
          <p className="text-muted-foreground">Using <strong>Findit.lk</strong>, companies can reach active job seekers who are already looking for opportunities.</p>
        </section>
        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Campaign Ideas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{["Job alerts", "Hiring campaigns", "Walk-in interview promotions", "Employer branding newsletters"].map(item => (<div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border"><Briefcase className="w-5 h-5 text-accent shrink-0" /><span className="text-sm font-medium text-foreground">{item}</span></div>))}</div>
        </section>
        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Benefits</h2>
          <ul className="space-y-2">{["Faster hiring", "Better candidate quality", "Reduced hiring costs", "Stronger employer brand"].map(item => (<li key={item} className="flex items-start gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />{item}</li>))}</ul>
        </section>
        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">{faqs.map(faq => (<div key={faq.q} className="p-5 rounded-xl bg-muted/30 border border-border"><h3 className="font-semibold text-foreground mb-2">{faq.q}</h3><p className="text-sm text-muted-foreground">{faq.a}</p></div>))}</div>
        </section>
        <section className="text-center bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-10">
          <h2 className="font-heading text-2xl font-bold text-primary-foreground mb-3">Looking for Recruitment Marketing Services in Sri Lanka?</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">Speed up hiring with targeted <Link to="/email-marketing" className="text-accent hover:underline font-bold">email marketing</Link> and <Link to="/multi-channel-marketing-sri-lanka" className="text-accent hover:underline font-bold">multi-channel campaigns</Link>.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/email-marketing"><Button variant="hero-outline" size="lg" className="text-base">Email Marketing <ArrowRight className="ml-1" /></Button></Link>
            <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20recruitment%20email%20marketing%20campaigns." target="_blank" rel="noopener noreferrer"><Button variant="hero" size="lg" className="text-base">Chat on WhatsApp <ArrowRight className="ml-1" /></Button></a>
          </div>
        </section>
      </article>
      <div className="container mx-auto px-4"><RelatedArticles currentPath="/recruitment-email-marketing-hiring-sri-lanka" /></div>
    </ServicePageLayout>
  );
};

export default RecruitmentEmailHiring;
