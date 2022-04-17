import "../styles/globals.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        src="https://telegram.org/js/telegram-web-app.js"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
