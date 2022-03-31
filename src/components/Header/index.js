import PropTypes from 'prop-types';
import './style.scss';

function Header({ amount }) {
  let currency = 'euro';
  if (amount > 1) {
    currency += 's';
  }
  return (
    <header className="header">
      <h1 className="header-title">Converter</h1>
      <p className="header-amount">{amount} {currency}</p>
    </header>
  );
}

Header.propTypes = {
  amount: PropTypes.number,
};

Header.defaultProps = {
  amount: 1,
};

export default Header;
