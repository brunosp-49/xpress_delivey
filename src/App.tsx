import React from 'react';
import Redirect from './router';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Redirect />
      </PersistGate>
    </Provider>
  );
}

export default App;