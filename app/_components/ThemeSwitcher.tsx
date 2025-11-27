"use client";

import { Button } from "@heroui/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import type { ButtonType } from "../_types/button";

export function ThemeSwitcher({ size = "md", iconSize = "20px" }: ButtonType) {
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
      size={size}
      onClickCapture={() => SwitchTheme(themeSwitch)}
    >
      {themeSwitch === "dark" ? (
        <Moon size={iconSize} />
      ) : (
        <Sun size={iconSize} />
      )}
    </Button>
  );
}
