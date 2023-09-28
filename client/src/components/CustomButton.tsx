import React, { MouseEventHandler, ReactNode } from "react";
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
  state?: "inactive" | undefined;
}

const useStyles = makeStyles(() => ({
  inactive: {
    backgroundColor: "#E9E5F3",
    "&:hover": { backgroundColor: "#E9E5F3", cursor: "not-allowed" },
  },
}));

export const CustomButton = ({
  children,
  onClick,
  color = "primary",
  variant = "contained",
  disabled = false,
  state = undefined,
}: Props) => {
  const { inactive } = useStyles();

  return (
    <Button
      className={state === "inactive" ? inactive : ""}
      sx={{
        borderRadius: "3.75em",
        fontSize: "1rem",
        padding: ".75em 4.75em",
      }}
      color={color}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};
