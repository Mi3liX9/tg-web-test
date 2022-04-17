import { useEffect } from "react";

export function useTheme() {
  useEffect(() => {
    if (typeof window === "undefined") {
    } else if ((window as any).Telegram.WebApp.initData !== "") {
      document.body.className = "telegram";
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.body.className = "dark";
    }
  }, []);
}
