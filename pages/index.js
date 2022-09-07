import NavBar from "../components/NavBar.js"; //import para añadir a NavBar
import Search from "../components/Search";
function Home() {
  return (
    <div className="w-full overflow-x-hidden overflow-y-hidden">
      <NavBar />
      <Search />
    </div>
  );
}
export default Home;
