"use client";

import { Button } from "@heroui/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const themeSwitch = theme === "dark" ? "light" : "dark";
  function SwitchTheme(theme: string) {
    setTheme(theme);
  }
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <Button
      isIconOnly
      variant="shadow"
      onClickCapture={() => SwitchTheme(themeSwitch)}
    >
      {themeSwitch === "dark" ? <Moon size="20px" /> : <Sun size="20px" />}
    </Button>
  );
}
