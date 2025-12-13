import Logo from '../../assets/logo.png';
import { LoggingButtons } from '../../auth/LoggingButtons.jsx';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

/**
 * TODO: Ticket 3:
 * Implement authentication using Auth0
 */
export default function Header() {
  const { isAuthenticated, isLoading } = useAuth0();

  const location = useLocation();
  const isProfilePage = location.pathname === '/profile';

  return (
    <header className='primary-c flex flex-col gap-7 pb-7'>
      <div className='flex w-[100%] justify-between px-14'>
        <div className='flex justify-between'>
          <NavLink to='https://www.humanrightsfirst.org/'>
            <img className='w-[100px]' src={Logo} alt='HRF logo white' />
          </NavLink>
        </div>

        <div className='flex items-center py-4 gap-16'>
          <NavLink to='/' className='nav-btn'>
            Home
          </NavLink>

          <NavLink to='/graphs' className='nav-btn'>
            Graphs
          </NavLink>

          {!isLoading && isAuthenticated && (
            <NavLink to='/profile' className='nav-btn'>
              Profile
            </NavLink>
          )}

          <LoggingButtons />
        </div>
      </div>

      {!isProfilePage && (
        <>
          <h1 className='text-6xl font-serif text-white'>Asylum Office Grant Rate Tracker</h1>

          <h3 className='text-white font-serif'>
            The Asylum Office Grant Rate Tracker provides asylum seekers, researchers, policymakers, and the public an interactive tool to explore USCIS data on
            Asylum Office decisions
          </h3>
        </>
      )}
    </header>
  );
}
