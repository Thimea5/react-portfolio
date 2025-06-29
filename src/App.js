import logo from './logo.svg';
import './App.css';
import Competences from './components/Competences';
import Intro from './components/Intro';
import Formations from './components/Formations';

function App() {
  return (
    <div className="App">
      <Intro />
      <Formations/>
      <Competences />
    </div>
  );
}

export default App;
