import { bonaNova, openSans } from "../../app/lib/fonts";
import styles from "./about.module.css";
export default function About(props: { aboutText: string }) {
  const { aboutText } = props;

  return (
    <section className={`${styles.container} ${openSans.className}`}>
      <p className={bonaNova.className}>Sobre mí:</p>
      <p>{aboutText}</p>
    </section>
  );
}
