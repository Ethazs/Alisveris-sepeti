import CardIcon from "./CardIcon";

function Header({basket}) {
  return (
    <div className="flex justify-between items-center mb-6 border-b-8 border-indigo-700 rounded-full border-2 p-2">
      <h1 className="text-xs md:text-2xl sm:text-sm font font-semibold">
        React ve Tailwind CSS ile Alışveriş Sepeti Uygulaması.
      </h1>
      <CardIcon basket={basket}/>
    </div>
  );
}

export default Header;
