"use client";
import { createPortal } from "react-dom";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

type Props = {
  handleEscClick: () => void;
};

const UserProfileMenu: React.FC<Props> = ({ handleEscClick }) => {
  const [isMounted, setIsMounted] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleEscClick();
      }
    };
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target as Node)
      ) {
        handleEscClick();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [handleEscClick]);
  return (
    isMounted &&
    createPortal(
      <motion.div
        ref={profileMenuRef}
        initial={{ y: -10, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: -10, opacity: 0, scale: 0.95 }}
        className="user-profile__menu origin-top hidden lg:block fixed z-[9999] top-14 right-4"
      >
        <div className="min-w-[8rem] h-[200px] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md w-56"></div>
      </motion.div>,
      document.body
    )
  );
};

export default UserProfileMenu;
