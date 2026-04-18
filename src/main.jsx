import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import router from './routers/router.jsx';
import App from './App.jsx';
import { RouterProvider } from 'react-router-dom';
import  'sweetalert2/dist/sweetalert2.js'


import store from './redux/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
