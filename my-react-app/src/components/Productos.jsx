import { useEffect, useState } from "react";
function Products() {
  const [data, setData] = useState([]);
  const [cargando,setCargando] = useState(true)

  useEffect(() => {
    const UrlAPI = "https://fakestoreapi.com/products";
    const fetchData = async () => {
      try {
        const response = await fetch(UrlAPI);
        const data = await response.json();
        setData(data);
        setCargando(false)
      } catch (error){
        console.log("Error:", error);
        setCargando(false)
      }
    };

    fetchData();
  }, []);

  if (cargando) return <div className="d-flex justify-content-center align-items-center" >
                            <div
                                className="spinner-border "
                                role="status">
                                <span className="visually-hidden">Cargando datos...</span>
                            </div>
                        </div>
  
    

  return (
    <ul className="container">
      {data.map((producto) => (
        <li key={producto.id}>{producto.title} - {producto.price}$ </li>
      ))}
    </ul>
  );
}

export default Products;
