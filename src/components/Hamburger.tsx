import { useCallback, useState } from "preact/hooks"

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleMenu = useCallback(() => {
    setIsOpen((open) => !open)
  }, [])
  return (
    <div
      onClick={toggleMenu}
      className={` ${!isOpen ? "space-y-1.5" : ""} cursor-pointer relative w-5`}
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
  )
}

export default Hamburger
