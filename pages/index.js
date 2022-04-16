import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>
        Hello There, This is <a href="https://t.me/mi3lix9">@mi3lix9</a> first
        Next.js Telegram web bot!
      </p>
      <Link href="/about" passHref>
        <button>About page</button>
      </Link>
    </div>
  );
}
