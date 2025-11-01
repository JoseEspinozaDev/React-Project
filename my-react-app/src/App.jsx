import Header from "./components/header";
import Footer from "./components/Footer";
import Card from "./components/cards";
import Button from "./components/Button";
import Contador from "./components/Counter";

function App() {
  return (
    <>
      <Header />
      <div className="container mt-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Button nombre='ENVIAR DATOS'/>
        <Button nombre='RECIBIR DATOS'/>
        <Button nombre='CANCELAR DATOS'/>
        <Button nombre='IMPRIMIR FACTURA'/>
        <Button nombre='EMITIR FACTURA'/>
         <Contador/>
      </div>
      <Footer />
    </>
  );
}

export default App;
