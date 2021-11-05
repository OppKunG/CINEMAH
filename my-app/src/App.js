import './App.css';
import Navbar from './components/Navbar';

// Contents
import Home from './contents/Home';
import Sign from './contents/Sign';

import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/sign">
          <Sign />
        </Route>
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
      </div>
    </Router>
  );
}

export default App;
