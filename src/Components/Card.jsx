import PropTypes from 'prop-types';

function Card({ campo1, campo2 }) {
    return (
      <div className="card">
        <h2>Hola {campo1}!</h2>
        <h3>Sabemos que tu color favorito es:</h3>
        <p style={{ backgroundColor: campo2 }}>{campo2}</p>
      </div>
    );
  }

Card.propTypes = {
  campo1: PropTypes.string.isRequired,
  campo2: PropTypes.string.isRequired,
};

export default Card;