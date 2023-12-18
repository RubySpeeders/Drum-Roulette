"use client";

import Link from "next/link";
import Image from "next/image";
import drLogo from "../../public/assets/images/dr-logo-white.png";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Branch } from "@/interfaces/branch";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "2.5rem 4rem",
  },
  logoContainer: {
    marginBottom: "3rem",
    maxWidth: "90vw",
    width: "18rem",
    height: "2rem",
    position: "relative",
  },
  h2: {
    fontSize: "3rem",
    fontWeight: "600",
    margin: "0",
  },
  h3: {
    fontSize: "1.5rem",
    fontWeight: "600",
    margin: ".5rem 0 0 0",
  },
  h3Container: {
    marginTop: "3rem",
    marginBottom: "1rem",
  },
  branchContainer: {
    position: "relative",
    height: "100%",
    width: "fit-content",
  },
  branchName: {
    fontSize: "1.5rem",
    fontWeight: "600",
    marginTop: "1rem",
    textAlign: "center",
    color: theme.palette.text.primary,
  },
  image: {
    borderRadius: 9999,
    objectFit: "cover",
  },
  imageContainer: {
    height: "20vw",
    width: "20vw",
  },
  imageContainerSmall: {
    height: "30vw",
    width: "30vw",
  },
}));

interface Props {
  branches: Branch[];
}

export default function Landing({ branches }: Props) {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width: 899px)");

  return (
    <div className={classes.container}>
      <div className={classes.logoContainer}>
        <Image
          alt="Drum Roulette Logo"
          src={drLogo}
          fill
          priority
          style={{ objectFit: "contain" }}
        />
      </div>
      <h2 className={classes.h2}>Hello!</h2>
      <h3 className={classes.h3}>
        Randomly generate band percussion assignments with just a few clicks.
      </h3>
      <div className={classes.h3Container}>
        <h3 className={classes.h3}>Select Branch</h3>
      </div>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {branches.map((branch) => (
          <Grid key={branch.branch_id} item xs={6} md={3}>
            <div className={classes.branchContainer}>
              <Link href="/selection">
                <div
                  className={
                    matches
                      ? classes.imageContainerSmall
                      : classes.imageContainer
                  }
                >
                  <img
                    src={branch.image}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: 9999,
                    }}
                  />
                </div>
                <figcaption className={classes.branchName}>
                  {branch.branch_name}
                </figcaption>
              </Link>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
