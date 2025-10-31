import React from "react";

function Card() {
  return (
    <div class="container mt-4">
  <div class="row">
     <div class="col-md-4 mb-4">
      <div class="card">
        <img src="https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074" class="card-img-top" alt="Imagen 1"/>
        <div class="card-body">
          <h5 class="card-title">Card 1</h5>
          <p class="card-text">Texto de ejemplo para la primera tarjeta.</p>
          <a href="#" class="btn btn-primary">Ver más</a>
        </div>
      </div>
    </div>

     <div class="col-md-4 mb-4">
      <div class="card">
        <img src="https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074" class="card-img-top" alt="Imagen 2"/>
        <div class="card-body">
          <h5 class="card-title">Card 2</h5>
          <p class="card-text">Texto de ejemplo para la segunda tarjeta.</p>
          <a href="#" class="btn btn-primary">Ver más</a>
        </div>
      </div>
    </div>

     <div class="col-md-4 mb-4">
      <div class="card">
        <img src="https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074" class="card-img-top" alt="Imagen 3"/>
        <div class="card-body">
          <h5 class="card-title">Card 3</h5>
          <p class="card-text">Texto de ejemplo para la tercera tarjeta.</p>
          <a href="#" class="btn btn-primary">Ver más</a>
        </div>
      </div>
    </div>

  </div>
</div>

  );
}

export default Card;
