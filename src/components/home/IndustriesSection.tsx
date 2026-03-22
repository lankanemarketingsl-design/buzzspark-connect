import { Link } from "react-router-dom";
import { Building2, GraduationCap, Landmark, UtensilsCrossed, Home, Shirt } from "lucide-react";

const industries = [
  { name: "Hotels & Tourism", icon: Building2, path: "/hotel-marketing-sri-lanka", color: "from-blue-500/20 to-blue-600/20", iconColor: "text-blue-500" },
  { name: "Restaurants & Cafes", icon: UtensilsCrossed, path: "/restaurant-marketing-sri-lanka", color: "from-orange-500/20 to-orange-600/20", iconColor: "text-orange-500" },
  { name: "Real Estate", icon: Home, path: "/real-estate-marketing-sri-lanka", color: "from-emerald-500/20 to-emerald-600/20", iconColor: "text-emerald-500" },
  { name: "Fashion & Clothing", icon: Shirt, path: "/fashion-marketing-sri-lanka", color: "from-pink-500/20 to-pink-600/20", iconColor: "text-pink-500" },
  { name: "Finance & Banking", icon: Landmark, path: "/finance-marketing-sri-lanka", color: "from-amber-500/20 to-amber-600/20", iconColor: "text-amber-500" },
  { name: "Education", icon: GraduationCap, path: "/education-marketing-sri-lanka", color: "from-purple-500/20 to-purple-600/20", iconColor: "text-purple-500" },
];

const IndustriesSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Industry Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Marketing Packages for Your Industry
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Get targeted campaigns designed specifically for your business. Reach the right customers with proven strategies.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {industries.map((industry) => (
            <Link
              key={industry.name}
              to={industry.path}
              className="group flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <industry.icon className={`w-7 h-7 ${industry.iconColor}`} />
              </div>
              <h3 className="font-semibold text-foreground text-sm sm:text-base leading-tight">
                {industry.name}
              </h3>
              <span className="mt-2 text-xs text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Packages →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
