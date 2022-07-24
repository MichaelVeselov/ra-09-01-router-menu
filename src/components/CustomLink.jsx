import { Link, useMatch } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
  const match = useMatch(to);

  const itemClassName = 'menu__item';

  return (
    <Link
      to={to}
      {...props}
      className={
        match ? `${itemClassName} menu__item-active` : `${itemClassName}`
      }
    >
      {children}
    </Link>
  );
}

export { CustomLink };
