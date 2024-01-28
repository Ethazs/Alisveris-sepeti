import { GiPayMoney } from "react-icons/gi";

const Basket = ({ basket, emptyBasket }) => {
  const total = basket.reduce((acc, item) => acc + item.price, 0)
  if (basket.length === 0) return;
  return (
    <div className="border ml-auto w-72 p-2 mt-2 mr-2 rounded-lg shadow-lg shadow-indigo-600">
      <h2 className="text-xl font-semibold mb-2">Ürünler</h2>
      <ul>
        {basket.map((item) => (
          <li className="flex justify-between mt-3">
            <span>{item.name}</span>
            <span className="flex justify-between">
              {item.price}
              <GiPayMoney />
            </span>
          </li>
        ))}
      </ul>
      <hr className="m-4" />
      <div className="flex justify-between mt-3">
      <p className="font-semibold text-lg">Toplam:</p>
      <p>{total}<GiPayMoney /></p>
      </div>
      <button className="bg-lime-300 w-full p-2 mt-3 text-indigo-800 
              font-semibold text-lg hover:bg-indigo-700 hover:text-lime-200 
              rounded-xl transition-all" onClick={emptyBasket}
      >
        hepsini Çıkar
      </button>
    </div>
  );
};

export default Basket;
