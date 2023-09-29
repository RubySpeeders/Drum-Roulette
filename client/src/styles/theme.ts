import { createTheme } from "@mui/material/styles";
import { Theme } from "@mui/material/styles/createTheme";
import { Inter } from "next/font/google";

declare module "@mui/styles/defaultTheme" {
  interface DefaultTheme extends Theme {}
}

const inter = Inter({
  subsets: ["latin"],
});

export const theme: Theme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        a {
          text-decoration: none;
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          width: "fit-content",
          textTransform: "none",
          lineHeight: "1.5em",
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            "&:hover": {
              backgroundColor: "#4A2462",
            },
          },
        },
      ],
    },
  },
  palette: {
    primary: {
      main: "#8763C4",
    },
    secondary: {
      main: "#515A6B",
    },
    text: {
      primary: "#ffffff",
    },
    background: {
      default: "#322F42",
    },
  },
});
