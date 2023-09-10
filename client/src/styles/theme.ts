import { createTheme } from "@mui/material/styles";
import { Theme } from "@mui/material/styles/createTheme";
import { Inter } from "next/font/google";

declare module "@mui/styles/defaultTheme" {
  interface DefaultTheme extends Theme {}
}

const inter = Inter({
  subsets: ["latin"],
});

const theme: Theme = createTheme({
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
  },
  palette: {
    primary: {
      main: "#B2B4CB",
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

export default theme;
