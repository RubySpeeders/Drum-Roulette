import type { Metadata } from "next";
import ThemeRegistry from "./ThemeRegistry";

export const metadata: Metadata = {
  title: "Drum Roulette",
  description: "generate band percussion assignments",
  manifest: "/manifest.json", // '../manifest.json' ???
  icons: {
    icon: "/favicon.ico",
    apple: { url: "/ios-icon.ico", sizes: "180x180", type: "image/ico" }, // might need to change manifest.json file source
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
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: "mui" }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
