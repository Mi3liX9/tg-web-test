import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react/cjs/react.production.min";

export default function Home() {
  const [mainButton, setMainButton] = useState(true);
  useEffect(() => {
    const tgApp = window.Telegram.WebApp;
    console.log(tgApp);
    tgApp.MainButton.text = "اضغط لإغلاق الصفحة";
    tgApp.onEvent("mainButtonClicked", close);

    if (mainButton) {
      tgApp.MainButton.show();
    } else {
      tgApp.MainButton.hide();
    }
  });

  function close() {
    window.Telegram.WebApp.close();
  }

  function toggleMainButton() {
    setMainButton(!mainButton);
  }

  return (
    <div dir="rtl">
      <p>
        السلام عليكم، معكم علي الشيخ <a href="https://t.me/mi3lix9">@mi3lix9</a>{" "}
        وهذا اول تطبيق ويب بوت اقوم بانشاءه!
      </p>
      <Link href="/about" passHref>
        <button>حول</button>
      </Link>

      <p>دعنا نلقي نظرة عمّا نستطيع عمله مع الويب بوت:</p>
      <button onClick={toggleMainButton}>عرض أو اخفاء الزر السفلي</button>
    </div>
  );
}
