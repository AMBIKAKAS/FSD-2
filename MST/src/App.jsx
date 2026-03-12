import ProductList from "./components/ProductList";
import FavoriteList from "./components/FavoriteList";
import FavCount from "./components/FavCount";
import { FavProvider } from "./components/FavContext";

function App() {

  return (
    <FavProvider>

      <h1>Favorite Product Store</h1>

      <FavCount />

      <ProductList />

      <FavoriteList />

    </FavProvider>
  );
}

export default App;