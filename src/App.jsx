import './App.css';
import * as React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { LandingPage } from './components/pages/Landing';
import { GraphsPage } from './components/pages/DataVisualizations/GraphsPage.jsx';
import { NotFoundPage } from './components/pages/NotFound/index.jsx';
import Profile from './components/pages/Profile/index.jsx';
import { pageWrapper } from './components/layout/PageWrapper.jsx';
import { useAuth0 } from '@auth0/auth0-react';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className='text-center p-4'>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to='/' replace />;
  }

  return children;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: pageWrapper(<LandingPage />),
    errorElement: <NotFoundPage />,
  },
  {
    path: '/graphs',
    element: pageWrapper(<GraphsPage />),
    errorElement: <NotFoundPage />,
  },
  {
    path: '/profile',
    element: <ProtectedRoute>{pageWrapper(<Profile />)}</ProtectedRoute>,
    errorElement: <NotFoundPage />,
  },
]);

export const App = () => {
  return (
    <div className='font-serif w-[100vw] h-[100vh] m-0 flex-c justify-between align-centre text-center min-h-screen secondary-c'>
      <RouterProvider router={router} />
    </div>
  );
};
