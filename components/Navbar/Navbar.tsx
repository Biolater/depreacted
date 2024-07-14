import Link from "next/link";
import { Input } from "@/components/ui/input";
import { HamburgerIcon } from "../Icons/index";
import { Search } from 'lucide-react';
const Navbar = () => {
  return (
    <header className="main-header flex items-center justify-between py-2 px-4 bg-primary text-primary-foreground">
      <Link href="/" className="text-3xl">
        ⚕️
      </Link>
      <div className="main-header__right flex items-center gap-3">
        <div className="relative group/searchbar">
          <div className="absolute z-10 left-[5px] size-4 top-1/2 -translate-y-1/2">
            <Search className="w-full h-full group-hover/searchbar:stroke-primary transition-all" />
          </div>
          <Input
            className="inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground pe-4 ps-6 py-2 relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
            placeholder="Search..."
          />
        </div>
        <HamburgerIcon className="cursor-pointer" />
      </div>
    </header>
  );
};

export default Navbar;
