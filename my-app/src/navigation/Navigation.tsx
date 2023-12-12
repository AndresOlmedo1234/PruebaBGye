import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductListPage from '../pages/Productos';
import Login from '../pages/Login';
function NavigationApp() {
  return (
    <Router>
      <div className="App">
        <Router>
          <Route path="/" Component={ProductListPage} />
          <Route path="/login" Component={Login} />
        </Router>
      </div>
    </Router>
  )
}

export default NavigationApp