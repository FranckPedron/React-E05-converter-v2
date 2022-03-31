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
    // je définis une propriété state sur mon instance
    // avec les données initiales pour contrôler/définir ce qu'on veut afficher dans l'application
    this.state = {
      baseAmount: 1,
      isOpen: false,
    };
  }

  render() {
    console.log('render', this.state);
    // je peux lire mon state
    const baseAmount = this.state.baseAmount;
    const isOpen = this.state.isOpen;

    const toggleOpen = () => {
      // NON
      // this.state.isOpen = true;
      // ça ne suffit pas de modifier le state, il faut déclencher le calcul de l'ui
      // à partir de state ET la réconciliation avec le DOM réel
      this.setState({
        isOpen: !isOpen,
      });
    };

    const increment = () => {
      this.setState({
        baseAmount: baseAmount + 1,
      });
    };

    // je configure ma représentation en fonction de mon state
    return (
      <div className="converter">
        <Header amount={baseAmount} increment={increment} />
        <Toggler isOpen={isOpen} toggleOpen={toggleOpen} />
        <main>
          {isOpen && <Currencies list={listOfCurrencies} />}
          <Amount />
        </main>
      </div>
    );
  }
}

export default Converter;
