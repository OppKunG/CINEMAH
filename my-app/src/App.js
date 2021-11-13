import './App.css';

// Contents
//import Sign from './contents/Sign';
import Ticket from './contents/Ticket';

import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <Ticket />
        </Route>
      </div>
    </Router>
  );
}

export default App;
