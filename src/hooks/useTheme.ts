import { useEffect } from "react";

export function useTheme() {
  useEffect(() => {
    if (typeof window === "undefined") {
    } else if (
      typeof (window as any).Telegram.WebApp.initDataUnsafe.user === undefined
    ) {
      console.log((window as any).Telegram.WebApp.initDataUnsafe.user);

      document.body.className = "telegram";
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.body.className = "dark";
    }
  }, []);
}
