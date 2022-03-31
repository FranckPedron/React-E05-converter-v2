import SingleCurrency from 'src/components/SingleCurrency';

function Currencies() {
  return (
    <section className="currencies">
      <h2>Currencies</h2>
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
