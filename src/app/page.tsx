import About from "../components/about/About";
import ContactForm from "../components/contact-form/ContactForm";
import Header from "../components/header/Header";
import Interests from "../components/interests/Interests";
import styles from "./page.module.css";

const dummyData = {
  userName: "Constanzas Schnass",
  imgUrl: "/profilePhoto.jpg",
  aboutText:
    "Soy Coty Schnass, egresada del Polivalente de Arte y Gestora Cultural por la UNMDP. Pasante en la Feria del Libro y voluntaria en Casa Bruzzone durante varios años. amante del arte y la cultura, recorrió diferentes museos del mundo admirando la belleza, pero también prestando atención a la organización que facilita tener grandes experiencias. Hoy, tras años de colaborar con otros, se anima a llevar adelante un proyecto propio, pero a la vez con el anhelo de convertirlo en algo compartido.",
  interests: [
    "arte y cultura",
    "voluntariado",
    "experiencias en museos",
    "organización y gestión",
    "colaboración y proyectos compartidos",
    "desarrollo personal y profesional",
    "educación y aprendizaje continuo",
    "persistencia y lucha",
    "historia y tradición",
    "comunidad y relaciones interpersonales",
  ],
  social: [
    {
      name: "instagram",
      url: "https://www.instagram.com/constanzaschnass",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/constanzaschnass",
    },
  ],
};

export default function Home() {
  const { userName, imgUrl, aboutText, interests, social } = dummyData;

  return (
    <main className={styles.main}>
      <Header userName={userName} imgUrl={imgUrl}></Header>
      <About aboutText={aboutText}></About>
      <Interests interests={interests}></Interests>
      <ContactForm social={social}></ContactForm>

    </main>
  );
}
