import '../src/App.css';
import Navbar from './Componants/Navbar/Navbar';
import Intro from './Componants/Intro/Intro';
import Serv from './Componants/Serv/Serv';
import Exp from './Componants/Experience/Exp.jsx';
import Works from './Componants/Works/Works';
import Portofolio from './Componants/Portofolio/Portofolio';
import Testimon from './Componants/Testimon/Testimon';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Intro />
        <Serv />
        <Exp />
        <Works />
        <Portofolio />
        <Testimon />
         

      </header>
    </div>
  );
}

export default App;
