import classnames from "classnames";
import NavBarList from "./NavBarList";
import NavBarMenuHamburger from "./NavBarMenuHamburger";
import React, { useState } from "react";

function navBar() {
  {
    /* CONSTANTES */
  }
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav className="flex justify-between items-center p-4 md:px-12 md:py-6">
      <div className="font-satisfy text-logo px-1 logo font-bold">
        Good Hands
      </div>

      <NavBarList open={open} />

      <div className="sm:hidden text-black">
        <NavBarMenuHamburger open={open} handleClick={handleClick} />
      </div>
    </nav>
  );
}
export default navBar;
