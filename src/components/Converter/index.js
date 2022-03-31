import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Amount from 'src/components/Amount';
import './style.scss';

import listOfCurrencies from 'src/data/currencies';

function Converter() {
  const baseAmount = 1;

  return (
    <div className="converter">
      <Header amount={baseAmount} />
      <main>
        <Currencies list={listOfCurrencies} />
        <Amount />
      </main>
    </div>
  );
}

export default Converter;
