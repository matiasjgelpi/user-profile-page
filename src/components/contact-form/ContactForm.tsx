"use client";

import { useFormState } from "react-dom";
import { bonaNova, openSans } from "../../app/lib/fonts";
import { sendMessage } from "../../app/lib/formValidation";
import styles from "./contactForm.module.css";
import { useEffect, useRef, useState } from "react";

const initialState = {
  message: "",
  mail: "",
  name: "",
};
export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const [sended, setSended] = useState<boolean>(false);
  const [state, formAction] = useFormState(handleSubmit, initialState);

  async function handleSubmit(prevState: any, formData: FormData) {
    if (sended) setSended(false);

    const res = await sendMessage(prevState, formData);

    if (res.message === "" && res.name === "" && res.mail === "") {
      setSended(true);
    }
    return res;
  }

  useEffect(() => {
    if (sended) {
      formRef.current?.reset();
    }
  });

  return (
    <section className={`${styles.container} ${openSans.className} `}>
      <div className={styles.header}>
        <p className={`${styles.title} ${bonaNova.className}`}>Contacto:</p>
        <p className={`${sended ? styles.sended : styles.notSended} ${styles.messageSended}` }>
          ¡Mensaje enviado con éxito!
        </p>
        
      </div>

      <div className={styles.content}>
        <div className={styles.formContainer}>
          <form ref={formRef} action={formAction}>
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
function handleSubmit(
  state: { message: string; mail: string; name: string },
  formAction: (payload: FormData) => void
) {
  throw new Error("Function not implemented.");
}
