/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [mainButton, setMainButton] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const tgApp = window.Telegram.WebApp;
    console.log(tgApp);
    tgApp.MainButton.text = "اضغط لإغلاق الصفحة";
    tgApp.onEvent("mainButtonClicked", close);

    setFirstName(window?.Telegram?.WebApp?.initData?.user?.first_name);
    setImage(window.Telegram?.WebApp?.initData?.user?.photo_url);
    if (mainButton) {
      tgApp.MainButton.show();
    } else {
      tgApp.MainButton.hide();
    }
  }, [mainButton]);

  function close() {
    window.Telegram.WebApp.close();
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

      <h2>سأخمن من أنت</h2>
      <p>حياك الله استاذ {firstName}</p>
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
