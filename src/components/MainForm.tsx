import { useState, type MouseEventHandler } from "react";
import Footer from "./Footer";
import Logo from "./Header";
import TermsToggle from "./TermsToggle";
import LandingVideo from "./LandingVideo";
import Form from "./Form";

export default function MainForm({
  onTermsClick,
}: {
  onTermsClick: MouseEventHandler<HTMLSpanElement>;
}) {
  const [isFormApparent, setIsFormApparent] = useState(false);
  return (
    <>
      <Logo />
      <h1 className="text-3xl font-bold text-center mb-4">سجل الحين</h1>
      <p className="text-xl text-center mb-2">وادخل سحب على جوائز قيمة</p>
      {!isFormApparent ? <LandingVideo /> : <Form />}
      <TermsToggle
        onTermsClick={onTermsClick}
        onAcceptClick={() => setIsFormApparent(true)}
      />
      <Footer />
    </>
  );
}
