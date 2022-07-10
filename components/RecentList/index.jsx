import Link from "next/link";
import styles from "./index.module.scss";

export const RecentList = (props) => {
  const { title, data } = props;
  return (
    <div className={styles.recentList}>
      <div className={styles.header}>
        <div className={styles.title}>Recent {title}</div>
        <div className={styles.viewAll}>
          <Link href="/posts">{`View All >`}</Link>
        </div>
      </div>
      <div>123</div>
    </div>
  );
};
