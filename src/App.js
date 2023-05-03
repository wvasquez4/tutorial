import './App.css';
import charmander from "./Images/charmander.png";
import squatter from "./Images/squatter.png";
import bulbasaur from "./Images/Bulbasaur.png";


function App() {
  return (
    <div className="App">
      <h1>Choose your pokimon</h1>
      <section className="sec">
        <img className="IdLibre" src={charmander} />
        <div className="titleP">Charmander</div>
      </section>
      <section className="sec">
      <img src={bulbasaur} className="IdLibre" />
      <div className="titleP">Bulbasaur</div>
      </section>
      <section className="sec">
      <img src={squatter} className="IdLibre" />
      <div className="titleP">Squatter</div>
      </section>
    </div>
  );
}

export default App;
