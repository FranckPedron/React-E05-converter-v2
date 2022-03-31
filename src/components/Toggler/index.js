import PropTypes from 'prop-types';
import './style.scss';

function Toggler({ isOpen }) {
  let verb = 'Show';
  if (isOpen) {
    verb = 'Hide';
  }

  const handleClick = () => {
    console.log('click');
  };

  return (
    <button className="toggler" type="button" onClick={handleClick}>
      {verb} currencies
    </button>
  );
}

Toggler.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default Toggler;
