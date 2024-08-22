import { createContext, useState } from "react";

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
  const [basket, setBasket] = useState([{ id: 1, name: "title" }]);

  //sepete yeni ürün ekler
  const addToBasket = (product) => {
    // sepete bu üründen daha önce ekleniş mi kontrol et.
    const found = basket.find((i) => i.id === product.id);
    if (found) {
      // elemanın miktarını artırır.
      const updated = { ...found, amount: found.amount + 1 };

      // dizideki ürünü güncelle
      const newBasket = basket.map((i) => (i.id === updated.id ? updated : i));

      //state'i güncelle
      setBasket(newBasket);
    } else {
      // miktarı bir olarak ayarlayıp ürünü sepete aktar.
      setBasket([...basket, { ...product, amount: 1 }]);
    }
  };

  //sepetten ürün siler
  const removeFromBasket = () => {};
  return (
    <BasketContext.Provider value={{ addToBasket, basket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
}
