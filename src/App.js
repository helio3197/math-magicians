import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import './App.css';

class App extends React.PureComponent {
  render() {
    return (
      <>
        <Header />
        <div className="content-container">
          <Outlet />
        </div>
      </>
    );
  }
}

export default App;
