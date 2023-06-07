import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import CategoriesPage from '../pages/CategoriesPage';
import NotFoundPage from '../pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/categories',
    element: <CategoriesPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
