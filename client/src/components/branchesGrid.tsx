"use client";

import { Branch } from "@/interfaces/branch";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
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

const BranchesGrid = ({ branches }: Props) => {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width: 899px)");

  return (
    <Grid container spacing={{ xs: 2, md: 3 }}>
      {branches.map((branch) => (
        <Grid key={branch.branch_id} item xs={6} md={3}>
          <div className={classes.branchContainer}>
            <Link href="/selection">
              <div
                className={
                  matches ? classes.imageContainerSmall : classes.imageContainer
                }
              >
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
      ))}
    </Grid>
  );
};

export default BranchesGrid;
