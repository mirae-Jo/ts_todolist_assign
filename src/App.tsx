import React from 'react';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { QueryClientProvider } from 'react-query';
import { QueryClient } from 'react-query';
import { RecoilRoot } from 'recoil';

function App() {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Home />
        </RecoilRoot>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
