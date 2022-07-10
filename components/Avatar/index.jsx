import Image from "next/image";
import styles from "./index.module.scss";
import blogConfigs from "../../blog.config";

export const Avatar = () => {
  return (
    <div className={styles.avatar}>
      <Image
        src="https://avatars.githubusercontent.com/u/17166940?v=4"
        alt="avatar"
        width="24px"
        height="24px"
        className={styles.img}
      />
      <div className={styles.username}>{blogConfigs.username}</div>
    </div>
  );
};
