import Image from "next/image";

import Link from "next/link";

import ThemeToggle from "./ThemeToggle";

async function NavBar() {
  return (
    <header className="sticky w-full z-30 top-0 flex h-16 items-center md:gap-6 border-b bg-background px-4 md:px-6 mb-6">
      <div className="relative">
        <Image
          priority
          src="/moonfire-logo-6.png"
          width={150}
          height={18}
          alt={"Moonfire logo"}
        />
      </div>

      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <div className="ml-auto flex-1 sm:flex-initial"></div>
        <div className="gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
