import { Route } from 'react-router-dom';
import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom/dist';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" component={<Home />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
