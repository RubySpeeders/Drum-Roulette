import "@/styles/globals.css";
import { ThemeProvider, createMuiTheme, makeStyles } from "@material-ui/core";
import type { AppProps } from "next/app";

const theme = createMuiTheme();

const useStyles = makeStyles((theme) => {
  root: {
    // some CSS that accesses the theme
  }
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
