// React/ Next.js Imports
import React, { MouseEventHandler, ReactNode } from "react";

// Library Imports
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
  className?: string;
}

export const CustomButton = ({
  children,
  onClick,
  color = "primary",
  variant = "contained",
  disabled = false,
}: Props) => {
  return (
    <Button
      style={{
        borderRadius: "3.75em",
        fontSize: "1rem",
        padding: ".75em 4.75em",
        backgroundColor: "#8763C4",
        color: "white",
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
