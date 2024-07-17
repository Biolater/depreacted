import { FC } from "react";
import Link from "next/link";
const SidebarItem: FC<{
  icon: JSX.Element;
  label: string;
  href: string;
  isActive: boolean;
  onSelect: () => void;
}> = ({ icon, label, href, isActive, onSelect }) => {
  return (
    <Link
      onClick={onSelect}
      className={`flex ${
        isActive ? "bg-accent text-accent-foreground" : ""
      } font-medium text-foreground transition-all duration-300 p-2 hover:bg-accent hover:text-accent-foreground rounded-lg gap-1`}
      href={href}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </Link>
  );
};

export default SidebarItem;
