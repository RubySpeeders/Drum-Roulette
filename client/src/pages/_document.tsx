import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@mui/styles";
// import theme from '../src/theme'; // Adjust here as well

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/assets/images/favicon.ico" />

          {/* Configurations to make site to appear like an app when pinned to phone home screen */}

          {/* Configuration file "manifest" configures site to appear app-like when added to and launched from Android homescreen */}
          <link rel="manifest" href="/manifest.json" />

          {/* Apple-specific configurations to make site appear app-like when added to and launched from iOS mobile device homescreen */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/assets/images/ios-icon.ico"
          />

          {/* Makes website opened from iPhone home screen appear more like an app, no browser URL at the top of the screen e.g. */}
          <meta name="apple-mobile-web-app-capable" content="yes" />

          {/* Gives the "app" a name when added to an iPhone's home screen */}
          <meta name="apple-mobile-web-app-title" content="Drum Roulette" />

          {/* Colors the status bar (battery, wifi, data) white */}
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
