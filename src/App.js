import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login/Login";
import {AuthProvider} from './AuthContext/AuthContext'
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import Admin from "./pages/Admin/Admin";
import Services from "./pages/Services/Services";
function App() {
  return (
    <>
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
             <PrivateRoute path="/admin">
               <Admin/>
             </PrivateRoute>
             <PrivateRoute path="/services">
               <Services/>
             </PrivateRoute>
            <Route exact path="/login">
              <Login/>
            </Route>
          </Switch>
          <Footer/>
        </div>
      </Router>
        </AuthProvider>
    </>
  );
}

export default App;
