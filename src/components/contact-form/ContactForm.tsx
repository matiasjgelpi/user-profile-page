import { bonaNova, openSans } from "../../app/lib/fonts";
import styles from "./contactForm.module.css";
export default function ContactForm() {

  async function sendMessage(formData: FormData) {
    "use server";

    console.log(Object.fromEntries(formData));

  }

  return (
    <section className={`${styles.container} ${openSans.className} `}>
      <p className={`${styles.title} ${bonaNova.className}`}>Contacto:</p>
      <div className={styles.content}>
  
        <div className={styles.formContainer}>
          <form action={sendMessage}>
            <label htmlFor="name">
              Nombre:
              <input type="text" name="name" />
            </label>
            <label htmlFor="mail">
              Mail:
              <input type="text" name="mail" />
            </label>
            <textarea name="message" id=""></textarea>
            <button type="submit"> Enviar </button>
          </form>
        </div>
      </div>
    </section>
  );
}
