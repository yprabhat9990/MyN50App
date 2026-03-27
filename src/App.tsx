import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { appRouteObjects } from './router-config';

const router = createBrowserRouter(appRouteObjects, {
  basename: import.meta.env.BASE_URL,
});

export default function App() {
  return <RouterProvider router={router} />;
}
