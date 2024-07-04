import { useTheme } from "next-themes";
import styles from "./themeChanger.module.css";
import { useEffect, useState } from "react";
import { openSans } from "../../app/lib/fonts";

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme();
  const [themeName, setThemeName] = useState<string>();

  useEffect(() => {
    if (!theme || !themeName) {
      setTheme("light");
      setThemeName("Dark theme");
    }
    const toggledButtonName = theme === "dark" ? "Light theme" : "Dark theme";

    setThemeName(toggledButtonName);
  }, [setThemeName, theme, setTheme, themeName]);

  function handleSetTheme() {
    const toggledTheme = theme === "dark" ? "light" : "dark";
    const toggledButtonName = theme === "dark" ? "Light theme" : "Dark theme";
    setThemeName(toggledButtonName);
    setTheme(toggledTheme);
  }

  return (
    <div className={styles.container}>
      <button
        className={`${styles.button} ${openSans.className}`}
        onClick={handleSetTheme}
      >
        {themeName}
      </button>
    </div>
  );
}
