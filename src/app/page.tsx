"use client";

import styles from "./page.module.css";
import { Share } from "@capacitor/share";

export default function Home() {
  const handleShare = async () => {
    await Share.share({
      title: "Sharing something",
      text: "This is a test of the capacitor share plugin",
      url: "https://github.com/crevulus",
      dialogTitle: "this should only show on Android",
    });
  };

  return (
    <main className={styles.main}>
      <h1>Capacitor Test App</h1>
      <button onClick={handleShare}>Share</button>
    </main>
  );
}
