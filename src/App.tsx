import React from 'react';
import './App.css';
import Sidebar from './common/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Table from './components/Table/Table';
import Jira from './components/Jira/Jira';
import PageNotFound from './components/PageNotFound';

function App() {
  return <>
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Routes>
            <Route path="/" Component={Dashboard} />
            <Route path="/table" Component={Table} />
            <Route path="/jiraboard" Component={Jira} />
            <Route path="*" Component={PageNotFound} />
          </Routes>
        </div>
      </div>
    </Router>
  </>

}

export default App;
