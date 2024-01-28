import { CiShoppingCart } from "react-icons/ci";

function CardIcon({basket}) {
  return (
    <div className="relative">
      <CiShoppingCart className="text-2xl" />
      {basket.length > 0 && (
        <span className="bg-indigo-700 text-white text-xs w-5 h-5 flex justify-center items-center rounded-full absolute -top-3 -right-1">
        {basket.length}
       </span>
      )}
    </div>
  );
}

export default CardIcon;
