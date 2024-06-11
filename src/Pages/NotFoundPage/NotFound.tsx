import { Link } from 'react-router-dom';

const NotFound = () => {
  document.title = '404 - Lotto Checker';
  return (
    <>
      <div>NotFound</div>
      <Link to="/lotto_checker">GO HOME</Link>
    </>
  );
};

export default NotFound;
