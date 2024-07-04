"use client";
import { useEffect, useState } from "react";
import About from "../components/about/About";
import ContactForm from "../components/contact-form/ContactForm";
import Header from "../components/header/Header";
import Interests from "../components/interests/Interests";
import ThemeChanger from "../components/theme-changer/ThemeChanger";
import { dummyDataCollection } from "./lib/dummyData";
import { UserData } from "./lib/types";
import styles from "./page.module.css";
import { openSans } from "./lib/fonts";

function getData(index: number): UserData {
  const userData = dummyDataCollection[index];
  return userData;
}

export default function Home() {
  const [userData, setUserData] = useState<UserData | undefined>(undefined);

  useEffect(() => {
    setUserData(getData(0));
  }, []);

  function handleChangeUserData() {
    if (userData?.id === 1) {
      setUserData(getData(1));
    }

    if (userData?.id === 2) {
      setUserData(getData(0));
    }
  }

  const { userName, imgUrl, aboutText, interests, social } =
    userData !== undefined
      ? userData
      : {
          userName: "",
          imgUrl: "",
          aboutText: "",
          interests: [],
          social: [],
        };

  return (
    <main className={`${userData ? styles.opacity : styles.notOpacity}`}>
      <div className={`${styles.topContainer}`}>
        <ThemeChanger></ThemeChanger>
        <button className={`${styles.userButton} ${openSans.className}`} onClick={handleChangeUserData}>
          Siguiente usuario
        </button>
      </div>
      <Header userName={userName} imgUrl={imgUrl} social={social}></Header>
      <About aboutText={aboutText}></About>
      <Interests interests={interests}></Interests>
      <ContactForm></ContactForm>
    </main>
  );
}
