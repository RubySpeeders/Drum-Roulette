"use client";
// React/ Next.js Imports
import Image from "next/image";

// Library Imports

import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
// Other component Imports

import drLogo from "../../public/assets/images/dr-logo-white.png";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "2.5rem 4rem",
  },
  logoContainer: {
    margin: "3rem",
    maxWidth: "90vw",
    width: "18rem",
    height: "2rem",
    position: "relative",
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <Grid>
      <div className={classes.logoContainer}>
        <Image
          alt="Drum Roulette Logo"
          src={drLogo}
          fill
          priority
          style={{ objectFit: "contain" }}
          sizes="50vw"
        />
      </div>
    </Grid>
  );
}
