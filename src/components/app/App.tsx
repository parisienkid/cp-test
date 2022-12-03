import '../../core/reboot/bs-reboot.scss'

import {BrowserRouter as Router} from "react-router-dom";

import Header from '../header/Header';
import AppRoutes from '../../core/routes/Routes';
import Bag from '../bag/Bag';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <AppRoutes />
          <Bag />
        </main>
      </div>
    </Router>
  );
}

export default App;
