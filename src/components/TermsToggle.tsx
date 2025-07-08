import { useState, type ChangeEventHandler } from "react";
import { useScreenStore } from "../stores/ScreenStore";

function TermsToggle() {
  const [isTermsApparent, setIsTermsApparent] = useState(true);

  return (
    <div className="py-4 bg-white text-center select-none">
      {isTermsApparent ? (
        <TermsLink
          onTermsCheck={(e) => setIsTermsApparent(e.target.checked === false)}
        />
      ) : (
        <AcceptButtons />
      )}
    </div>
  );
}

function TermsLink({
  onTermsCheck,
}: {
  onTermsCheck: ChangeEventHandler<HTMLInputElement>;
}) {
  const { setCurrentScreen } = useScreenStore();

  return (
    <div
      className="text-blue-600 mb-4 flex items-center gap-1 justify-center"
      dir="rtl"
    >
      <label htmlFor="terms" className="flex items-center justify-center gap-2">
        <input
          type="checkbox"
          aria-label="Accept Terms and Conditions"
          title="Accept Terms and Conditions"
          id="terms"
          className="w-6 h-6 checked:bg-main rounded-3xl"
          onChange={onTermsCheck}
        />
        <span>اوافق على</span>
      </label>
      <span
        className="border-b cursor-pointer"
        onClick={() => setCurrentScreen("TERMS")}
      >
        الشروط و الاحكام
      </span>
    </div>
  );
}

function AcceptButtons() {
  const { setCurrentScreen } = useScreenStore();

  return (
    <button
      className="bg-blue-600 text-white rounded-md px-12 py-3 text-lg font-bold"
      onClick={() => setCurrentScreen("FORM")}
    >
      التالي
    </button>
  );
}

export default TermsToggle;
