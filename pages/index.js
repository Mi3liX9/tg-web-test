import Link from "next/link";

export default function Home() {
  if (typeof window !== "undefined") console.log(window.Telegram.WebApp);

  function sendMessage() {
    window.Telegram.WebApp.sendData({
      text: "Hello, I am Ali Al-Shaikh from Qatif, Saudi Arabia.",
    });
  }

  return (
    <div>
      <p>
        Hello There, This is <a href="https://t.me/mi3lix9">@mi3lix9</a> first
        Next.js Telegram web bot!
      </p>
      <Link href="/about" passHref>
        <button>About page</button>
      </Link>

      <p>Lets look at what Telegram Bot Web API offer for us:</p>
      <button onClick={sendMessage}>send a message</button>
    </div>
  );
}
