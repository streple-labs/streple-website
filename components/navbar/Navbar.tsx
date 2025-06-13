import React from 'react';
import DesktopNavbar from '@/components/navbar/DesktopNavbar';
import MobileNavbar from '@/components/navbar/MobileNavbar';

export default function Navbar() {
  return (
    <header className="flex flex-col">
      <DesktopNavbar />
      <MobileNavbar />
    </header>
  );
}
