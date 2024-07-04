"use client";

import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/app/component/ui/hero-highlight";
import { HeroHighlightDemo } from "./HeroHighlightDemo";

function Homepage() {
  return (

    <div className="min-h-screen bg-no-repeat">
        <HeroHighlightDemo />
    </div>
  );
}

export default Homepage
