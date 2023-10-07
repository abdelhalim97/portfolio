import {
  WELCOME_IMG_BIG,
  BLACK_BASE46_IMG,
  WELCOME_IMG_SMALL,
  WELCOME_IMG_MEDIUM,
} from "@/constants/welcome";
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
        <picture>
          <source srcSet={WELCOME_IMG_SMALL} media="(max-width: 500px)" />
          <source srcSet={WELCOME_IMG_MEDIUM} media="(max-width: 900px)" />
          <source srcSet={WELCOME_IMG_BIG} media="(min-width: 900px)" />
          <Image
            src={WELCOME_IMG_BIG}
            alt="welcome"
            quality={95}
            fill
            objectFit="contain"
            // sizes="100vw,(max-width: 600px) 75vw"
            placeholder="blur" //TODO:search more for this
            blurDataURL={BLACK_BASE46_IMG}
            priority
            style={{ zIndex: "1" }}
          />
        </picture>

        <h3
          className={styles.label}
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
        <div className={styles.card}></div>
      </div>
    </>
  );
};
