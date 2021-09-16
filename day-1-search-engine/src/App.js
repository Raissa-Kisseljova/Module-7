import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';
import './App.css';
import Homepage from './Components/Homepage';
import CompanyDetail from './Components/CompanyDetail';

function App() {
  return (
    <Router>

      <Route path="/" exact component={Homepage} />
      <Route path="/company_detail/:company_name" exact component={CompanyDetail} />

    </Router >
  )
}

export default App;
