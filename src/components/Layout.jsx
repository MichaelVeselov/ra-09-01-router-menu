import { Outlet } from 'react-router-dom';
import { CustomLink } from './CustomLink';

function Layout() {
  return (
    <>
      <header className='menu'>
        <CustomLink to='/'>Главная</CustomLink>
        <CustomLink to='/drift'>Дрифт-такси</CustomLink>
        <CustomLink to='/timeattack'>Time Attack</CustomLink>
        <CustomLink to='/forza'>Forza Karting</CustomLink>
      </header>

      <main className='page'>
        <Outlet />
      </main>
    </>
  );
}

export { Layout };
