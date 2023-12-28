import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Home from './components/Home/Home';
import About from './components/About/About';
import Work from './components/Works/Work';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Routes />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'work',
        element: <Work />,
      },
    ],
  },
]);
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Routes />}>
//       <Route path='' element={<Home />} />
//       <Route path='about' element={<About />} />
//       <Route path='work' element={<Work />} />
//     </Route>
//   )
// );
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
