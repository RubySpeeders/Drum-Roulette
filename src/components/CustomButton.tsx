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
  className?: string;
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

const CustomButton = React.forwardRef<HTMLButtonElement, Props>(
  function CustomButton(
    {
      children,
      onClick,
      color = "primary",
      variant = "contained",
      disabled = false,
      className,
      ...rest
    }: Props,
    ref
  ) {
    const classes = useStyles();
    // Spread the props to the underlying DOM element.
    return (
      <Button
        className={`${classes.button} ${className}`}
        color={color}
        variant={variant}
        onClick={onClick}
        disabled={disabled}
        ref={ref}
        {...rest}
      >
        {children}
      </Button>
    );
  }
);

export default CustomButton;
