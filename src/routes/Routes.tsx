import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import App from '../App';
import Home from '../Pages/HomePage/Home';
import Tickets from '../Pages/TicketPage/Tickets';
import NotFound from '../Pages/NotFoundPage/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'tickets',
        element: <Tickets />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
