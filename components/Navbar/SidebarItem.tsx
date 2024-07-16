import { FC } from "react";
import Link from "next/link";
const SidebarItem: FC<{ icon: JSX.Element; label: string; href: string }> = ({
  icon,
  label,
  href,
}) => {
  return (
    <Link
      className="flex font-medium text-foreground transition-all duration-300 p-2 hover:bg-accent hover:text-accent-foreground rounded-lg gap-1"
      href={href}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </Link>
  );
};

export default SidebarItem;
