import { useState, useEffect } from "react";

export default function Pre() {
  const [tgApp, setTgApp] = useState(undefined);

  useEffect(() => {
    setTgApp(window.Telegram.WebApp);
  }, []);

  return <pre dir="ltr">{JSON.stringify(tgApp, null, 2)}</pre>;
}
