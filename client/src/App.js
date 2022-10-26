
import './App.css';
import NavbarMain from './NavbarMain/NavbarMain';
import { Route,HashRouter } from 'react-router-dom'

import Login from './components/Login/Login'
import Alert from './components/reusable/Alert';
import Register from './components/Login/Register';

import Pharma from './components/Pharama/Pharma'
import SearchPharma from './components/Search/SearchPharma'

function App() {
  return (
    <div id="MasterContainer">
      <HashRouter>
         <NavbarMain />
         <section className='container'>
            <Alert />
          </section>
          <Route
            exact
            path='/'
            component={Login}
          />
          <Route
            exact
            path='/Login'
            component={Login}
          />
           <Route
            exact
            path='/Register'
            component={Register}
          />
             <Route
            exact
            path='/Pharma'
            component={Pharma}
          />
           <Route
            exact
            path='/SearchPharma'
            component={SearchPharma}
          />
      </HashRouter>
      
    </div>
  );
}

export default App;
