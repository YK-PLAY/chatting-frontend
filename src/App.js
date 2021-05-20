import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path = '/' component = {Header}/>
        <Switch>
          <Route path = '/login' component = {LoginPage}/>
          <Route path = '/' exact component = {MainPage}/>
          <Route render = {() => <div className = 'error'>Error Page</div>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
