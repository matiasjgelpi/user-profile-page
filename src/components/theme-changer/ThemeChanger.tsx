"use client";

import { useTheme } from "next-themes";
import styles from "./themeChanger.module.css";

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={styles.container}>
      {theme === "dark" && (
        <button className={styles.button} onClick={() => setTheme("light")}>Light theme</button>
      )}
      {theme === "light" && (
        <button className={styles.button} onClick={() => setTheme("dark")}>Dark theme</button>
      )}
    </div>
  );
}
