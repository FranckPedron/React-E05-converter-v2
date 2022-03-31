import PropTypes from 'prop-types';
import './style.scss';

function Header({ amount, increment }) {
  let currency = 'euro';
  if (amount > 1) {
    currency += 's';
  }
  return (
    <header className="header">
      <h1 className="header-title">Converter</h1>
      <p className="header-amount">
        {amount} {currency}
        <button onClick={increment} type="button">Add 1</button>
      </p>
    </header>
  );
}

Header.propTypes = {
  amount: PropTypes.number,
  increment: PropTypes.func.isRequired,
};

Header.defaultProps = {
  amount: 1,
};

export default Header;
