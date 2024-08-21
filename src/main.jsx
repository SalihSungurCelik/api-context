import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BasketProvider } from "./context/basketContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  //Provider = sağlayıcı,
  // Bütün uygulamayı sağlayacak şekilde konumlandırılır.
  // Bu sayede uygulamanıın içerisindeki tüm bileşenler sağlayıcının valuesunda tanımlanan değerlere erişilebilir.
  <BasketProvider>
    <App />
  </BasketProvider>
);
