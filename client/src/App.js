import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";

const ProtectedRoute = ({component: Component, ...rest}) => {
  return <Route {...rest} render={props => {
    if(localStorage.getItem('token')) {
      return <Component {...props} />
    } else {
      return <Redirect to="/login" />
    }
  }} />
};

function App() {
  const [colorList, setColorList] = useState([]);
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <ProtectedRoute path="/bubbles" component={BubblePage}/>
      
      </div>
    </Router>
  );
}

export default App;
