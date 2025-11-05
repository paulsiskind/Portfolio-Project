import { motion } from "framer-motion";
import { type PropsWithChildren } from "react";

const viewport = { once: true, margin: "-100px" } as const;

export function SectionWrapper({ children }: PropsWithChildren) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={viewport}
    >
      {children}
    </motion.section>
  );
}
