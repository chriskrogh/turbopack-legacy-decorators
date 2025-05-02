import Image from "next/image";
import styles from "./page.module.css";
import Client from "./Client";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Client />
      </main>
    </div>
  );
}
