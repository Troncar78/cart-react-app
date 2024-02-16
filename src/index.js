import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductsScreen from './Pages/ProductsScreen';
import NotFoundScreen from './Pages/NotFoundPage';
import ProductScreen from './Pages/ProductScreen';
import Cart from './Pages/Cart';
import { Provider } from 'react-redux';
import { store } from './store';
import { CartProvider } from './Context/CarContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProductsScreen />,
    errorElement: <NotFoundScreen />,
  },
  {
    path: '/products/:productID',
    element: <ProductScreen />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </Provider>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
