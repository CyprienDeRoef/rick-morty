"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Tooltip, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { Toggle } from "./ui/toggle";

export function ModeToggle(): React.JSX.Element {
    const { theme, setTheme } = useTheme();
    const isDark: boolean = theme === "dark";

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Toggle variant="outline" onClick={ (): void => isDark ? setTheme('light') : setTheme('dark') }>
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    </Toggle>
                </TooltipTrigger>
                <TooltipContent>
                    { isDark ? "Switch to light mode" : "Switch to dark mode" }
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}