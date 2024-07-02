import Image from "next/image";
import styles from "./page.module.css";
import Header from "./_components/header/Header";
import Interests from "./_components/interests/Interests";
import About from "./_components/about/About";
import ContactForm from "./_components/contact-form/ContactForm";

export default function Home() {
  return <main className={styles.main}>
    <Header></Header>
    <Interests></Interests>
    <About></About>
    <ContactForm></ContactForm>
  </main>;
}
