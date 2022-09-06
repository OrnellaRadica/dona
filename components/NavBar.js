import classnames from "classnames";

function navBar() {
  {
    /* CONSTANTES */
  }

  const header = classnames("w-full overflow-hidden bg-[#252932] mb-20 p-5");

  const titulo = classnames("text-[#f56f3a]	mb-[-35px] text-3xl");

  const nav_a = classnames(
    "inline-block	 text-[#F5DEB3] no-underline pr-10 pl-10 p-1 leading-normal text-2xl font-bold hover:bg-[#f56f3a] rounded-[45px]"
  );

  return (
    <header className={header}>
      <div>
        <h1 className={titulo}>Good Hands</h1>
        <nav className="float-right">
          <a href="" className={nav_a}>
            Ropa
          </a>
          <a href="" className={nav_a}>
            Juguetes
          </a>
          <a href="" className={nav_a}>
            Muebles
          </a>
          <a href="" className={nav_a}>
            Electrodomesticos
          </a>
          <a href="" className={nav_a}>
            Contactos
          </a>
          <a href="" className={nav_a}>
            Ayuda
          </a>
        </nav>
      </div>
    </header>
  );
}
export default navBar;
