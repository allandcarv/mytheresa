import { useState } from "react";
import { Outlet } from "react-router-dom";
import styles from "./PageLayout.module.css";

export function PageLayout() {
  const [title, setTitle] = useState("");

  return (
    <>
      <header className={styles["header"]}>
        <h1>{title}</h1>
      </header>
      <main className={styles["main"]}>
        <Outlet context={{ title, setTitle }} />
      </main>
    </>
  );
}
