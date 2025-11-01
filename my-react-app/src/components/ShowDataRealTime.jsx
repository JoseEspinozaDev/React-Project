import { useState } from "react";

function ShowDataRealTime() {
  const [texto, setTexto] = useState('');

  const textoEscrito = (e) => setTexto(e.target.value);

  return (
    <div>
      <input
        type="text"
        value={texto}
        onChange={textoEscrito}
        placeholder="Escribe algo..."
      />
      <p>Texto en tiempo real: {texto}</p>
    </div>
  );
}

export default ShowDataRealTime;
