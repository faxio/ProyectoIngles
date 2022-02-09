import './App.css';
import Card from './components/Card';
import { Route, Routes} from 'react-router-dom'
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <header className="App-header">    
         
        <Card titulo="Basico"/>
        <Card titulo="Informatica"/>
        <Card titulo="Medio"/>
        
      </header>
    </div>
  );
}

export default App;
