"use client";
import { useState } from "react";
import About from "../components/about/About";
import ContactForm from "../components/contact-form/ContactForm";
import Header from "../components/header/Header";
import Interests from "../components/interests/Interests";
import ThemeChanger from "../components/theme-changer/ThemeChanger";
import { dummyDataCollection } from "./lib/dummyData";
import { UserData } from "./lib/types";
import styles from "./page.module.css";

function getData(index: number): UserData {
  const userData = dummyDataCollection[index];
  return userData;
}

export default function Home() {
  const [userData, setUserData] = useState(getData(0));
 

  function handleChangeUserData() {
    if (userData.id === 1) {
      setUserData(getData(1));
    }

    if (userData.id === 2) {
      setUserData(getData(0));
    }
  }

  const { userName, imgUrl, aboutText, interests, social } = userData;

  return (
    <main className={styles.main} >
      <div className={styles.topContainer} suppressHydrationWarning>
        <ThemeChanger></ThemeChanger>
        <button className={styles.userButton} onClick={handleChangeUserData}>Siguiente usuario</button>
      </div>
      <Header userName={userName} imgUrl={imgUrl} social={social}></Header>
      <About aboutText={aboutText}></About>
      <Interests interests={interests}></Interests>
      <ContactForm></ContactForm>
    </main>
  );
}
