import NavBar from "../components/NavBar.js";
import Search from "../components/Search";
import classnames from "classnames";
import CategoriesBlock from "../components/CategoriesBlock.js";

function Home() {
  const container = classnames("w-full md:w-1/2 flex items-center justify-center");
  return (
    <div className="max-w-[1400px] ml-auto mr-auto">
      <div className="w-full overflow-x-hidden overflow-y-hidden">
        <NavBar />
      </div>
      <div className="flex flex-wrap-reverse md:flex-nowrap  h-[calc(100vh-216px)] gap-4 w-full px-4 md:px-12 md:py-6">
        <div className={container}><CategoriesBlock/></div>
        <div className={container}>
          <Search />
        </div>
      </div>
      <div className="h-[108px]"></div>
    </div>
  );
}
export default Home;
