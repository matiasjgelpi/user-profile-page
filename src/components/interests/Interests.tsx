import { bonaNova, openSans } from "../../app/lib/fonts";
import styles from "./interest.module.css";

export default function Interests(props: { interests: string[] }) {
  const { interests } = props;
  return (
    <section className={styles.container}>
      <p className={`${styles.title} ${bonaNova.className}`}>Intereses:</p>
      <ul className={`${styles.interestsContainer} ${openSans.className}`}>
        {interests?.map((interest, index) => (
          <li key={index} className={styles.interest}>
            {interest}
          </li>
        ))}
      </ul>
    </section>
  );
}
