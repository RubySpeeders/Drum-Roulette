"use client";

// React/ Next.js Imports
import Image from "next/image";
import Link from "next/link";

// Library Imports
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";

// Type/ Interface Imports
import { Branch } from "@/interfaces/branch";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    maxWidth: "300px",
    [theme.breakpoints.down("lg")]: {
      maxWidth: "200px",
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "150px",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "120px",
    },
  },
  branchContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },
  branchName: {
    fontSize: "1.15rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
    fontWeight: "600",
    marginTop: "1rem",
    textAlign: "center",
    color: theme.palette.text.primary,
  },
  imageContainer: {
    height: "300px",
    width: "300px",
    [theme.breakpoints.down("lg")]: {
      height: "200px",
      width: "200px",
    },
    [theme.breakpoints.down("md")]: {
      height: "150px",
      width: "150px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "120px",
      width: "120px",
    },
  },
  link: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWdith: "150px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "120px",
    },
  },
}));

interface Props {
  branch: Branch;
}

const BranchLogo = ({ branch }: Props) => {
  const classes = useStyles();

  return (
    <Grid item xs={6} md={3} className={classes.gridItem}>
      <div className={classes.branchContainer}>
        <Link
          href={`/selection/${branch.branch_name}/${branch.branch_id}`}
          className={classes.link}
        >
          <div className={classes.imageContainer}>
            <Image
              alt={`${branch.branch_name} logo`}
              src={branch.image}
              width={200}
              height={200}
              style={{
                objectFit: "cover",
                borderRadius: "100%",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <figcaption className={classes.branchName}>
            {branch.branch_name}
          </figcaption>
        </Link>
      </div>
    </Grid>
  );
};

export default BranchLogo;
