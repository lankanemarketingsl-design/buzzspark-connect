import { motion } from "framer-motion";
import { Check, X, AlertTriangle } from "lucide-react";

const features = [
  { feature: "Email Marketing", buzz: "Advanced targeting", other: "Basic", otherStatus: "partial" },
  { feature: "SMS Marketing", buzz: "Data-driven campaigns", other: "Limited", otherStatus: "partial" },
  { feature: "WhatsApp Marketing", buzz: "Bulk + targeted", other: "Rare", otherStatus: "no" },
  { feature: "Social Media Marketing", buzz: "Included", other: "Extra cost", otherStatus: "partial" },
  { feature: "Findit.lk Integration", buzz: "Exclusive", other: "Not available", otherStatus: "no" },
  { feature: "Multi-Channel Campaigns", buzz: "All-in-one", other: "Single channel", otherStatus: "no" },
  { feature: "Category-Based Targeting", buzz: "Yes", other: "No", otherStatus: "no" },
  { feature: "Large Segmented Database", buzz: "350,000+", other: "Limited", otherStatus: "partial" },
  { feature: "Campaign Launch Speed", buzz: "Within days", other: "Slow", otherStatus: "partial" },
  { feature: "Industry-Specific Audiences", buzz: "Yes", other: "No", otherStatus: "no" },
  { feature: "End-to-End Management", buzz: "Full service", other: "Partial", otherStatus: "partial" },
  { feature: "SME Pricing", buzz: "Affordable", other: "Expensive", otherStatus: "partial" },
  { feature: "Graphic Design", buzz: "Included", other: "Extra", otherStatus: "no" },
  { feature: "Performance Tracking", buzz: "Detailed reports", other: "Limited", otherStatus: "partial" },
];

const StatusIcon = ({ status }: { status: string }) => {
  if (status === "yes") return <Check className="w-4 h-4 text-emerald-400 inline mr-1.5 flex-shrink-0" />;
  if (status === "no") return <X className="w-4 h-4 text-red-400 inline mr-1.5 flex-shrink-0" />;
  return <AlertTriangle className="w-4 h-4 text-amber-400 inline mr-1.5 flex-shrink-0" />;
};

const CompetitorComparison = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            The Buzz Connect Difference
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2">
            How We Compare
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            See why leading brands in Sri Lanka choose Buzz Connect over other marketing providers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-border shadow-card bg-card"
        >
          {/* Header */}
          <div className="grid grid-cols-3 text-sm font-semibold">
            <div className="p-4 bg-muted/50 text-muted-foreground">Feature</div>
            <div className="p-4 bg-primary text-primary-foreground text-center">Buzz Connect</div>
            <div className="p-4 bg-muted/50 text-muted-foreground text-center">Other Providers</div>
          </div>

          {/* Rows */}
          {features.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 text-sm border-t border-border ${
                i % 2 === 0 ? "bg-card" : "bg-muted/20"
              }`}
            >
              <div className="p-3 sm:p-4 font-medium text-foreground">{row.feature}</div>
              <div className="p-3 sm:p-4 text-center flex items-center justify-center gap-1">
                <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span className="text-foreground text-xs sm:text-sm">{row.buzz}</span>
              </div>
              <div className="p-3 sm:p-4 text-center flex items-center justify-center gap-1">
                <StatusIcon status={row.otherStatus} />
                <span className="text-muted-foreground text-xs sm:text-sm">{row.other}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CompetitorComparison;
