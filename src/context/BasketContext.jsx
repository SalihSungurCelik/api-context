import { createContext } from "react";

/**
 * Context API:
 * Uygulamada birden çok bileşeni ihiyacı olan verileri tek bir merkezde yönetmeye yarar.
 * Verileri ve bunları değiştirmeye yarayan fonksiyonları tutar.
 * ve bu değişkenleri uygulamadaki herhangi bir bileşene doğrudan aktarabilir.
 * merkezi state yönetim aracı
 */

// Context yapısının temelini oluşturma
export const BasketContext = createContext();

// sağlayıcı ve onun tuttuğu verileri tanımlama
export function BasketProvider({ children }) {
  return (
    <BasketContext.Provider value={{ addToBasket }}>
        {children}
    </BasketContext.Provider>
  );
}
