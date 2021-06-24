import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddAdmin from './pages/AddAdmin';
import AddBlog from './pages/AddBlog';
import SingleBlog from './pages/SingleBlog';

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
        <Route path="/addBlog">
          <AddBlog />
        </Route>
        <Route path="/blog/:id">
          <SingleBlog />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
