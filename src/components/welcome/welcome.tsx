import { WELCOME_IMG_BIG, BLACK_BASE46_IMG } from "@/constants/welcome";
import Image from "next/image";
import React from "react";
import styles from "./welcome.module.css";
import CustomContainer from "@/components/shared/custom-container";
export const Welcome = () => {
  return (
    <CustomContainer isColor={false}>
      <div
        style={{
          position: "relative",
          justifyContent: "center",
          width: "100vw",
          height: "85vh",
        }}
      >
        <Image
          src={WELCOME_IMG_BIG}
          alt="welcome"
          quality={95}
          fill
          // sizes="100vw,(max-width: 600px) 75vw"
          placeholder="blur" //TODO:search more for this
          blurDataURL={BLACK_BASE46_IMG}
          priority
          style={{ zIndex: "1", objectFit: "cover" }}
        />
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
    </CustomContainer>
  );
};
