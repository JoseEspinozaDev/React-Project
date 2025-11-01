import React from "react";

function Button(props) {
  return (
    <button type="button" className="btn btn-success m-2">
      {props.nombre}
    </button>  
  );
}

export default Button;
