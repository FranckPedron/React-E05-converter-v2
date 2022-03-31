/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import React from 'react';
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Amount from 'src/components/Amount';
import Toggler from 'src/components/Toggler';
import './style.scss';

import listOfCurrencies from 'src/data/currencies';

class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseAmount: 10,
      isOpen: true,
    };
  }

  render() {
    const baseAmount = this.state.baseAmount;
    const isOpen = this.state.isOpen;

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
}

export default Converter;
