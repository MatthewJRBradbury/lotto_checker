import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="container relative mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <div className="hidden font-bold lg:flex">
            <Link to="/" className="hover:text-darkBlue text-black">
              Dashboard
            </Link>
          </div>
          <div className="hidden font-bold lg:flex">
            <Link to="/tickets" className="hover:text-darkBlue text-black">
              Tickets
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
