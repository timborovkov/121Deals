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
        light: "#2fbaf7",
        main: "#00a0e5",
        dark: "#006794",
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

          <script
            async
            src="https://mapapi.cloud.huawei.com/mapjs/v1/api/js?callback=initMap&key="
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DT0XSNY9K3');
            `,
            }}
          />

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
        </Head>
        <div style={{ minHeight: "100vh", overflowY: "scroll" }}>
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
