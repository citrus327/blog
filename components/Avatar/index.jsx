import Image from "next/image";
import styles from "./index.module.scss";
import blogConfigs from "../../blog.config";

const myLoader = ({ src }) => {
  return `https://avatars.githubusercontent.com/u/${src}?v=4`;
};

export const Avatar = () => {
  return (
    <div
      className={styles.avatar}
      onClick={() => {
        window.open("https://github.com/phshy0607");
      }}
    >
      <Image
        loader={myLoader}
        src="17166940"
        alt="avatar"
        width="24px"
        height="24px"
        className={styles.img}
      />
      <div className={styles.username}>{blogConfigs.username}</div>
    </div>
  );
};
