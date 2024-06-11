import { Link } from 'react-router-dom';

const NotFound = () => {
  document.title = 'Lotto Checker - 404';
  return (
    <>
      <div>NotFound</div>
      <Link to="/lotto_checker">GO HOME</Link>
    </>
  );
};

export default NotFound;
