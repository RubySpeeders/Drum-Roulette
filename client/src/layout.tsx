import type { Metadata } from "next";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./styles/theme";

export const metadata: Metadata = {
  title: "Drum Roulette",
  description: "generate band percussion assignments",
  manifest: "/manifest.json", // '../manifest.json' ???
  icons: {
    icon: "/favicon.ico", // move this file to src
    apple: { url: "/ios-icon.ico", sizes: "180x180", type: "image/ico" }, // move this file to src -- might need to change manifest.json file source too!
  },
  appleWebApp: {
    capable: true,
    title: "Drum Roulette",
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      {/* not sure if this will work with provider and cssbaseline */}
      <CssBaseline />
      <html lang="en">
        <body>{children}</body>
      </html>
    </ThemeProvider>
  );
}
