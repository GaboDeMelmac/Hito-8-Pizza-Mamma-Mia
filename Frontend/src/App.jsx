import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home.jsx";
import Pizza from "./pages/Pizza.jsx";
import Cart from "./pages/Cart.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import NotFound from "./pages/NotFound.jsx";
import Profile from "./pages/Profile.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/CSS/styles.css";
import { Route, Routes } from "react-router-dom";
import { useContext } from "react"; // Asegúrate de importar useContext
import { CardContext } from "./context/CardContext.jsx"; // Asegúrate de que el contexto esté correctamente importado

function App() {
  const { token } = useContext(CardContext); // Ahora accedes al contexto correctamente

  return (
    <>
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/Hito-8-Pizza-Mamma-Mia" element={<Home></Home>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/pizza/:id" element={<Pizza></Pizza>}></Route>
          {/* <Route path="/profile" element={<Profile></Profile>}></Route> */}
          <Route
            path="/profile"
            element={token ? <Profile></Profile> : <Home></Home>}
          ></Route>
          <Route path="/404" element={<NotFound></NotFound>}></Route>
          <Route path="/*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
