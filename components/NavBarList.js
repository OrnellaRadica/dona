import React from "react";
import { NavbarWrapper } from "./NavBarWrapper";

function NavBarList({ open }) {
  const CATEGORIES = [
    {
      title: "Ropa",
      href: "",
    },
    {
      title: "Juguetes",
      href: "",
    },
    {
      title: "Alimentos",
      href: "",
    },
    {
      title: "Muebles",
      href: "",
    },
  ];

  return (
    <div>
      <div className="hidden sm:flex sm:gap-8 text-lg">
        {CATEGORIES.map((category) => (
          <a
            href={category.href}
            className="link link-underline link-underline-black text-black"
          >
            {category.title}
          </a>
        ))}
      </div>

      <NavbarWrapper open={open}>
        <div>
          {CATEGORIES.map((category) => (
            <a
              href={category.href}
              className="link link-underline link-underline-black text-black hidden"
            >
              {category.title}
            </a>
          ))}
        </div>
      </NavbarWrapper>
    </div>
  );
}
export default NavBarList;
