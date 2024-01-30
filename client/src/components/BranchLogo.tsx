"use client";

// React/ Next.js Imports
import Image from "next/image";
import Link from "next/link";

// Library Imports
import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid } from "@mui/material";

// Type/ Interface Imports
import { Branch } from "@/interfaces/branch";

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
  branch: Branch;
}

const BranchLogo = ({ branch }: Props) => {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width: 899px)");

  return (
    <Grid item xs={6} md={3}>
      <div className={classes.branchContainer}>
        <Link href={`/selection/${branch.branch_name}`}>
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
  );
};

export default BranchLogo;
