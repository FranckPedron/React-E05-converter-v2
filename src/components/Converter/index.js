import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Amount from 'src/components/Amount';

function Converter() {
  // un fragment est un element React qui n'aura pas de représentation
  // dans le dom réel
  return (
    <>
      <Header />
      <main>
        <Currencies />
        <Amount />
      </main>
    </>
  );
}

export default Converter;
