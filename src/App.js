import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About/About';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Details from './Details/Details';
import Header from './Header/Header';
import Home from './Home/Home';
import Login from './Login/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Dashboard from './Dashboard/Dashboard';
import Services from './Services/Services';
import ErrorPage from './404Error/ErrorPage';
import Footer from './Footer/Footer';
import WhyUs from './WhyUs/WhyUs';
import Special from './Special/Special';

function App() {
  return (

    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <PrivateRoute exact path="/services">
            <Services></Services>
            <WhyUs></WhyUs>
            <Special></Special>
          </PrivateRoute>
          <PrivateRoute exact path="/details/:id">
            <Details></Details>
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route path="/*">
            <ErrorPage></ErrorPage>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>

  );
}

export default App;
