import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChatsPage } from './pages/Chats.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ChatsPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
