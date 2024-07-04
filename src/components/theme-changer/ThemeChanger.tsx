import { useTheme } from "next-themes";
import styles from "./themeChanger.module.css";
import { useEffect, useState } from "react";

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme();
  const [themeName, setThemeName] = useState<string>("Dark");

  useEffect(() => {
    setThemeName(theme === "dark" ? "Light" : "Dark");
  }, [setThemeName,    theme]);

  function handleSetTheme() {
    setThemeName(theme === "dark" ? "Light" : "Dark");
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleSetTheme}>
        {themeName + " theme"}
      </button>
    </div>
  );
}
