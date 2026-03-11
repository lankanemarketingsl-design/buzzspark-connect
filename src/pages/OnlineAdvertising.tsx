import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { CheckCircle, Globe, ShoppingBag, Building } from "lucide-react";

const finditPackages = [
  { item: "Image of Promotion Ad", impressions: "25,000+", price: "LKR 1,000", duration: "4 Weeks" },
  { item: "Popup Banner", impressions: "35,000+", price: "LKR 2,500", duration: "1 Week" },
  { item: "Featured Promotion", impressions: "200,000+", price: "LKR 5,000", duration: "4 Weeks" },
  { item: "Email Campaign", impressions: "250,000+", price: "LKR 4,000", duration: "4 Weeks" },
  { item: "Push Notification", impressions: "250,000+", price: "—", duration: "4 Weeks" },
];

const buyitPackages = [
  { item: "Popup banner", price: "LKR 25,000", duration: "1 Week" },
  { item: "Top banner", price: "LKR 15,000", duration: "2 Weeks" },
  { item: "Side banner in the listing page", price: "LKR 15,000", duration: "2 Weeks" },
  { item: "Side banner in the app view", price: "LKR 5,000", duration: "1 Week" },
];

const comboPackages = [
  {
    name: "Package 1",
    impressions: "500,000",
    period: "2 Days",
    desc: "If you are a small business and you are interested in small rebranding then this is a perfect plan for you. Get results generating outcomes for a reasonable price. Increase your brand exposure by tapping all social media platforms.",
    features: ["Findit Popup", "Buyit Popup", "Buyit Side Banner", "Buyit Top Banner", "Findit Featured", "Email Campaign", "Facebook Story / Post", "Instagram Story"],
  },
  {
    name: "Package 2",
    impressions: "750,000",
    period: "4 Days",
    desc: "For those who are large enterprise, increase brand awareness and brand recognition, with featured Ads and website banners for the most demanded website for offers, discounts, and promotions. Provide effective email campaigns for 250,000 subscribers.",
    features: ["Findit Popup", "Buyit Popup", "Buyit Side Banner", "Buyit Top Banner", "Findit Featured", "Email Campaign", "Facebook Story / Post", "Instagram Story", "Sharing Social Media Promotions"],
  },
  {
    name: "Package 3",
    impressions: "1,000,000",
    period: "5 Days",
    desc: "For large enterprise who are interested in increasing brand awareness and brand recognition. Increase your brand visibility with a Featured Ad, a pop-up banner and the main banner for your business with a winning SMS marketing strategy. Get an effective email campaign and powerful results driven lead generation campaign.",
    features: ["Findit Popup", "Buyit Popup", "Buyit Side Banner", "Buyit Top Banner", "Findit Featured", "2 Email Campaigns", "Push Notification", "SMS Campaign - 25,000", "Facebook Story / Post", "Instagram Story"],
  },
  {
    name: "Package 4",
    impressions: "1,200,000",
    period: "7 Days",
    desc: "Large enterprise can archive a winning enterprise marketing plan for large consumer markets as effectively as possible. We offer powerful SMS marketing strategy for a large audience of 75,000 subscribers and effective email campaigns. Guaranteeing quality lead generation campaigns.",
    features: ["Findit Popup", "Buyit Popup", "Buyit Side Banner", "Buyit Top Banner", "Findit Featured", "3 Email Campaigns", "Push Notification", "SMS Campaign - 75,000", "Facebook Story / Post", "Instagram Story"],
  },
];

