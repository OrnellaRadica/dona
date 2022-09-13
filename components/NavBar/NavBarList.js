import classnames from "classnames";
import Link from "next/link";

const CATEGORIES = [
  {
    title: "Ropa",
    href: "/category/ropa",
  },
  {
    title: "Juguetes",
    href: "/category/juguetes",
  },
  {
    title: "Alimentos",
    href: "/category/alimentos",
  },
  {
    title: "Muebles",
    href: "/category/muebles",
  },
];

const links = CATEGORIES.map((category) => (
  <Link key={category.title} href={category.href}>
    <a className="link link-underline link-underline-black text-black">
      {category.title}
    </a>
  </Link>
));

function NavBarList({ open }) {
  const navClass = classnames(
    `
    bg-white sm:hidden  fixed top-[92px] w-full h-[calc(100vh-92px)] transition-[right] duration-300 ease-linear
  `,
    {
      "right-0": open,
      "right-[-100%]": !open,
    }
  );

  return (
    <div>
      <div className="hidden sm:flex sm:gap-8 text-lg">{links}</div>
      <nav className={navClass}>
        <div className="flex flex-col gap-4 items-center text-2xl">{links}</div>
      </nav>
    </div>
  );
}
export default NavBarList;
