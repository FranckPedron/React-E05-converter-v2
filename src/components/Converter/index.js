import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Amount from 'src/components/Amount';
import Toggler from 'src/components/Toggler';
import './style.scss';

import listOfCurrencies from 'src/data/currencies';

function Converter() {
  const baseAmount = 10;
  const isOpen = true;

  return (
    <div className="converter">
      <Header amount={baseAmount} />
      <Toggler isOpen={isOpen} />
      <main>
        {isOpen && <Currencies list={listOfCurrencies} />}
        <Amount />
      </main>
    </div>
  );
}

export default Converter;
