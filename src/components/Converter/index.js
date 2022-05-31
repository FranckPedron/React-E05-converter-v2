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
      isOpen: true,
    };
  }

  render() {
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

    // ici pour éviter de perdre la référence à l'instance pour this, j'ai fait une fonction fléchée
    // en effet les fléchées concervent le this de là ou elles sont écrit, ici la classe
    const increment = () => {
      this.setState({
        baseAmount: baseAmount + 1,
      });
    };

    // fonction qui fait la conversion qu'il faudra sans doute appeler à un moment
    const makeConversion = () => {
      // on part de la devise actuelle qui doit être ajouté au state
      const { currency } = this.state;
      // Récupération des infos de la devise choisie
      const currencyData = listOfCurrencies.find((data) => data.name === currency);
      // console.log(currencyData);
      // Extraction du taux
      const { rate } = currencyData;
      // Calcul du résultat
      const result = baseAmount * rate;
      // On retourne avec une petite mise en forme
      return Math.round(result * 100) / 100;
    };

    // je configure ma représentation en fonction de mon state
    return (
      <div className="converter">
        <Header amount={baseAmount} increment={increment} />
        <Toggler isOpen={isOpen} toggleOpen={toggleOpen} />
        <main>
          {isOpen && <Currencies list={listOfCurrencies} />}
          <Amount number={123} currency="devise"/>
        </main>
      </div>
    );
  }
}

export default Converter;
