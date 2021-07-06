import './App.css';
import React from 'react';
// import UI from './components/UI';
import {BrowserRouter,Link} from "react-router-dom";
import useBreadcrumbs from 'use-react-router-breadcrumbs';

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <React.Fragment>
      {breadcrumbs.map(({ breadcrumb }) => breadcrumb)}
    </React.Fragment>
  );
}

function App() {
  return (
    <BrowserRouter>
    <Breadcrumbs/>
    <div >
      <ul>
        <li >
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      {/* <div Style={"--bs-breadcrumb-divider: '>';"} aria-label="breadcrumb">
      <ul className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul> */}
      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      {/* <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch> */}
    </div>
  </BrowserRouter>
  );
 
}

export default App;
