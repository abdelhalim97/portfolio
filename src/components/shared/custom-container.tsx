import React from "react";
import { Container } from "@mui/material";
import { CustomContainerPropsI } from "@/types/shared/custom-container.interface copy";

const CustomContainer: React.FC<CustomContainerPropsI> = ({
  isColor = true,
  children,
}: CustomContainerPropsI) => {
  return (
    <div
      style={{
        width: "100vw",
        backgroundColor: isColor ? "#FFF" : "#000",
      }}
    >
      <Container maxWidth="lg" style={{ display: "flex" }}>
        {children}
      </Container>
    </div>
  );
};

export default CustomContainer;
