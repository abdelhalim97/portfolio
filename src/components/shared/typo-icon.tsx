import { TypoIconPropsI } from "@/types/shared/typo-icon.interface";
import { Typography } from "@mui/material";
import React from "react";

export const TypoIcon = ({ children, text }: TypoIconPropsI) => {
  return (
    <div style={{ display: "flex", marginRight: "15px" }}>
      {children}
      <Typography
        style={{
          marginLeft: "5px",
          fontFamily: "fantasy",
        }}
      >
        {text}
      </Typography>
    </div>
  );
};
