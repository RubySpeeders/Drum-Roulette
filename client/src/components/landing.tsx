"use client";

import Link from "next/link";
import Image from "next/image";
import drLogo from "../../public/assets/images/dr-logo-white.png";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Branch } from "@/interfaces/branch";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "4rem",
    maxWidth: "100vw",
    overflowX: "hidden",
  },
  logoContainer: {
    marginBottom: "4rem",
  },
  h2: {
    fontSize: "3rem",
    fontWeight: "600",
    margin: "0 0 10px 0",
  },
  h3: {
    fontSize: "2rem",
    fontWeight: "600",
    margin: "0 0 5.2rem 0",
  },
  h4: {
    fontSize: "1.5rem",
    fontWeight: "600",
    margin: "0 0 4rem 0",
  },
  branchesContainer: {
    display: "flex",
    gap: "1.5rem",
    maxWidth: "100vw",
    flexWrap: "wrap",
  },
  branchName: {
    fontSize: "2rem",
    fontWeight: "600",
    textAlign: "center",
    color: theme.palette.text.primary,
  },
  imageContainer: {
    width: "305px",
    height: "305px",
    position: "relative",
  },
  image: {
    borderRadius: 9999,
    objectFit: "cover",
  },
}));

interface Props {
  branches: Branch[];
}

export default function Landing({ branches }: Props) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.logoContainer}>
        <Image alt="Drum Roulette Logo" src={drLogo} priority />
      </div>
      <h2 className={classes.h2}>Hello!</h2>
      <h3 className={classes.h3}>
        Randomly generate band percussion assignments with just a few clicks.
      </h3>
      <h4 className={classes.h4}>Select Branch</h4>
      <div className={classes.branchesContainer}>
        {branches.map((branch) => (
          <Link key={branch.branch_id} href="/selection">
            <div className={classes.imageContainer}>
              <Image
                fill
                priority
                sizes="25vw"
                src={branch.image}
                alt={`Click to select ${branch.branch_name}`}
                className={classes.image}
              />
            </div>
            <Typography className={classes.branchName}>
              {branch.branch_name}
            </Typography>
          </Link>
        ))}
      </div>
    </div>
  );
}
