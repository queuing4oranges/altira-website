// import reactLogo from './assets/react.svg'
import './App.scss';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <div className="App">
      <BrowserRouter basename="/">
      <Routes>
        <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
      
     
    
  );
}

export default App



