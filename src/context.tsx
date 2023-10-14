import { createContext } from "react";

export type ThemeContextType = "red" | "green";

export const ThemeContext = createContext<ThemeContextType>("green");
