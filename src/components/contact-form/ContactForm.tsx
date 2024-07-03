import { bonaNova, openSans } from "../../app/lib/fonts";
import styles from "./contactForm.module.css";
export default function ContactForm(props: {
  social: {
    name: string;
    url: string;
  }[];
}) {
  const { social } = props;

  return (
    <section className={`${styles.container} ${openSans.className} `}>
      <p className={`${styles.title} ${bonaNova.className}`}>Contacto:</p>
      <div className={styles.content}>
        <div  >
          {social.map((social, index) => {
            return <div key={index}>{social.name}</div>;
          })}
        </div>
        <div className={styles.formContainer}>
          <form>
            <label htmlFor="name">
              Nombre:
              <input type="text" name="name" />
            </label>
            <label htmlFor="mail">
              Mail:
              <input type="text" name="mail" />
            </label>
            <textarea name="" id=""></textarea>
            <input type="submit" value="Enviar" />
          </form>
        </div>
      </div>
    </section>
  );
}
