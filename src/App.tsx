import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SuperheroesPage from './pages/SuperheroesPage';

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="max-w-[800px] m-auto">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/superheroes" element={<SuperheroesPage />} />
          </Routes>
        </BrowserRouter>

        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
}

export default App;
