import {
  useState,
  type ChangeEventHandler,
  type MouseEventHandler,
} from "react";

function TermsToggle({
  onTermsClick,
  onAcceptClick,
}: {
  onTermsClick: MouseEventHandler<HTMLSpanElement>;
  onAcceptClick: MouseEventHandler<HTMLButtonElement>;
}) {
  const [isTermsApparent, setIsTermsApparent] = useState(true);

  return (
    <div className="py-4 bg-white text-center select-none">
      {isTermsApparent ? (
        <TermsLink
          onTermsClick={onTermsClick}
          onTermsCheck={(e) => setIsTermsApparent(e.target.checked === false)}
        />
      ) : (
        <AcceptButtons onAcceptClick={onAcceptClick} />
      )}
    </div>
  );
}

function TermsLink({
  onTermsClick,
  onTermsCheck,
}: {
  onTermsClick: MouseEventHandler<HTMLSpanElement>;
  onTermsCheck: ChangeEventHandler<HTMLInputElement>;
}) {
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
      <span className="border-b cursor-pointer" onClick={onTermsClick}>
        الشروط و الاحكام
      </span>
    </div>
  );
}

function AcceptButtons({
  onAcceptClick,
}: {
  onAcceptClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      className="bg-blue-600 text-white rounded-md px-12 py-3 text-lg font-bold"
      onClick={onAcceptClick}
    >
      التالي
    </button>
  );
}

export default TermsToggle;
