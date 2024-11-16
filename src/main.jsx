import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



import Register from './Pages/Register.jsx';
import Login from './Pages/Login';
import Dashboard from './pages/Dashboard.jsx';
import Profile from './Pages/Profile';
import SingleUser from './Pages/SingleUser';
import ProtectedRout from './components/ProtectedRoute.jsx';
import Home from './Pages/Home.jsx';
import Layout from './Layout.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'dashboard',
        element: <ProtectedRout component={<Dashboard />} />
      },
      {
        path: 'profile',
        element: <ProtectedRout component={<Profile />} />
      },
      {
        path: 'single-user/:id', 
        element: <ProtectedRout component={<SingleUser />} />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
   <RouterProvider router={router} />
);