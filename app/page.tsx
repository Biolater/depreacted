"use client";
import HeroImg from "@/assets/flat-lay-stethoscope-desk.jpg";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <section
      id="hero"
      style={{ backgroundImage: `url(${HeroImg.src})` }}
      className="p-4 flex items-center justify-center h-[calc(100svh-52px)] md:h-[calc(100vh-56px)]"
    >
      <div className="mx-auto flex items-center justify-center flex-col max-w-7xl z-10 text-center">
        <motion.h1
          variants={variants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2 }}
          className="text-3xl text-primary md:text-5xl font-semibold"
        >
          Your Health, Simplified
        </motion.h1>
        <motion.p
          variants={variants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.4 }}
          className="mt-2 md:mt-4 text-lg md:text-xl md:max-w-3xl mx-auto dark:text-foreground text-background"
        >
          Find answers, manage your health, and connect with a supportive
          community. Get expert health information, tools, and support to
          achieve your health goals.
        </motion.p>

        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.6 }}
        >
          <Button className="mt-6 md:mt-8">Get Started</Button>
        </motion.div>
      </div>
    </section>
  );
}
