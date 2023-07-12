import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
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
    background: {
      default: "#B2B4CB", // Replace with your desired background color
    },
  },
});

export default theme;
