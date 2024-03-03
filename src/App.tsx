import { createHashRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root';
import GlobalStyles from './globalStyles';

const router = createHashRouter([
  {
    path: '/:compressedData?',
    element: <Root />,
  },
]);

export default function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}
