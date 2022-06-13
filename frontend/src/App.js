import Header from "./components/Header";
import Main from './components/Main'
import AddProduct from './components/AddProduct'
import SingleProduct from './components/SingleProduct'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
