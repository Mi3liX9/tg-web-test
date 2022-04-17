/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [mainButton, setMainButton] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [image, setImage] = useState("");
  const [tgApp, setTgApp] = useState(undefined);
  const [isDark, setIsDark] = useState(undefined);
  useEffect(() => {
    console.log(window.matchMedia("(prefers-color-scheme: dark)"));

    setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    setTgApp((window as any).Telegram.WebApp);
    const tgApp = (window as any).Telegram.WebApp;
    tgApp.MainButton.text = "اضغط لإغلاق الصفحة";
    tgApp.onEvent("mainButtonClicked", close);

    setFirstName(
      (window as any)?.Telegram?.WebApp?.initDataUnsafe?.user?.first_name
    );
    setImage((window as any).Telegram?.WebApp?.initDataUnsafe?.user?.photo_url);
    if (mainButton) {
      tgApp.MainButton.show();
    } else {
      tgApp.MainButton.hide();
    }
  }, [mainButton, tgApp]);

  function close() {
    (window as any).Telegram.WebApp.close();
  }

  function toggleMainButton() {
    setMainButton(!mainButton);
  }

  return (
    <div dir="rtl">
      <h2>السلام عليكم</h2>
      <p>
        السلام عليكم، معكم علي الشيخ <a href="https://t.me/mi3lix9">@mi3lix9</a>{" "}
        وهذا اول تطبيق ويب بوت اقوم بانشاءه!
      </p>
      <Link href="/about" passHref>
        <button>حول علي الشيخ</button>
      </Link>
      <pre>{JSON.stringify(isDark, null, 2)}</pre>
      <h2>سأخمن من أنت</h2>
      <p>
        حياك الله استاذ{" "}
        <Link href="/pre" passHref>
          <a>{firstName}</a>
        </Link>
      </p>
      <img src={image} alt={firstName} />
      <p>
        باستخدام الواجهة البرمجية للويب بوت استطيع معرفى بعض معلومات المستخدم،
        بعضها يكون بطلب صلاحيات مثل الموقع والكاميرا وبعضها لا، مثل بروفايل
        المستخدم والثيم
      </p>
      <h2>نظرة على الويب بوت</h2>
      <p>دعنا نلقي نظرة عمّا نستطيع عمله مع الويب بوت:</p>

      <button onClick={toggleMainButton}>عرض أو اخفاء الزر السفلي</button>
    </div>
  );
}