import Header from "./components/header";
import Footer from "./components/Footer";
import Card from "./components/cards";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Header />
      <div className="container mt-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Button/>
        <Button/>
        <Button/>
        <Button/>
        <Button/>
      </div>
      <Footer />
    </>
  );
}

export default App;
