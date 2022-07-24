import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <h2 style={{ color: 'white' }}>
      This page doesn't exist. Back to{' '}
      <Link to='/' style={{ color: 'white' }}>
        homepage
      </Link>
      .
    </h2>
  );
};

export { NotFoundPage };
