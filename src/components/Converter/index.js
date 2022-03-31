import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Amount from 'src/components/Amount';
import './style.scss';

function Converter() {
  return (
    <div className="converter">
      <Header />
      <main>
        <Currencies />
        <Amount />
      </main>
    </div>
  );
}

export default Converter;
