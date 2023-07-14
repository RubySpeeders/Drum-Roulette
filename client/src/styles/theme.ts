import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#ff69b4", // Replace with your desired background color
    },
    primary: {
      // light: ??
      main: "#B2B4CB",
      // dark: ??
      // contrastText: ??
    },
    secondary: {
      // light: ??
      main: "#515A6B",
      // dark: ??
      //   contrastText: ??,
    },
    // Used by `getContrastText()` to maximize the contrast between the background and the text.
    contrastThreshold: 4.5,
  },
});

export default theme;
