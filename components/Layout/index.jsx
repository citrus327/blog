import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "./index.module.scss";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Minimal Life</title>
        <meta name="description" content="Minimal Life Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <header className={styles.header}>
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
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
}
