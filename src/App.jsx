import Entry from './components/Entry';
import Header from './components/Header';
import data from './assets/data';

export default function App() {
  const entryElements = data.map((entry) => (
    <Entry key={entry.id} {...entry} />
  ));
  return (
    <>
      <Header />
      {entryElements}
    </>
  );
}
