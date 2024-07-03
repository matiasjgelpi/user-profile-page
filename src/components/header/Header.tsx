import Image from "next/image";
import styles from "./header.module.css";
import { bonaNova } from "../../app/lib/fonts";

export default function Header(props: { userName: string; imgUrl: string }) {
  const { userName, imgUrl } = props;
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
      </div>
    </header>
  );
}
