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
}

<<<<<<< HEAD:client/src/components/CustomButton.tsx
const useStyles = makeStyles((theme) => ({
  button: {
    fontSize: "1rem",
    padding: ".75em 4.75em",
    [theme.breakpoints.down("sm")]: {
      padding: "1rem",
    },
  },
}));

export default function CustomButton({
=======
const CustomButton = ({
>>>>>>> develop:src/components/CustomButton.tsx
  children,
  onClick,
  color = "primary",
  variant = "contained",
  disabled = false,
<<<<<<< HEAD:client/src/components/CustomButton.tsx
}: Props) {
  const classes = useStyles();

=======
}: Props) => {
>>>>>>> develop:src/components/CustomButton.tsx
  return (
    <Button
      style={{
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
<<<<<<< HEAD:client/src/components/CustomButton.tsx
}
=======
};

export default CustomButton;
>>>>>>> develop:src/components/CustomButton.tsx
