import '../src/App.css';
import Navbar from './Componants/Navbar/Navbar';
import Intro from './Componants/Intro/Intro';
import Serv from './Componants/Serv/Serv';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Intro />
        <Serv/>
         

      </header>
    </div>
  );
}

export default App;
