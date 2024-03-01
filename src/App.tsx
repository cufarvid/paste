import { createHashRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Root from './routes/root';
import Editor from './routes/editor';

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: ':compressedData?',
        element: <Editor />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
