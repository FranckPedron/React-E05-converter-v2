import SingleCurrency from 'src/components/SingleCurrency';
import './style.scss';
import PropTypes from 'prop-types';

function Currencies({ list }) {
  return (
    <section className="currencies">
      <h2 className="currencies-title">Currencies</h2>
      <ul className="currencies-list">
        {list.map((currency) => (
          <SingleCurrency
            key={currency.name}
            // soit je passe précisement ce dont le composant aura besoin
            name={currency.name}
            // soit je le passe tout le contenu de l'objet de départ,
            // et il se débrouillera pour récupérer uniquement ce qui l'intéresse
            // {...currency}
          />
        ))}
      </ul>
    </section>
  );
}

Currencies.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default Currencies;
