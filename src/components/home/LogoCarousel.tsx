import { motion } from "framer-motion";

const logos = [
  { name: "Dialog", text: "Dialog" },
  { name: "Mobitel", text: "Mobitel" },
  { name: "SLT", text: "SLT" },
  { name: "Cargills", text: "Cargills" },
  { name: "Hemas", text: "Hemas" },
  { name: "Singer", text: "Singer" },
  { name: "Arpico", text: "Arpico" },
  { name: "Damro", text: "Damro" },
  { name: "Keells", text: "Keells" },
  { name: "Softlogic", text: "Softlogic" },
];

const LogoCarousel = () => {
  const doubled = [...logos, ...logos];

  return (
    <section className="py-12 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <motion.h2
          className="text-center text-lg font-semibold text-muted-foreground uppercase tracking-wider"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Trusted by Leading Brands in Sri Lanka
        </motion.h2>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-[scroll_25s_linear_infinite] w-max">
          {doubled.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center h-16 w-32 rounded-lg border border-border bg-muted/40 px-4"
            >
              <span className="text-sm font-bold text-muted-foreground whitespace-nowrap">
                {logo.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
