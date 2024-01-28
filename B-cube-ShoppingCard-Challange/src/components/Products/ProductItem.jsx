import { GiPayMoney } from "react-icons/gi";

function ProductItem({ Product, basket, setBasket }) {
  const findProduct = basket.find((item) => item.id === Product.id);
  const addtoBasket = (Product) => {
    setBasket((prevState)=> [...prevState, Product]);
  };

  return (
    <div className="border p-4 m-2 rounded-r-3xl shadow-lg shadow-indigo-700">
      <img
        className="w-full h-90 object-cover rounded-l-3xl"
        src={Product.image}
        alt="product image"
      />
      <div className="p-4">
        <h1 className="text-xs md:text-2xl sm:text-sm font-semibold m-2">{Product.name}</h1>
        <p className="text-gray-500 mb-2 pl-4 flex justify-auto">
          {Product.price} <GiPayMoney />
        </p>
        <button
          className={`bg-indigo-700 text-lime-200 text-xs md:text-xl sm:text-sm px-3 py-[10px] 
                       w-full h-12 items-center rounded-full font-semibold 
                      hover:bg-lime-300 hover:text-indigo-800 transition-all 
                      ${findProduct && 'opacity-50 cursor-no-drop'}`}
          onClick={() => addtoBasket(Product)}
          disabled={findProduct}
        >
          Sepete ekle
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
