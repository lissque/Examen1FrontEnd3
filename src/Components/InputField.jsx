import PropTypes from 'prop-types';

function InputField({ label, type, value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

InputField.propTypes = {
    label: PropTypes.string.isRequired,    
    type: PropTypes.string.isRequired,     
    value: PropTypes.string.isRequired,    
    onChange: PropTypes.func.isRequired,
  };

export default InputField;
