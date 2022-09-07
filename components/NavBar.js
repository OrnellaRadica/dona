function navBar() {
  {
    /* CONSTANTES */
  }

  return (
    <nav className="flex justify-between items-center p-4 md:px-12 md:py-6">
      <div className="font-satisfy text-logo px-1 logo font-bold">
        Good Hands
      </div>
      {/* TODO: Add hamburguer menu in <sm */}
      <div className="hidden sm:flex sm:gap-8 text-lg">
        {/* TODO: transform this to a map. */}
        <a
          className="link link-underline link-underline-black text-black"
          href=""
        >
          Ropa
        </a>
        <a
          className="link link-underline link-underline-black text-black"
          href=""
        >
          Juguetes
        </a>
        <a
          className="link link-underline link-underline-black text-black"
          href=""
        >
          Muebles
        </a>
        <a
          className="link link-underline link-underline-black text-black"
          href=""
        >
          Alimentos
        </a>
      </div>
    </nav>
  );
}
export default navBar;
