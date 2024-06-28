import { createTheme } from "@mui/material/styles";
import { Theme } from "@mui/material/styles/createTheme";
import { Open_Sans } from "next/font/google";

declare module "@mui/styles/defaultTheme" {
  interface DefaultTheme extends Theme {}
}

declare module "@mui/system" {
  interface BreakpointOverrides {
    xxs: true;
  }
}

const open_Sans = Open_Sans({
  subsets: ["latin"],
});

export const theme: Theme = createTheme({
  typography: {
    fontFamily: open_Sans.style.fontFamily,
  },
  breakpoints: {
    values: {
      // default values
      xxs: 375,
      xs: 480,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
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
          borderRadius: "3.75em",
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
      light: "#E9E5F3",
      main: "#8763C4",
      dark: "#4A2462",
    },
    secondary: {
      main: "#515A6B",
    },
    info: {
      main: "#D745D1",
    },
    text: {
      primary: "#fff",
    },
    background: {
      default: "#402E4B",
    },
  },
});
