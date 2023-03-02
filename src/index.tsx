import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/error/ErrorPage';
import Classes from './components/classes/Classes';
import About from './components/about/About';
import Records from './components/records/Records';
import Enroll from './components/enroll/Enroll';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "classes",
    element: <Classes />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "records",
    element: <Records />,
  },
  {
    path: "enroll",
    element: <Enroll />,
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
