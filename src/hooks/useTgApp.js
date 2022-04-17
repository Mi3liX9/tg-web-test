import { useEffect, useState } from "react";

export function useTgApp() {
  const [tgApp, setTgApp] = useState(undefined);
  useEffect(() => {
    setTgApp(window.Telegram.WebApp);
  }, []);

  return tgApp;
}
