import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { Header } from "./components/Header";
import { Checkout } from "./pages/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sepet" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
