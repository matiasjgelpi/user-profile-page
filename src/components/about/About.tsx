import styles from "./about.module.css";
import animations from "../../styles/animations.module.css";
import { openSans } from "../../app/lib/fonts";
export default function About(props: { aboutText: string }) {
  const { aboutText } = props;

  return (
    <section className={`${styles.container}`}>
      <p>Sobre mí:</p>
      <p
        className={`${animations.borderRadiusAnimation} ${openSans.className}`}
      >
        {aboutText}
      </p>
    </section>
  );
}
