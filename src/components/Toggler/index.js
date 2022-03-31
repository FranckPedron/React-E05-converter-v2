import PropTypes from 'prop-types';
import './style.scss';

function Toggler({ isOpen, toggleOpen }) {
  let verb = 'Show';
  if (isOpen) {
    verb = 'Hide';
  }

  const handleClick = () => {
    // ici on ne veut pas modifier directement le DOM,
    // on ne veut pas retomber dans une approche impérative
    // autrement on risquera de retomber dans nos pièges impératifs
    // cad facilement casser les choses à l'ajout d'autres fonctionnalités
    // on veut une approche déclarative, ambitieuse, qui permet de rester super évolutif
    // on veut dire quoi modifier dans la source de vérité
    // c'est quoi l'intention
    // FERMER ou OUVRIR
    toggleOpen();
  };

  return (
    <button className="toggler" type="button" onClick={handleClick}>
      {verb} currencies
    </button>
  );
}

Toggler.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
};

export default Toggler;
