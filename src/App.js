import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './Components/Layouts/Header';
import Hero from './Components/Elements/Hero';
import Sidebar1 from './Components/Layouts/Sidebar1';

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Sidebar1/>
     
    </div>
  );
}

export default App;
