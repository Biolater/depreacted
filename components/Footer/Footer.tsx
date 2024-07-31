"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const Footer = () => {
  const pathname = usePathname();
  const [hide, setHide] = useState(false);
  useEffect(() => {
    if (pathname === "/symptom-checker") {
      setHide(true);
    }
    return () => setHide(false);
  }, [pathname]);
  return (
    !hide && (
      <footer className="px-4 bg-primary py-8 sm:px-16 md:px-32">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm text-white/80">© 2024. All rights reserved.</p>
        </div>
      </footer>
    )
  );
};

export default Footer;
