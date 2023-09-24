import { WELCOME_IMG } from "@/constants/welcome";
import Image from "next/image";
import { relative } from "path";
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
          placeholder="blur"
          blurDataURL="/images/black_image.jpg"
          priority
          style={{ zIndex: "1" }}
        />
      </div>
    </>
  );
};
