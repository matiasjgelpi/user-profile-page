import Image from "next/image";
import styles from "./header.module.css";
import animations from "../../styles/animations.module.css";
import { bonaNova, openSans } from "../../app/lib/fonts";
import ThemeChanger from "../theme-changer/ThemeChanger";

export default function Header(props: {
  userName: string;
  imgUrl: string;
  social?: {
    name: string;
    url: string;
  }[];
}) {
  const { userName, imgUrl, social } = props;
  return (
    <section>
      <div className={styles.topContainer}>
      <ThemeChanger></ThemeChanger>
      </div>
    
      <header className={`${styles.container} ${openSans.className}`}>
        <Image
          className={`${styles.profilePhoto} ${animations.borderRadiusAnimation}`}
          src={imgUrl}
          width={250}
          height={250}
          alt={`${userName} profile photo`}
          title={`${userName} profile photo`}
        ></Image>
        <div className={styles.userNameContainer}>
          <h1 className={`${styles.userName} ${bonaNova.className}`}>
            {userName}
          </h1>
          {social && (
            <div className={styles.socialContainer}>
              {social?.map((social, index) => {
                return (
                  <a key={index} href={social.url} target="_blank">
                    {social.name}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </header>
    </section>
  );
}
