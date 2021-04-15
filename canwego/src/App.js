import './App.css';
import Pictogram from './components/Pictogram/Pictogram'
import hoodie from "./img/hoodie.svg"

function App() {
  return (
    <div className="App">
    
      <Pictogram iconName={hoodie}/>
      
    </div>
  );
}

export default App;
