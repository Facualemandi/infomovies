"use client";
import "./globals.css";
import React from "react";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

export default function RootLayout({ children, pageProps }) {
  const queryClient = React.useRef(new QueryClient());

  return (
    <html lang="en">
      <head />

      <QueryClientProvider client={queryClient.current}>
        <Hydrate>
          <body>{children}</body>
        </Hydrate>
      </QueryClientProvider>
    </html>
  );
}
