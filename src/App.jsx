import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import routes, { renderRoutes } from './routes';

const App = () => {
  // return <BrowserRouter basename={`http://localhost:3000`}>{renderRoutes(routes)}</BrowserRouter>;
  return <BrowserRouter basename={import.meta.env.VITE_APP_BASE_NAME}>{renderRoutes(routes)}</BrowserRouter>;
};

export default App;
