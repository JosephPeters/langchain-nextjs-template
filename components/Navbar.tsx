"use client";

import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="mb-4">
      <a className={`mr-4 ${pathname === "/" ? "text-white border-b" : ""}`} href="/">👨🏾‍🦰 Dr. Tyson</a>
      <a className={`mr-4 ${pathname === "/chiro" ? "text-white border-b" : ""}`} href="/chiro">👨🏻‍⚕️ PMR</a>
      <a className={`mr-4 ${pathname === "/cleaning" ? "text-white border-b" : ""}`} href="/cleaning">👩🏼‍🦰 Ashyln</a>
    </nav>
  );
}