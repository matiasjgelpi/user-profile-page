"use client";

import { useFormState } from "react-dom";
import { bonaNova, openSans } from "../../app/lib/fonts";
import { sendMessage } from "../../app/lib/formValidation";
import styles from "./contactForm.module.css";

const initialState = {
  message: "",
  mail: "",
  name: "",
};
export default function ContactForm() {
  const [state, formAction] = useFormState(sendMessage, initialState);

  return (
    <section className={`${styles.container} ${openSans.className} `}>
      <p className={`${styles.title} ${bonaNova.className}`}>Contacto:</p>
      <div className={styles.content}>
        <div className={styles.formContainer}>
          <form action={formAction}>
            <label htmlFor="name">
              Nombre:
              <input type="text" name="name" />
              <p>{state?.name}</p>
            </label>
            <label htmlFor="mail">
              Mail:
              <input type="text" name="mail" />
              <p>{state?.mail}</p>
            </label>
            <label htmlFor="message">
              <textarea name="message" id=""></textarea>
              <p>{state?.message}</p>
            </label>
            <button type="submit"> Enviar </button>
          </form>
        </div>
      </div>
    </section>
  );
}
