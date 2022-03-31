import PropTypes from 'prop-types';
import './style.scss';

function Toggler({ isOpen }) {
  let verb = 'Show';
  if (isOpen) {
    verb = 'Hide';
  }
  return (
    <button className="toggler" type="button">
      {verb} currencies
    </button>
  );
}

Toggler.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default Toggler;
