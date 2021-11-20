import React from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const theme = createTheme({
    palette: {
      primary: {
        light: "#84e381",
        main: "#49c746",
        dark: "#2f802d",
        contrastText: "#ffffff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <CssBaseline />
        <Head>
          <title>121Deals</title>
          <meta name="description" content="Where great deals are made" />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <link rel="stylesheet" href="/main.css" />

          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          />
          <link rel="icon" href="/icon.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/icon.png" />

          <meta name="application-name" content="121Deals" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="apple-mobile-web-app-title" content="121Deals" />
          <meta name="description" content="" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />

          <script
            dangerouslySetInnerHTML={{
              __html: `
              UPLOADCARE_PUBLIC_KEY = 'ec84594e8303ed066cf2';
              UPLOADCARE_LOCALE_TRANSLATIONS = {
                  buttons: {
                      choose: {
                          files: {
                              other: 'Select images'
                          }
                      }
                  }
              }
            `,
            }}
          />
        </Head>
        <div style={{ minHeight: "100vh", overflowY: "scroll" }}>
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
