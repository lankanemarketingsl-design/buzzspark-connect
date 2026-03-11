import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { PenTool, Film, Palette, FileText, Image, Layout, Smartphone, BookOpen, Award, CreditCard, Edit, Type } from "lucide-react";

const services = [
  { icon: Image, title: "Artwork/E-flyer designing", desc: "We design professional e-flyers for business organizations and individuals. Increase the effectiveness of your marketing campaigns by sending attractive e-flyers.", price: "Price - LKR 4000" },
  { icon: Layout, title: "Business card designing", desc: "Get professional business cards designs for your business. We design customized, affordable business card designs." },
  { icon: Film, title: "Short Animated video creation", desc: "Want to tell your story of your business or services? We can help you with that with animated explainer videos. We make quality animation videos that best explain your company story. Make your story heard." },
  { icon: Palette, title: "Logo designing", desc: "Excellent custom logo designs to represent your business. We create minimalist, eye catching logo designs that get attention for your business" },
  { icon: FileText, title: "Letterhead designing", desc: "Professional letterhead designs to represent powerful brand image. Single/Double Sided letterhead designs for an affordable rate." },
  { icon: PenTool, title: "Hording designing", desc: "Coordinate with us for professional hording designs. We will provide superior, eye catching hording designs as per information given by the clients." },
  { icon: Award, title: "Name boards/ Sign boards designing", desc: "Get business sign boards and indoor sign boards. We do best name boards for an affordable price." },
  { icon: CreditCard, title: "Invitation designing", desc: "Offering customized Invitation card designing services to suit any event or occasion." },
  { icon: BookOpen, title: "Brochure & Leaflet designing", desc: "Get attractive broacher design layouts. We have personalized services to help you make your own brochures. Get it design online today." },
  { icon: Type, title: "Company profiles creation", desc: "We will help you to create a professional company profiles to represent the face of your company" },
  { icon: Edit, title: "Creative power point presentation design", desc: "We will create a polished and professional presentation for you" },
  { icon: Image, title: "Photo Editing", desc: "Professional photo editing services" },
  { icon: Smartphone, title: "Social media post designing", desc: "We will create advertising friendly beautiful social media post for your business" },
  { icon: Layout, title: "Menu Card Design", desc: "We will create Attractive menu card for your business" },
];

const moreCategories = [
  {
    title: "Logo & Identity",
    items: ["Logo design", "Logo & brand identity pack", "Logo & social media pack", "Logo & hosted website", "Logo & business card", "Business card", "Envelop", "Brand guide"],
  },
  {
    title: "Business & Advertising",
    items: ["Brochure", "Flyer 2 pages", "Postcard", "Leaflet", "Direct Mail", "Poster", "Infographic", "Booklet", "Car, truck or van wrap", "Signage", "Billboard", "Trade Show Banner", "Banner", "Email", "Email Newsletter", "PowerPoint template", "Menu A4 1 page", "Website Header", "Resume", "Word Template"],
  },
  {
    title: "Web & App Design",
    items: ["Website Design", "Website Redesign", "Website Hosting", "Blog", "WordPress theme design", "Landing page design", "Icon or button", "App Icon", "Website Icon", "App design", "iOS App", "Android App", "Facebook cover", "Social media page", "Twitter", "YouTube", "Banner ad", "Flash banner"],
  },
  {
    title: "Book & Magazine",
    items: ["Book cover", "Interior book design", "E book cover", "Magazine cover", "Other book or magazine", "Book Layout"],
  },
  {
    title: "Art & Illustration",
    items: ["Illustration or graphics", "Business Illustration", "Website Illustration", "Book Illustration", "Album Cover", "Pattern", "Card or invitation", "Invitation", "Greeting Card", "Wedding Invitation", "Character or mascot", "3D", "Other art or illustration"],
  },
  {
    title: "Packaging & Label",
    items: ["Product packaging", "Food Packaging", "Retail Packaging", "Cosmetics Packaging", "Product label", "Food Label", "Beverage Label", "Other packaging or label"],
  },
  {
    title: "Digital",
    items: ["Corporate profile", "Animation"],
  },
  {
    title: "Clothing & Merchandise",
    items: ["T-shirt", "Clothing or apparel", "Jersey", "Sweatshirt & Hoodie", "Merchandise", "Bag & Tote", "Hat & Cap", "Cup or mug", "Sticker", "Other clothing or merchandise"],
  },
  {
    title: "Outdoor Advertising",
    items: ["Vehicle Branding", "OutLet", "Rack", "DealerBoard", "Hoarding LED", "Screen", "Stall", "Event", "Lazer", "Point of Sale Displays", "Retail Advertising", "Guerilla Advertising", "Billboard Advertising"],
  },
];

const GraphicDesign = () => {
  return (
    <ServicePageLayout
      badge="Graphic Design"
      title="Graphic Designing"
      subtitle=""
    >
      {/* Intro */}
      <div className="mb-12 max-w-4xl">
        <p className="text-muted-foreground mb-4 leading-relaxed">
          We create any type of creative graphic design to keep you ahead of the competition. Our designers select designs that best speak for your brand and target audience. High-resolution colorful images, engaging videos and illustrative graphics can help potential buyers better understand your products and services and see the benefits they offer.
        </p>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Our graphic department can take you from concept to completion of customized designs just for you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-xl bg-card shadow-card border border-border text-center">
            <h3 className="font-heading font-semibold text-foreground mb-2">Edits and revisions</h3>
            <p className="text-sm text-muted-foreground">We offer designs that are editable. You can request for changes for the designs for your satisfaction.</p>
          </div>
          <div className="p-6 rounded-xl bg-card shadow-card border border-border text-center">
            <h3 className="font-heading font-semibold text-foreground mb-2">Competitive prices</h3>
            <p className="text-sm text-muted-foreground">We help you to deliver graphic designs for a reasonable rate.</p>
          </div>
          <div className="p-6 rounded-xl bg-card shadow-card border border-border text-center">
            <h3 className="font-heading font-semibold text-foreground mb-2">Eye catching, attractive graphics for you</h3>
            <p className="text-sm text-muted-foreground">We make memorable, eye catching graphics to best suit your brand.</p>
          </div>
        </div>
      </div>

      {/* Main Services */}
      <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Our Graphic designing services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="p-6 rounded-2xl bg-card shadow-card border border-border hover:border-accent/30 transition-all"
          >
            <div className="w-11 h-11 rounded-lg gradient-accent flex items-center justify-center mb-4">
              <s.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
            {s.price && (
              <div className="mt-3 inline-block px-3 py-1 rounded-lg bg-accent/10 text-accent font-semibold text-sm">{s.price}</div>
            )}
          </motion.div>
        ))}
      </div>

      {/* More Services */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6">More services offered by our company</h2>
        <div className="space-y-6">
          {moreCategories.map((cat) => (
            <div key={cat.title} className="p-6 rounded-2xl bg-muted/50 border border-border">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span key={item} className="text-sm text-foreground bg-card px-3 py-1.5 rounded-lg shadow-sm">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </ServicePageLayout>
  );
};

export default GraphicDesign;
