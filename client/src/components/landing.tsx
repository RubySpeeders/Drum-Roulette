"use client";

import Link from "next/link";
import Image from "next/image";
import navyLogo from "../../public/assets/images/USNavy-Band-Logo.png";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Branch } from "@/interfaces/branch";

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

  const branches: Branch[] = [
    { branch_id: 1, branch_name: "Navy" },
    { branch_id: 2, branch_name: "Navy" },
    { branch_id: 3, branch_name: "Navy" },
    { branch_id: 4, branch_name: "Navy" },
  ];

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Drum Roulette</h1>
      <h2 className={classes.subtitle}>
        randomly generate band percussion assignments with just a few clicks
      </h2>
      <h3 className={classes.subtitle}>Please Select Your Branch</h3>
      <div style={{ display: "flex" }}>
        {branches.map((branch) => (
          <Link
            href="/selection"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Image
              priority
              src={navyLogo}
              alt={`Click to select ${branch.branch_name}`}
              className={classes.image}
            />
            <Typography className={classes.bandName}>
              {branch.branch_name}
            </Typography>
          </Link>
        ))}
      </div>
    </div>
  );
}
