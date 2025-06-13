import React from "react";
import DesktopFooter from "@/components/footer/DesktopFooter";
import MobileFooter from "@/components/footer/MobileFooter";

export default function Footer() {
  return (
    <div className="flex flex-col">
      <DesktopFooter />
      <MobileFooter />
    </div>
  );
}
