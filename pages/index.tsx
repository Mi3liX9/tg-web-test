/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";

const useTgApp = () => {
  const [tgApp, setTgApp] = useState(undefined);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const tgApp = (window as any).Telegram.WebApp;
    setTgApp(tgApp);

    tgApp.onEvent("viewportChanged", () => {
      setHeight((window as any).Telegram.WebApp.viewportStableHeight);
    });

    return () =>
      tgApp.offEvent("viewportChanged", () =>
        setHeight((window as any).Telegram.WebApp.viewportStableHeight)
      );
  }, [height]);

  return tgApp;
};

export default function Home() {
  const tgApp = useTgApp();

  function close() {}

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

      <pre dir="ltr">{JSON.stringify(tgApp, null, 2)}</pre>
      <h2>سأخمن من أنت</h2>
      <p>
        حياك الله استاذ{" "}
        {/* <Link href="/pre" passHref>
          <a>{firstName}</a>
        </Link> */}
      </p>

      <p>
        باستخدام الواجهة البرمجية للويب بوت استطيع معرفى بعض معلومات المستخدم،
        بعضها يكون بطلب صلاحيات مثل الموقع والكاميرا وبعضها لا، مثل بروفايل
        المستخدم والثيم
      </p>
      <h2>نظرة على الويب بوت</h2>
      <p>دعنا نلقي نظرة عمّا نستطيع عمله مع الويب بوت:</p>

      {/* <button onClick={toggleMainButton}>عرض أو اخفاء الزر السفلي</button> */}
    </div>
  );
}
