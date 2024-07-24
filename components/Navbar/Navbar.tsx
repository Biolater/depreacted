"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Input } from "@/components/ui/input";
import { HamburgerIcon } from "../Icons/index";
import { Search } from "lucide-react";
import HamburgerSidebarMenu from "./HamburgerSidebarMenu";
import SidebarOverlay from "./SidebarOverlay";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import NavLink from "./NavLink";
const Navbar = () => {
  const pathName = usePathname();
  const navLinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Diseases & Conditions",
      href: "/diseases-conditions",
    },
    {
      label: "Symptom Checker",
      href: "/symptom-checker",
    },
    {
      label: "News",
      href: "/news",
    },
    {
      label: "Community",
      href: "/community",
    },
  ];
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleSidebarOpen = () => {
    setSidebarOpen(true);
    document.body.style.overflow = "hidden";
  };
  const handleSidebarClose = () => {
    setSidebarOpen(false);
    document.body.style.overflow = "auto";
  };
  return (
    <header className="main-header z-10 sticky top-0 py-2 px-4 bg-primary text-primary-foreground">
      <div className="flex mx-auto max-w-7xl items-center justify-between">
        <AnimatePresence>
          {sidebarOpen && <HamburgerSidebarMenu onClose={handleSidebarClose} />}
        </AnimatePresence>
        <AnimatePresence>{sidebarOpen && <SidebarOverlay />}</AnimatePresence>
        <Link href="/" className="text-3xl">
          🩺
        </Link>
        <div className="hidden lg:flex items-center gap-3">
          {navLinks.map((link) => (
            <NavLink
              isActive={pathName === link.href}
              label={link.label}
              href={link.href}
              key={link.href}
            />
          ))}
        </div>
        <div className="main-header__right flex items-center gap-1 sm:gap-2 md:gap-3">
          <div className="relative group/searchbar">
            <div className="absolute z-10 left-[5px] size-4 top-1/2 -translate-y-1/2">
              <Search className="w-full h-full group-hover/searchbar:stroke-primary transition-all" />
            </div>
            <Input
              className="inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground pe-4 ps-6 py-2 relative h-8 justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none w-44 sm:w-32 lg:w-64"
              placeholder="Search for diseases, symptoms, or articles"
              title="Search for diseases, symptoms, or articles"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button>
                <Avatar className="hidden lg:block text-foreground cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 me-4">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <Link href="/profile">
                  <DropdownMenuItem>
                    Profile
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuItem>
                  Notifications
                  <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
                </DropdownMenuItem>
                <Link href="/settings">
                  <DropdownMenuItem>
                    Settings
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </Link>
                <Link href="/messages">
                  <DropdownMenuItem>
                    Messages
                    <DropdownMenuShortcut>⌘M</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <button
            className="cursor-pointer lg:hidden"
            onClick={handleSidebarOpen}
          >
            <HamburgerIcon />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
