import { useRoutes, BrowserRouter } from 'react-router-dom';

import Home from '../home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SingIn from '../SingIn';
import { ShoppingCartProvider } from '../../components/Context';
import CheckoutSideMenu from '../../components/CheckouySideMenu';

//? Routes
import Navbar from '../../components/Navbar';

import './App.css';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/home', element: <Home /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/*', element: <NotFound /> },
    { path: '/sing-in', element: <SingIn /> }
  ]);

  return routes;
};


const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <CheckoutSideMenu />
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
