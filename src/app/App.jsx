import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Wrapper, Header, Loader } from 'components';

const Welcome = lazy(() => import('../pages/welcome/Welcome'));
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
            <Route path="/" index element={<Welcome />} />
            <Route path="welcome" element={<Welcome />} />
            <Route
              path="ConnectShopifyStore"
              element={<ConnectShopifyStore />}
            />
            <Route path="ConnectCustomer" element={<ConnectCustomer />} />
          </Routes>
        </Suspense>
      </Wrapper>
    </>
  );
};
