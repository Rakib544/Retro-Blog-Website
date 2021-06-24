import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddAdmin from './pages/AddAdmin';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/addAdmin">
          <AddAdmin />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
