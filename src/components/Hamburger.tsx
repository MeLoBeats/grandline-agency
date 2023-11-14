import { useCallback, useState } from "preact/hooks";
import menuLinks from "../utils/menuLinks";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((open) => !open);
  }, []);
  return (
    <>
      <div
        onClick={toggleMenu}
        className={` ${
          !isOpen ? "space-y-1.5" : ""
        } cursor-pointer z-10 relative w-5`}
      >
        <div
          className={`h-1 w-8 bg-white rounded-md ${
            isOpen ? "rotate-45 transform absolute left-0 top-0" : ""
          } `}
        ></div>
        <div
          className={`h-1 w-8 bg-white rounded-md ${
            isOpen ? "-rotate-45 transform absolute left-0 top-0" : ""
          }`}
        ></div>
        {!isOpen && <div className="h-1 w-8 bg-white rounded-md"></div>}
      </div>
      <div
        className={`absolute transition-all inset-0 bg-black ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="w-full h-full flex items-center -mt-16 justify-center flex-col space-y-9">
          {menuLinks.map((item, id) => (
            <li class="link relative text-lg text-white font-medium uppercase">
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Hamburger;
