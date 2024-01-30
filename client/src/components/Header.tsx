"use client";

// React/ Next.js Imports
import Image from "next/image";

// Library Imports
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";

const useStyles = makeStyles(() => ({
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
          src="/assets/logos/dr-logo-dark.svg"
          fill
          priority
          style={{ objectFit: "contain" }}
          sizes="50vw"
        />
      </div>
    </Grid>
  );
}
