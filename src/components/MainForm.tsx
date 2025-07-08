import Footer from "./Footer";
import Logo from "./Header";
import TermsToggle from "./TermsToggle";
import LandingVideo from "./LandingVideo";
import Form from "./Form";
import { useScreenStore } from "../stores/ScreenStore";

export default function MainForm() {
  const { currentScreen } = useScreenStore();

  return (
    <>
      <Logo />
      <h1 className="text-3xl font-bold text-center mb-4">سجل الحين</h1>
      <p className="text-xl text-center mb-2">وادخل سحب على جوائز قيمة</p>
      {currentScreen == "FORM_LANDING" ? (
        <LandingVideo />
      ) : currentScreen == "FORM" ? (
        <Form />
      ) : null}
      {currentScreen == "FORM_LANDING" && <TermsToggle />}
      <Footer />
    </>
  );
}
