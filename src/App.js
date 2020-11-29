
import {
  Switch,
  Route
} from "react-router-dom";
import Userslist from './container/userlist/userslist';
import Layout from './hoc/Layout/Layout';
import SelectedUser from './container/selecteduser/selecteduser'
import Home from './container/home/home';
import './App.css';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/userlist" component={Userslist} />
        <Route path="/selecteduser" component={SelectedUser} />
        <Route path="/" component={Home} />
      </Switch>
    </Layout>
  );
}

export default App;

