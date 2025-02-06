import Header from "./Components/Layouts/Header";
import Container from "./Components/Layouts/Container";
import "./App.css";
import MainHome from "./Components/MainHome";
import Services from "./Components/Services";
import Work from "./Components/Work";
import Shape from "./Components/Layouts/Shape";
import Swapy from "./Components/Swapy";
import Valores from "./Components/Valores";
import Contact from "./Components/Contact";
import Footer from "./Components/Layouts/Footer";

function App() {
  return (
    <>
      <Header />
      <Container>
        <div>
          <MainHome />
          <Services />
        </div>
      </Container>
      <Shape />
      <Work />
      <Swapy />
      <Valores />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
