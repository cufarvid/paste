import { createHashRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root';

const router = createHashRouter([
  {
    path: '/:compressedData?',
    element: <Root />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
