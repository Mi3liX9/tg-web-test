export default function Pre() {
  return <pre dir="ltr">{JSON.stringify(tgApp, null, 2)}</pre>;
}
