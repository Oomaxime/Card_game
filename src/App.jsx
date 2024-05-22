import "./App.css";
import Name from "./components/Name";
import CardEffect from "./components/CardEffect";

function App() {
  return (
    <>
      <Name />
      <CardEffect effect="Boule de feu" />
      <CardEffect effect="Boule de glace" />
    </>
  );
}

export default App;
