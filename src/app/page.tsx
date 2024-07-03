import About from "../components/about/About";
import ContactForm from "../components/contact-form/ContactForm";
import Header from "../components/header/Header";
import Interests from "../components/interests/Interests";
import { dummyDataCollection } from "./lib/dummyData";
import { UserData } from "./lib/types";
import styles from "./page.module.css";

 async function getData() : Promise<UserData> {
  const userData = await dummyDataCollection[0];
  return userData    
}

export default async function Home() {

  const userData = await getData();

  const { userName, imgUrl, aboutText, interests, social } = userData;


  return (
    <main className={styles.main}>
      <Header userName={userName} imgUrl={imgUrl} social={social}></Header>
      <About aboutText={aboutText}></About>
      <Interests interests={interests}></Interests>
      <ContactForm></ContactForm>
    </main>
  );
}


