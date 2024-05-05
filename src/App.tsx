import { RouterProvider, createHashRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
// Styles
import './assets/main.css'

import Layout from './components/Layout'
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 1000,
      refetchOnWindowFocus: false
    }
  }
});

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: ':movie_id',
        element: <MovieDetail />
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
      </QueryClientProvider>
    </div>
  );
}

export default App;
