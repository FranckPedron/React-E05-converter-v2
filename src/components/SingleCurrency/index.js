import PropTypes from 'prop-types';
import './style.scss';

function SingleCurrency({ name }) {
  const handleClick = () => {
    
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
};

export default SingleCurrency;
