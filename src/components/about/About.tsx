import { bonaNova, openSans } from "../../app/lib/fonts";
import styles from "./about.module.css";
import animations from "../../styles/animations.module.css";
export default function About(props: { aboutText: string }) {
  const { aboutText } = props;

  return (
    <section className={`${styles.container} ${openSans.className} `}>
      <p className={bonaNova.className}>Sobre mí:</p>
      <p className={animations.borderRadiusAnimation}>{aboutText}</p>
    </section>
  );
}
