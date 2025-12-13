import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';

/**
 * TODO: Ticket 3:
 * Implement authentication using Auth0:
 * - Get the user data from Auth0
 * - Create and style the component
 * - Display the data
 * - Make this page a protected Route
 */
const Profile = () => {
  const { user, isLoading, isAuthenticated, logout } = useAuth0();

  if (!isAuthenticated) {
    return <Navigate to='/' replace />;
  }

  if (isLoading || !user) {
    return <div className='text-center p-4 text-xl'>Loading...</div>;
  }

  return (
    <div className='flex flex-col items-center mt-24 mb-24'>
      {' '}
      <div className='bg-white p-6 rounded-lg shadow-md w-80 text-center'>
        <img src={user.picture} alt='Profile' className='rounded-full w-24 h-24 mx-auto mb-4 shadow-md' />

        <p className='text-gray-700 text-lg mb-4'>{user.email}</p>

        <button
          className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
          onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
