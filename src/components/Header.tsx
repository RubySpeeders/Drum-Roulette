"use client";

// React/ Next.js Imports
import Image from "next/image";

// Library Imports
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "2.5rem 4rem",
  },
  logoContainer: {
    margin: "3rem 2rem 1rem 3rem",
    width: "18rem",
    height: "2rem",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "1rem",
    },
  },
}));
const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.logoContainer}>
      <Image
        alt="Drum Roulette Logo"
        src="/assets/logos/dr-logo-dark.svg"
        fill
        priority
      />
    </div>
  );
};

export default Header;
