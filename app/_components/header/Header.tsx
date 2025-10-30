"use client";

import useIsMobile from "@/app/_hooks/useIsMobile";
import MobileHeader from "./components/MobileHeader";
import DesktopHeader from "./components/DesktopHeader";

export default function Header() {
  const isMobile = useIsMobile();
  return isMobile ? <MobileHeader /> : <DesktopHeader />;
}
