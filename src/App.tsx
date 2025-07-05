import { useState } from "react";
import "./App.css";
import Terms from "./components/Terms";
import MainForm from "./components/MainForm";

function App() {
  const [count, setCount] = useState(0);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <div className="text-white max-w-xl m-auto h-screen mt-0 overflow-y-auto overflow-x-hidden bg-blue-600">
      {showTerms ? (
        <Terms onTermsCancel={() => setShowTerms(false)} />
      ) : (
        <MainForm onTermsClick={() => setShowTerms(true)} />
      )}
    </div>
  );
}

export default App;
