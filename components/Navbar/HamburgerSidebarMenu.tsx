"use client";
import { createPortal } from "react-dom";
import { CloseIcon } from "../Icons";
import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
const HamburgerSidebarMenu: FC<{ onClose: () => void }> = ({ onClose }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);
  return (
    isMounted &&
    createPortal(
      <motion.div
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="sidebar z-[9999] w-full fixed left-0 right-0 top-0 bottom-0 h-screen"
      >
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="sidebar__content w-3/4 shadow-lg border-r border-border relative sm:max-w-sm  h-full bg-background"
        >
          <button onClick={onClose} className="absolute size-3 right-4 top-4">
            <CloseIcon className="w-full h-full fill-foreground rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none" />
          </button>
        </motion.div>
      </motion.div>,
      document.body
    )
  );
};

export default HamburgerSidebarMenu;
