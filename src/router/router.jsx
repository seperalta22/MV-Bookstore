import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import CategoriesPage from '../pages/CategoriesPage';
import NotFoundPage from '../pages/NotFoundPage';
import Layout from '../layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <App />
      </Layout>
    ),
  },
  {
    path: '/categories',
    element: (
      <Layout>
        <CategoriesPage />
      </Layout>
    ),
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
