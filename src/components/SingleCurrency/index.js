import PropTypes from 'prop-types';
import './style.scss';

function SingleCurrency({ name, setCurrency}) {
  const handleClick = () => {
    setCurrency(name)
  }
  return (
    <li className="currency">
      <button onClick={handleClick} className="currency-btn" type="button">
        {name}
      </button>
    </li>
  );
}

SingleCurrency.propTypes = {
  name: PropTypes.string.isRequired,
  setCurrency: PropTypes.func.isRequired,
};

export default SingleCurrency;
