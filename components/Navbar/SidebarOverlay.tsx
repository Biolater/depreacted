"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
const SidebarOverlay = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);
  return (
    isMounted &&
    createPortal(
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}  exit={{ opacity: 0 }} className="sidebar__overlay z-[9998] w-full h-screen absolute top-0 left-0 right-0 bottom-0 bg-black/80"></motion.div>,
      document.body
    )
  );
};

export default SidebarOverlay;
