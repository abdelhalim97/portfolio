import { WELCOME_IMG, BLACK_BASE46_IMG } from "@/constants/welcome";
import Image from "next/image";
import React from "react";

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
          quality={93}
          fill
          sizes="100vw,(max-width: 600px) 75vw"
          placeholder="blur" //TODO:search more for this
          blurDataURL={BLACK_BASE46_IMG}
          priority
          style={{ zIndex: "1" }}
        />
        <div
          style={{
            position: "absolute",
            zIndex: "3",
            color: "#fff",
            right: "50%",
            top: "50%",
          }}
        >
          Abdelhalim's Protfolio
        </div>
      </div>
    </>
  );
};
