import Container from "./Component/Container";
import Header from "./Component/Header";
import Heading from "./Component/Heading";
import Products from "./Component/Products";
import CartProvider from "./context/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Component/Footer";

function App() {
  return (
    <>
      <CartProvider>
        <Header></Header>
        <Container>
          <Heading />
          <Products />
        </Container>
        <Footer />
        <ToastContainer />
      </CartProvider>
    </>
  );
}

export default App;
