import { AppBar } from "./Components/AppBar";
import Filters from "./Components/Filters";
import Footer from "./Components/Footer";
import Items from "./Components/Items";
import { SearchBar } from "./Components/SearchBar";
import SeasonSpecial from "./Components/SeasonSpecial";

function App() {
  return (
    <>
      <AppBar />
      <Filters />
      <Items />
      <SeasonSpecial/>
      <Footer/>
      <SearchBar/>
    </>
  );
}

export default App;
