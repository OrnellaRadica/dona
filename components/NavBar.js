function navBar() {
  {
    /* CONSTANTES */
  }

  return (
    <nav className="flex justify-between items-center p-4 md:px-12 md:py-6">
      <div className="font-satisfy text-logo px-1 logo font-bold">
        <a href="/">Good Hands</a>
      </div>
      {/* TODO: Add hamburguer menu in <sm */}
      <div className="hidden sm:flex sm:gap-8 text-lg">
        {/* TODO: transform this to a map. */}
        <a
          className="link link-underline link-underline-black text-black"
          href="/ropa"
        >
          Ropa
        </a>
        <a
          className="link link-underline link-underline-black text-black"
          href="/juguetes"
        >
          Juguetes
        </a>
        <a
          className="link link-underline link-underline-black text-black"
          href="/muebles"
        >
          Muebles
        </a>
        <a
          className="link link-underline link-underline-black text-black"
          href="/alimentos"
        >
          Alimentos
        </a>
      </div>
    </nav>
  );
}
export default navBar;
