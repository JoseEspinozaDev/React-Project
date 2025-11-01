import React from "react";

function Card() {
  return (
    <div className="container mt-4">
  <div className="row">
     <div className="col-md-4 mb-4">
      <div className="card">
        <img src="https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074" className="card-img-top" alt="Imagen 1"/>
        <div className="card-body">
          <h5 className="card-title">Card 1</h5>
          <p className="card-text">Texto de ejemplo para la primera tarjeta.</p>
          <a href="#" className="btn btn-primary">Ver más</a>
        </div>
      </div>
    </div>

     <div className="col-md-4 mb-4">
      <div className="card">
        <img src="https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074" className="card-img-top" alt="Imagen 2"/>
        <div className="card-body">
          <h5 className="card-title">Card 2</h5>
          <p className="card-text">Texto de ejemplo para la segunda tarjeta.</p>
          <a href="#" className="btn btn-primary">Ver más</a>
        </div>
      </div>
    </div>

     <div className="col-md-4 mb-4">
      <div className="card">
        <img src="https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074" className="card-img-top" alt="Imagen 3"/>
        <div className="card-body">
          <h5 className="card-title">Card 3</h5>
          <p className="card-text">Texto de ejemplo para la tercera tarjeta.</p>
          <a href="#" className="btn btn-primary">Ver más</a>
        </div>
      </div>
    </div>

  </div>
</div>

  );
}

export default Card;
