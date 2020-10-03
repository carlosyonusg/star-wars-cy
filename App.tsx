import React from 'react';
import { Main } from './src/views';
import { Provider } from 'react-redux';
import { store } from './src/store';

export default function App() {
  console.log('pase app.tsx en 1 root')
  
  return (
    <Provider store={store}>
      <Main/>
    </Provider>
    
  );
  
}
