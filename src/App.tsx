import { useEffect } from "react";
import "./App.css";
import Terms from "./components/Terms";
import MainForm from "./components/MainForm";
import Success from "./components/Success";
import useAssetsStore from "./stores/AssetsStore";
import { useScreenStore } from "./stores/ScreenStore";

function App() {
  const { currentScreen: screen } = useScreenStore();
  const { fetchAssets } = useAssetsStore();
  useEffect(() => {
    fetchAssets();
  }, [fetchAssets]);

  return (
    <div className="text-white max-w-xl m-auto h-screen mt-0 overflow-y-auto overflow-x-hidden bg-blue-600">
      {screen === "TERMS" ? (
        <Terms />
      ) : screen === "FORM" || screen === "FORM_LANDING" ? (
        <MainForm />
      ) : screen == "SUCCESS" ? (
        <Success />
      ) : null}
    </div>
  );
}

export default App;