const OnlineAdvertising = () => {
  return (
    <ServicePageLayout
      badge="Online Advertising"
      title="Online Advertising"
      subtitle="Your Brand is your true story, Build your brand online with US!"
    >
      {/* Findit.lk */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <Globe className="w-8 h-8 text-accent" />
          <h2 className="font-heading text-2xl font-bold text-foreground">Findit.lk – No 1 promotion directory in Sri Lanka</h2>
        </div>
        <p className="text-muted-foreground mb-4 max-w-4xl">
          Findit.lk promotions Directory with more than 1000 latest offers and discounts from Travel Agents, Banks, Credit Cards offers, Hotel Offers, Restaurant Promotions, Clothing Offers, Electronics, and Mobile Phones Deals, Food and Drink Promotions, Latest Events, Holiday Deals, and Education opportunities.
        </p>
        <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Why you advertise with Findit?</h3>
        <ul className="space-y-2 mb-6 max-w-4xl">
          <li className="flex items-start gap-2 text-sm text-foreground">
            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /> No 1 Ranking in google search for, promotions in Sri Lanka, discounts in Sri Lanka, offers in Sri Lanka. So you can reach local and globally customers.
          </li>
          <li className="flex items-start gap-2 text-sm text-foreground">
            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /> 100% Web traffic only from people who are interested in promotions, Discounts and offers.
          </li>
          <li className="flex items-start gap-2 text-sm text-foreground">
            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /> 2000+ registered companies and 250,000+ subscribers database who interested our promotions, discount and offers.
          </li>
          <li className="flex items-start gap-2 text-sm text-foreground">
            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /> We have more 200,000 hits for the month people who are looking for offers and promotions and discounts.
          </li>
          <li className="flex items-start gap-2 text-sm text-foreground">
            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /> Facebook fan page 22,000+
          </li>
        </ul>
        <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Packages</h3>
        <div className="overflow-x-auto">
          <table className="w-full bg-card rounded-xl shadow-card border border-border overflow-hidden">
            <thead>
              <tr className="gradient-hero text-primary-foreground">
                <th className="text-left p-4 font-heading">Item</th>
                <th className="text-center p-4 font-heading">Impressions</th>
                <th className="text-center p-4 font-heading">Price</th>
                <th className="text-center p-4 font-heading">Duration</th>
              </tr>
            </thead>
            <tbody>
              {finditPackages.map((p, i) => (
                <tr key={p.item} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                  <td className="p-4 text-sm text-foreground font-medium">{p.item}</td>
                  <td className="p-4 text-center text-sm text-muted-foreground">{p.impressions}</td>
                  <td className="p-4 text-center text-sm font-semibold text-accent">{p.price}</td>
                  <td className="p-4 text-center text-sm text-muted-foreground">{p.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Buyit.lk */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <ShoppingBag className="w-8 h-8 text-secondary" />
          <h2 className="font-heading text-2xl font-bold text-foreground">Buyit.lk - Classified advertisement site in Sri Lanka</h2>
        </div>
        <p className="text-muted-foreground mb-2 max-w-4xl">
          Effective way of communicating your message to the island wide audience.
        </p>
        <p className="text-muted-foreground mb-6 max-w-4xl">
          Buyit.lk is a website that has sell products and services in minutes, such as Vehicles, Electronic items, Mobile phones, Properties & pets. If you are a business owner or a seller, you can create your own online shop with us for free and sell things effortlessly and earn profits. If your a consumer looking to buy things at a good value, then buyit.lk is the best Online Marketplace in Sri Lanka where you can buy these products for a great deal. Find the best deals on buyit.lk
        </p>
        <p className="text-muted-foreground mb-6">You can promote your brand advertisement with buyit.lk</p>
        <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Packages</h3>
        <div className="overflow-x-auto">
          <table className="w-full bg-card rounded-xl shadow-card border border-border overflow-hidden">
            <thead>
              <tr className="gradient-hero text-primary-foreground">
                <th className="text-left p-4 font-heading">Item</th>
                <th className="text-center p-4 font-heading">Price</th>
                <th className="text-center p-4 font-heading">Duration</th>
              </tr>
            </thead>
            <tbody>
              {buyitPackages.map((p, i) => (
                <tr key={p.item} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                  <td className="p-4 text-sm text-foreground font-medium">{p.item}</td>
                  <td className="p-4 text-center text-sm font-semibold text-accent">{p.price}</td>
                  <td className="p-4 text-center text-sm text-muted-foreground">{p.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* PlaceBook.lk */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <Building className="w-8 h-8 text-accent" />
          <h2 className="font-heading text-2xl font-bold text-foreground">PlaceBook.lk - Make your business to right audience</h2>
        </div>
        <p className="text-muted-foreground mb-6 max-w-4xl">
          PlaceBook.lk is a Business listing site which allows people to list their business and generate leads and increase brand awareness. visitors can find product or any service with such as restaurants near to them or doctors near to them with placebook.lk.
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
          {["Top Ads", "Side ads", "Featured ads", "Pop up banner"].map((ad) => (
            <span key={ad} className="px-4 py-2 rounded-lg bg-accent/10 text-accent font-semibold text-sm">{ad}</span>
          ))}
        </div>
      </div>

      {/* Combo Packages */}
      <div>
        <h2 className="font-heading text-2xl font-bold text-foreground mb-8">Combined Web Ad Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {comboPackages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card shadow-card border border-border"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm font-semibold text-accent uppercase">{pkg.name}</div>
                <div className="text-xs text-muted-foreground">Period - {pkg.period}</div>
              </div>
              <div className="font-heading text-2xl font-bold text-foreground mb-3">{pkg.impressions} Impressions</div>
              <p className="text-sm text-muted-foreground mb-4">{pkg.desc}</p>
              <p className="text-sm text-foreground font-medium mb-2">We will provide a total solutions which includes,</p>
              <ul className="space-y-2">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </ServicePageLayout>
  );
};

export default OnlineAdvertising;
