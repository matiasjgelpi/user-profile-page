import Image from "next/image";
import styles from "./header.module.css";
import { bonaNova } from "../../app/lib/fonts";

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
    <header className={styles.container}>
      <Image
        className={styles.profilePhoto}
        src={imgUrl}
        width={250}
        height={250}
        alt="profile photo"
      ></Image>
      <div className={styles.userNameContainer}>
        <h1 className={`${styles.userName} ${bonaNova.className}`}>
          {userName}
        </h1>
        {social && <div>
          {social?.map((social, index) => {
            return <div key={index}><a href={social.url} target="_blank">{social.name}</a></div>;
          })}
        </div>}
      </div>
    </header>
  );
}
