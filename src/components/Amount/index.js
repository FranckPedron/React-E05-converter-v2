import './style.scss';
import PropTypes from "prop-types";

function Amount({number, currency}) {
  return (
    <section className="amount">
      <p className="amount-number">{number}</p>
      <p className="amount-currency">{currency}</p>
    </section>
  );
}
Amount.propTypes = {
  number: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
}
export default Amount;
