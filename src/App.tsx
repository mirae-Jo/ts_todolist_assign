import React from 'react';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { QueryClientProvider } from 'react-query';
import { QueryClient } from 'react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
