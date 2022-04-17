import { useTgApp } from "../src/hooks/useTgApp";
export default function Pre() {
  const tgApp = useTgApp();

  return <pre dir="ltr">{JSON.stringify(tgApp, null, 2)}</pre>;
}
