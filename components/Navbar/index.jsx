import Link from "next/link";
import styles from "./index.module.scss";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      {[
        { label: "Home", value: "/" },
        { label: "Posts", value: "/posts" },
      ].map((o) => {
        return (
          <nav key={o.value} className={styles.nav}>
            <Link href={o.value}>{o.label}</Link>
          </nav>
        );
      })}
    </div>
  );
};
