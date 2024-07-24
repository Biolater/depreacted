"use client";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { CloseIcon } from "../Icons";
import {
  House,
  Book,
  Search,
  Newspaper,
  Settings,
  MessageCircleIcon,
  CircleUser,
} from "lucide-react";
import { FC, useEffect, useState, useRef, MouseEventHandler } from "react";
import { motion } from "framer-motion";
import SidebarItem from "./SidebarItem";
const HamburgerSidebarMenu: FC<{ onClose: () => void }> = ({ onClose }) => {
  const pathName = usePathname();
  const TOP_SIDEBAR_ITEMS = [
    {
      label: "Home",
      href: "/",
      icon: <House />,
    },
    {
      label: "Diseases & Conditions",
      href: "/diseases-conditions",
      icon: <Book />,
    },
    {
      label: "Symptom Checker",
      href: "/symptom-checker",
      icon: <Search />,
    },
    {
      label: "News",
      href: "/news",
      icon: <Newspaper />,
    },
    {
      label: "Community",
      href: "/community",
      icon: <MessageCircleIcon />,
    },
  ];
  const BOTTOM_SIDEBAR_ITEMS = [
    {
      label: "Profile",
      href: "/profile",
      icon: <CircleUser />,
    },
    {
      label: "Settings",
      href: "/settings",
      icon: <Settings />,
    },
  ];
  const [isMounted, setIsMounted] = useState(false);
  const sidebarContentRef = useRef<HTMLDivElement>(null);
  const onOutsideClick: MouseEventHandler<HTMLDivElement> = (event) => {
    if (
      sidebarContentRef.current &&
      !sidebarContentRef.current.contains(event.target as Node)
    ) {
      onClose();
    }
  };
  const handleEscClick = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  };
  useEffect(() => {
    setIsMounted(true);
    document.addEventListener("keydown", handleEscClick);
    return () => {
      setIsMounted(false);
      document.removeEventListener("keydown", handleEscClick);
    };
  }, []);
  return (
    isMounted &&
    createPortal(
      <motion.div
        onClick={onOutsideClick}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="sidebar z-[9999] w-full fixed left-0 right-0 top-0 bottom-0 h-full"
      >
        <motion.div
          ref={sidebarContentRef}
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="sidebar__content w-3/4 shadow-lg border-r border-border relative sm:max-w-sm  h-full bg-background"
        >
          <button onClick={onClose} className="absolute size-3 right-3 top-3">
            <CloseIcon className="w-full h-full fill-foreground rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none" />
          </button>
          <div className="sidebar__content__body h-full flex flex-col justify-between p-5 overflow-y-auto">
            <div className="sidebar__content__body__top flex flex-col gap-1">
              <h1 className="p-2 font-semibold text-foreground text-xl">
                Health Bar
              </h1>
              {TOP_SIDEBAR_ITEMS.map((item) => (
                <SidebarItem
                  onSelect={onClose}
                  key={item.href}
                  icon={item.icon}
                  label={item.label}
                  href={item.href}
                  isActive={pathName === item.href}
                />
              ))}
            </div>
            <div className="sidebar__content__body__bottom flex flex-col gap-1">
              {BOTTOM_SIDEBAR_ITEMS.map((item) => (
                <SidebarItem
                  onSelect={onClose}
                  key={item.href}
                  icon={item.icon}
                  label={item.label}
                  href={item.href}
                  isActive={pathName === item.href}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>,
      document.body
    )
  );
};

export default HamburgerSidebarMenu;
