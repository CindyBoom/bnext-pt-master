import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import BadgeNew from './pages/BadgeNew';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="*" component={ BadgeNew }/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
