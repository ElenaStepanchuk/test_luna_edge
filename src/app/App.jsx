import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// import PrivateRoute from './PrivateRoute';
// import PublicRoute from './PublicRoute';

import { Wrapper, Header, Loader, Footer } from 'components';

const Register = lazy(() => import('../pages/register/Register'));
const Login = lazy(() => import('../pages/login/Login'));
const ConnectShopifyStore = lazy(() =>
  import('../pages/connectShopifyStore/ConnectShopifyStore')
);
const ConnectCustomer = lazy(() =>
  import('../pages/connectCustomer/ConnectCustomer')
);

export const App = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" index element={<Register />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route
              path="ConnectShopifyStore"
              element={<ConnectShopifyStore />}
            />
            <Route path="ConnectCustomer" element={<ConnectCustomer />} />
          </Routes>
        </Suspense>
        <Footer />
      </Wrapper>
    </>
  );
};
