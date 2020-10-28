import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./list.css";
import ProjectListView from "./components/ProjectListView";
import FilterComp from "./components/FilterComp";
import { Route, Router } from "react-router";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();


function App() {
  return (
    <Provider store={store}>
      <div className="main-container row">
        <h1 style={{marginLeft: '20px'}}>SpaceX Launch Programs</h1>
        <Router history={history}>
        <FilterComp />
        <Route path="/launch/programs" component={ProjectListView} />
        <Route path="/" component={ProjectListView} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;