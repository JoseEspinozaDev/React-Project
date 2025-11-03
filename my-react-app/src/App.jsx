import Header from "./components/header";
import Footer from "./components/Footer";
import Card from "./components/cards";
import Button from "./components/Button";
import Contador from "./components/Counter";
import Saludar from "./components/Saludo";
import Products from "./components/Productos";
import showText from "./components/ShowDataRealTime";
import ShowDataRealTime from "./components/ShowDataRealTime";
import ModeDark from "./components/modeDark";
import TwitterCard from "./components/TwitterCard";

function App() {
  return (
    <>
      <Header />
       <Saludar nombre='Juan Perez'/>
      <div className="container mt-4">
        <TwitterCard/>
      </div>

      
    </>
  );
}

export default App;
