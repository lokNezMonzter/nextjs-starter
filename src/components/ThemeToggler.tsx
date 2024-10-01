"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function ThemeToggler() {
  const { setTheme, theme } = useTheme();

  function darkModeThemeHandler() {
    console.log(theme);
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <div className="flex items-center space-x-2">
      <Switch id="dark-mode" onCheckedChange={darkModeThemeHandler} />
      <Label className="text-md font-semibold" htmlFor="dark-mode">
        Dark Mode
      </Label>
    </div>
  );
}
