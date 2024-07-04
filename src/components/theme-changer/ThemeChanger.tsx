import { useTheme } from "next-themes";
import styles from "./themeChanger.module.css";
import { useEffect, useState } from "react";

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme();
  const [themeName, setThemeName] = useState<string>("Dark");

  useEffect(() => {
    const toggledTheme = theme === "dark" ? "Light theme" : "Dark theme"
    setThemeName(toggledTheme);
  }, [setThemeName, theme]);

  function handleSetTheme() {
    const toggledTheme = theme === "dark" ? "light" : "dark";
    const toggledButtonName = theme === "dark" ? "Light theme" : "Dark theme";
    setThemeName(toggledButtonName);
    setTheme(toggledTheme);
  }

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleSetTheme}>
        {themeName}
      </button>
    </div>
  );
}
