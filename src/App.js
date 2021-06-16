import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// Component
import MainPage from "./Page/MainPage";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <div>
      <MainPage />
    </div>
  );
}

export default App;
