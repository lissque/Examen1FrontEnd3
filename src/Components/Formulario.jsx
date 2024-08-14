import { useState } from 'react';
import InputField from './InputField';
import Card from './Card';

function Formulario() {
  const [campo1, setCampo1] = useState('');
  const [campo2, setCampo2] = useState('');
  const [error, setError] = useState('');
  const [mostrarCard, setMostrarCard] = useState(false);

  const hexColorPattern = /^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/;

  function manejarCambioCampo1(evento) {
    setCampo1(evento.target.value);
  }

  function manejarCambioCampo2(evento) {
    setCampo2(evento.target.value);
  }

  function manejarSubmit(evento) {
    evento.preventDefault();

    if (campo1.startsWith(" ") || campo1.length < 3) {
      setError('Por favor chequea que la información sea correcta');
      setMostrarCard(false);
      return;
    }

    if (!hexColorPattern.test(campo2)) {
      setError('Por favor chequea que la información sea correcta');
      setMostrarCard(false);
      return;
    }

    setError('');
    setMostrarCard(true);
  }

  return (
    <div className="container">
      <form onSubmit={manejarSubmit}>
        <InputField
          label="Tu nombre:"
          type="text"
          value={campo1}
          onChange={manejarCambioCampo1}
        />
        <InputField
          label="Tu color favorito (En formato HEX)"
          type="text"
          value={campo2}
          onChange={manejarCambioCampo2}
        />
        <button type="submit">Enviar</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {mostrarCard && <Card campo1={campo1} campo2={campo2} />}
    </div>
  );
}

export default Formulario;