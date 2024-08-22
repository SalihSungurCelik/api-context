import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

export const Checkout = () => {
  const { addToBasket, basket, removeFromBasket } = useContext(BasketContext);

  return (
    <div>
      {basket.length === 0 ? (
        <h3>Spete Ürün Ekleyin</h3>
      ) : (
        <h5 className="text-center my-4">
          Toplam <span className="text-success">350</span>
        </h5>
      )}
      <div className="d-flex justify-content-between align-items-center p-3 gap-3">
        <img src="" alt="" />
        <h4>title</h4>
        <h3>150</h3>
        <p>miktar:1</p>
        <div>
          <BiSolidUpArrow role="button" className="text-success" />
          <BiSolidDownArrow role="button" className="text-danger" />
        </div>
      </div>
    </div>
  );
};
