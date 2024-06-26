// React/ Next.js Imports
import React, { MouseEventHandler, ReactNode } from "react";

// Library Imports
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

interface Props {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  variant?: "text" | "outlined" | "contained";
  disabled?: boolean | undefined;
}

const useStyles = makeStyles((theme) => ({
  button: {
    fontSize: "1rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: ".75rem",
      width: "100%",
    },
    padding: ".75em 4.75em",
    [theme.breakpoints.down("sm")]: {
      padding: ".75em 1em",
      minWidth: "12rem",
    },
  },
}));

const CustomButton = ({
  children,
  onClick,
  color = "primary",
  variant = "contained",
  disabled = false,
}: Props) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      color={color}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
