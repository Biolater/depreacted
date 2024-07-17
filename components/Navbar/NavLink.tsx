import Link from "next/link";
import { FC } from "react";
const NavLink: FC<{ href: string; label: string; isActive: boolean }> = ({
  href,
  label,
  isActive,
}) => {
  return (
    <Link
      className={`transition-colors duration-300 ${
        isActive
          ? "text-background"
          : "hover:text-background text-background/70 "
      } font-medium`}
      href={href}
    >
      {label}
    </Link>
  );
};

export default NavLink;
