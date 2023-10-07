import { WELCOME_IMG, BLACK_BASE46_IMG } from "@/constants/welcome";
import Image from "next/image";
import React from "react";
import styles from "./welcome.module.css";
export const Welcome = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Image
          src={WELCOME_IMG}
          alt="welcome"
          fill
          objectFit="contain"
          // sizes="100vw,(max-width: 600px) 75vw"
          placeholder="blur" //TODO:search more for this
          blurDataURL={BLACK_BASE46_IMG}
          priority
          style={{ zIndex: "1" }}
        />
        <div className={styles.card}></div>
        <h3
          style={{
            zIndex: 4,
            color: "#fff",
            position: "absolute",
            left: 0,
            right: 0,
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            width: "33vw",
            top: "53%",
          }}
        >
          Abdelhalim Ben Oun Portfolio
        </h3>
      </div>
    </>
  );
};
