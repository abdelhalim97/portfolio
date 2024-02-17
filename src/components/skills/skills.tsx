import CustomContainer from "@/components/shared/custom-container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import React from "react";
import { TypoIcon } from "@/components/shared/typo-icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat, faDatabase } from "@fortawesome/free-solid-svg-icons";
import {
  faCss3,
  faGitAlt,
  faLaravel,
  faNodeJs,
  faReact,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <CustomContainer isColor={true}>
      <Grid container spacing={2} sx={{ color: "#000" }}>
        <Grid item md={6} xs={12}>
          <Typography sx={{ fontWeight: "bold", typography: "h3" }}>
            Hello
          </Typography>
          <Typography sx={{ typography: "body1" }}>
            Hi i'm{" "}
            <span style={{ fontWeight: "bold" }}>Abdelhalim Ben Oun</span>.
            <br />
            Software Engineer with 1 year experience of building APIs using
            NodeJS.
            <br />I consider myself a creative and proactive person,who enjoys
            developing and who is willing to face challenges.
          </Typography>

          <Typography
            sx={{ fontWeight: "bold", typography: "h4", paddingTop: "5 px" }}
          >
            SKILLS
          </Typography>
          <Grid container spacing={1}>
            <Grid md={4} display={"flex"}>
              <TypoIcon text="CSS">
                <FontAwesomeIcon
                  icon={faCss3}
                  size={"xs"}
                  style={{ width: "20px" }}
                />
              </TypoIcon>

              <TypoIcon text="JS/Typescript">
                <FontAwesomeIcon
                  icon={faSquareJs}
                  size={"xs"}
                  style={{ width: "20px" }}
                />
              </TypoIcon>

              <TypoIcon text="NodeJS">
                <FontAwesomeIcon
                  icon={faNodeJs}
                  size={"xs"}
                  style={{ width: "20px" }}
                />
              </TypoIcon>

              <TypoIcon text="ReactJS">
                <FontAwesomeIcon
                  icon={faReact}
                  size={"xs"}
                  style={{ width: "20px" }}
                />
              </TypoIcon>

              <TypoIcon text="NestJS">
                <FontAwesomeIcon
                  icon={faCat}
                  size={"xs"}
                  style={{ width: "20px" }}
                />
              </TypoIcon>

              <TypoIcon text="Laravel">
                <FontAwesomeIcon
                  icon={faLaravel}
                  size={"xs"}
                  style={{ width: "20px" }}
                />
              </TypoIcon>
              <TypoIcon text="MongoDB/MYSQL">
                <FontAwesomeIcon
                  icon={faDatabase}
                  size={"xs"}
                  style={{ width: "20px" }}
                />
              </TypoIcon>
              <TypoIcon text="Git">
                <FontAwesomeIcon
                  icon={faGitAlt}
                  size={"xs"}
                  style={{ width: "20px" }}
                />
              </TypoIcon>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4} xs={12}></Grid>
        <Grid item md={2} xs={12}></Grid>
      </Grid>
    </CustomContainer>
  );
};

export default Skills;
