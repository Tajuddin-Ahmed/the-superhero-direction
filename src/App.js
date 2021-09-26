import './App.css';
import Superheros from './components/Superheros/Superheros';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App bg-image">
      <Header></Header>
      <Superheros></Superheros>
    </div>
  );
}

export default App;
