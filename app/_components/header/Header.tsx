"use client";

import { useMediaQuery } from "@/app/_hooks/useMediaQuery";
import MobileHeader from "./components/MobileHeader";
import DesktopHeader from "./components/DesktopHeader";

export default function Header() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return isMobile ? <MobileHeader /> : <DesktopHeader />;
}
