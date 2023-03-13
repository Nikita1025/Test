import React from 'react';

import './App.css';
import { Sidebar } from '../features/sidebar/Sidebar';

const App = (): JSX.Element => {
  return (
    <div className="app">
      <Sidebar />
    </div>
  );
};

export default App;
