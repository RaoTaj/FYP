import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './pages/Home';
import Login from './features/auth/components/Login';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
//import { Link } from 'react-router-dom';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home></Home>),
  },
  {
    path: "/login",
    element: (<LoginPage></LoginPage>),
  },
  {
    path: "/signup",
    element: (<SignupPage></SignupPage>),
  },

]);

function App() {
  return (
    <div className="App">
    <RouterProvider router={router} />

    </div>
  );
}

export default App;
