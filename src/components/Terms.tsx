import type { MouseEventHandler } from "react";
import jabrLogo from "/jabr-logo.webp";
import sponsorsLogos from "/sponsors-logos.webp";
export default function Terms({
  onTermsCancel,
}: {
  onTermsCancel: MouseEventHandler<HTMLSpanElement>;
}) {
  return (
    <div>
      <TermsHeader onTermsCancel={onTermsCancel} />
      <div className="h-full overflow-auto no-scrollbar">
        <div className="h-full overflow-auto p-4 no-scrollbar">
          <div dir="rtl">
            <h2 className="text-2xl font-bold mb-4">الشروط و الاحكام</h2>
            <ul className="px-6 pt-8 pb-12 overflow-auto h-full">
              <p className="mb-4 flex gap-1">
                <small className="mt-1">🔴</small>
                <span>
                  المشاركة متاحة للجميع، ولا يُشترط الشراء للدخول في السحب.
                </span>
              </p>
              <p className="mb-4 flex gap-1">
                <small className="mt-1">🔴</small>
                <span>
                  يمكن لكل زائر للفرع المشاركة مرة واحدة فقط باستخدام رقم
                  الجوال، ولا يُسمح بالتسجيل المتكرر بنفس الرقم طوال فترة
                  المسابقة.
                </span>
              </p>
              <p className="mb-4 flex gap-1">
                <small className="mt-1">🔴</small>
                <span>
                  يُسمح باستخدام كل قسيمة يتم الحصول عليها للدخول في السحب، بشرط
                  التسجيل من خلال الرابط الموجود على البطاقة أو المتوفر داخل
                  الفرع، ولا تقبل أي طريقة أخرى.
                </span>
              </p>
              <p className="mb-4 flex gap-1">
                <small className="mt-1">🔴</small>
                <span>
                  لا يُسمح بالمشاركة لأي من موظفي شركات الجبر أو أقاربهم
                  المباشرين (الزوج/الزوجة/الأبناء).
                </span>
              </p>
              <p className="mb-4 flex gap-1">
                <small className="mt-1">🔴</small>
                <span>
                  يُرجى من المشتركين الاحتفاظ بجميع القسائم لأغراض التسجيل فقط.
                </span>
              </p>
              <p className="mb-4 flex gap-1">
                <small className="mt-1">🔴</small>
                <span>
                  تحتفظ الشركة بحقها في الإعلان عن أسماء الفائزين في جميع فروعها
                  وقنواتها.
                </span>
              </p>
              <p className="mb-4 flex gap-1">
                <small className="mt-1">🔴</small>
                <span>
                  المشاركة في المسابقة تعني الموافقة الكاملة على جميع الشروط
                  والأحكام.
                </span>
              </p>
              <p className="mb-4 flex gap-1">
                <small className="mt-1">🔴</small>
                <span>
                  تحتفظ الشركة بحقها في استبعاد أي مشارك يثبت مخالفته لأي من
                  الشروط المذكورة.
                </span>
              </p>
              <p className="mb-4 flex gap-1">
                <small className="mt-1">🔴</small>
                <span>
                  تخضع هذه المسابقة لشروط وأحكام الغرفة التجارية بالرياض.
                </span>
              </p>
            </ul>
          </div>
          <div dir="ltr">
            <h2 className="text-2xl font-bold mb-4">Terms & Conditions</h2>
            <div className="px-6 pt-8 pb-12 overflow-auto h-full no-scrollbar">
              <p className="mb-4 flex gap-1">
                <small className="mt-1">🔴</small>
                <span>
                  Participation is open to everyone; no purchase is required to
                  enter the draw.
                </span>
              </p>
              <p className="mb-4 flex gap-1">
                <small className="mt-1">🔴</small>
                <span>
                  Each branch visitor may participate only once using their
                  mobile number, and duplicate registrations with the same
                  number will not be accepted throughout the competition period.
                </span>
              </p>
              <p className="mb-4 flex gap-1">
                <small className="mt-1">🔴</small>
                <span>
                  Each coupon obtained can be used to enter the draw, provided
                  registration is made through the link printed on the coupon or
                  available in the branch, and no other registration methods
                  will be accepted.
                </span>
              </p>
              <p className="mb-4 flex gap-1">
                <small className="mt-1">🔴</small>
                <span>
                  Employees of Al Jabr companies and their immediate family
                  members (spouse/children) are not allowed to participate.
                </span>
              </p>
              <p className="mb-4 flex gap-1">
                <small className="mt-1">🔴</small>
                <span>
                  Participants are requested to keep all coupons for
                  registration purposes only.
                </span>
              </p>
              <p className="mb-4 flex gap-1">
                <small className="mt-1">🔴</small>
                <span>
                  The company reserves the right to announce the winners’ names
                  across all its branches and channels.
                </span>
              </p>
              <p className="mb-4 flex gap-1">
                <small className="mt-1">🔴</small>
                <span>
                  Participation in the competition constitutes full acceptance
                  of all terms and conditions.
                </span>
              </p>
              <p className="mb-4 flex gap-1">
                <small className="mt-1">🔴</small>
                <span>
                  The company reserves the right to disqualify any participant
                  proven to be in violation of any of these terms.
                </span>
              </p>
              <p className="mb-4 flex gap-1">
                <small className="mt-1">🔴</small>
                <span>
                  This competition is subject to the rules and regulations of
                  the Riyadh Chamber of Commerce.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky bottom-0">
        <div className="bg-red-500 flex items-center justify-center gap-3 py-4">
          <div className="flex items-center gap-2" dir="ltr">
            <a
              href="call:+920018880"
              title="Call us"
              className="flex items-center gap-2"
            >
              <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  className="text-red-500"
                  height="22"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
                </svg>
              </span>
              <span>920018880</span>
            </a>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <a
                title="Visit Al-Jabr Laundry on X (Twitter)"
                className="no-underline"
                href="https://x.com/AljabrLaundry"
                target="_blank"
                rel="noopener"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  className="text-red-500"
                  height="22"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                </svg>
              </a>
            </div>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <a
                title="Visit Al-Jabr Laundry on instagram"
                className="no-underline"
                href="https://www.instagram.com/aljabrlaundry"
                target="_blank"
                rel="noopener"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  className="text-red-500"
                  height="22"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </a>
            </div>
            <span>aljabrlaundry</span>
          </div>
        </div>
        <div className="bg-blue-600 mb-8 p-4 pb-0 flex items-center justify-center">
          <img
            src={sponsorsLogos}
            alt="Sponsors Logos"
            loading="lazy"
            decoding="async"
            className="h-full w-72 text-transparent"
          />
        </div>
      </div>
    </div>
  );
}

function TermsHeader({
  onTermsCancel,
}: {
  onTermsCancel: MouseEventHandler<HTMLSpanElement>;
}) {
  return (
    <div
      className="flex mt-0 justify-between items-start gap-4 mb-4z border-b border-b-main p-4 bg-white sticky top-0"
      dir="rtl"
    >
      <div>
        <img
          src={jabrLogo}
          className="w-auto h-[30px] object-contain text-transparent"
          alt="Jabr Logo"
          loading="lazy"
          decoding="async"
        />
      </div>
      <span
        onClick={onTermsCancel}
        className="cursor-pointer text-red-500 text-xl w-7 h-7 rounded-full bg-white flex items-center justify-center"
      >
        x
      </span>
    </div>
  );
}
