import SingleCurrency from 'src/components/SingleCurrency';
import './style.scss';

function Currencies() {
  return (
    <section className="currencies">
      <h2 className="currencies-title">Currencies</h2>
      <ul className="currencies-list">
        <SingleCurrency />
        <SingleCurrency />
        <SingleCurrency />
        <SingleCurrency />
        <SingleCurrency />
      </ul>
    </section>
  );
}

export default Currencies;
