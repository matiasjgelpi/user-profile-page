import { UserData } from "./types";

export const dummyDataCollection: UserData[] = [
  {
    userName: "Constanza Schnass",
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
        url: "https://www.instagram.com/cotyschnass/",
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/constanza-s-336199170/",
      },
    ],
  },
  {
    userName: "Nina Schnass",
    imgUrl: "/profilePhotoNina.jpg",
    aboutText:
      'Soy Nina Schnass, una perrita curiosa y llena de energía. Nací en un pequeño pueblo llamado "Ladrador" (sí, el nombre es bastante apropiado) y desde cachorra, mi nariz siempre ha estado en busca de aventuras. Mi amor por los huesos y las pelotas es insaciable, y no hay día en que no me lance a perseguir mariposas o a explorar los rincones más recónditos del jardín.',
    interests: [
      "Exploración canina",
      "Juegos al aire libre",
      "Socialización con otros perros",
      "Siestas bajo el sol",
      "Aventuras en el bosque",
    ],
    social: [
      {
        name: "Instagram",
        url: "https://www.instagram.com/ninalaperrabonita/",
      },
    ],
  },
];
