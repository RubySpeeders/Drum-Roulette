import React, { MouseEventHandler, ReactNode } from "react";

import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";

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

const useStyles = makeStyles(() => ({
  button: {
    borderRadius: "3.75em",
    fontSize: "1rem",
    padding: ".75em 4.75em",
    "&.Mui-disabled": {
      backgroundColor: "#E9E5F3",
      color: "white",
      cursor: "not-allowed",
      pointerEvents: "auto",
    },
  },
}));

export const CustomButton = ({
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
