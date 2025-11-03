import { useState } from "react";
import { useEffect } from "react";

function Contador() {

    
  const [contador, setContador] = useState(()=> {
    const valorGuardado = localStorage.getItem('contador')
    return valorGuardado ? JSON.parse(valorGuardado): 0
  }); //aqui inicializamos el valor iniciale del contador , contador almacena el valor , setContador manipula los cambios

        
    const incrementar = () => setContador(contador + 1);
    const decrementar = () => setContador(contador - 1);

  //guardar el estado en localStorge
  useEffect(() => {
    localStorage.setItem("contador", JSON.stringify(contador));
  }, [contador]);


  return (
    <div className="container">
      <button onClick={incrementar} className="btn btn-primary m-2">
        Incrementar
      </button>
      <button onClick={decrementar} className="btn btn-primary m-2">
        Incrementar
      </button>
      <p>Haz hecho click {contador} veces </p>
    </div>
  );
}

export default Contador;
