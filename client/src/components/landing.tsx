"use client";

import Link from "next/link";
import Image from "next/image";
import navyLogo from "../../public/assets/images/USNavy-Band-Logo.png";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
    padding: "0 15% 0 50vw",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "600",
    marginBottom: "50px",
  },
  subtitle: {
    fontSize: "1.8rem",
    fontWeight: "400",
    marginBottom: "50px",
  },
  bandName: {
    width: "120px",
    textAlign: "center",
    color: theme.palette.text.primary,
  },
  image: {
    height: 120,
    width: 120,
  },
}));

export default function Landing() {
  const classes = useStyles();
  //comment in here since there willb e lots of changes from angelo

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Drum Roulette</h1>
      <h2 className={classes.subtitle}>
        randomly generate band percussion assignments with one click
      </h2>
      <h3 className={classes.subtitle}>Please Select Your Branch</h3>
      <Link href="/selection">
        <Image
          priority
          src={navyLogo}
          alt="Click to select Navy"
          className={classes.image}
        />
        <Typography className={classes.bandName}>US Navy Band</Typography>
      </Link>
    </div>
  );
}
