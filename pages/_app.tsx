import "../styles/globals.css";
import Script from "next/script";
import { useTheme } from "../src/hooks/useTheme";

function MyApp({ Component, pageProps }) {
  useTheme();

  return (
    <div>
      <Script
        strategy="beforeInteractive"
        src="https://telegram.org/js/telegram-web-app.js"
      />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
