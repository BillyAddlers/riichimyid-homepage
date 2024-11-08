"use client";

import { HeroComponent } from "@/components/hero";
import { NavbarComponent } from "@/components/navbar";
import { motion } from "framer-motion";
import { SelectorComponent } from "@/app/(tabs)/selector";

export default function Home() {
  return (
    <motion.div>
      <NavbarComponent />
      <HeroComponent />
      <SelectorComponent />
    </motion.div>
  );
}
