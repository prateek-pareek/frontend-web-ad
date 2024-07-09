import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
// import { NextUIProvider } from '@nextui-org/react';
// import { ThemeProvider as NextThemesProvider } from "next-themes";

import '@/app/globals.css';


export default function App({ Component, pageProps }: AppProps) {
      return (
            <SessionProvider>
                  {/* <NextUIProvider> */}
                        {/* <NextThemesProvider attribute="class"> */}
                              <Component {...pageProps} />
                        {/* </NextThemesProvider> */}
                  {/* </NextUIProvider> */}
            </SessionProvider>
      )
}