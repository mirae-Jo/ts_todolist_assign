import React from 'react';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { QueryClientProvider } from 'react-query';
import { QueryClient } from 'react-query';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
