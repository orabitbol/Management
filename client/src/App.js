
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import ListEmployee from './components/ListEmployee';
import EmployeeEditor from './components/EmployeeEditor';
import Header from './components/Header';
import Search from './components/Search';

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Header/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={ListEmployee}></Route>
            <Route path="/employees" component={ListEmployee}></Route>
            <Route path = "/add-employee" component = {EmployeeEditor} ></Route>
            <Route path = "/edit-employee/:id" component = {EmployeeEditor}></Route>
            <Route path = "/search-by-email" component = {Search}></Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;



             
