import { BrowserRouter, Route, Routes } from "react-router-dom";

import WelcomePage from "./pages/WelcomePage";
import ChatPage from "./pages/ChatPage";

import "./App.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/chatpage" element={<ChatPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
