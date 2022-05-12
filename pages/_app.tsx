import "../styles/homepage.css";
import "../styles/utilities.css";
import "../styles/detail.css";
import "../styles/checkout.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
