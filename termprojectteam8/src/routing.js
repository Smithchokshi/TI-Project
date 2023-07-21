import React, { Suspense, lazy } from 'react';
import { Route, useNavigate, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import HeaderWithImage from "./Component/Header/header";
import Footer from "./Component/Footer/footer"

const Login = lazy(() => import('./Component/Login/login'));
const Register = lazy(() => import('./Component/Register/register'));
const Appointment = lazy(() => import('./Component/Appointment/appointment'));
const Dashboard = lazy(() => import('./Component/Dashboard/dashboard'));


const { Content } = Layout;

const Routing = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  console.log(isAuthenticated);
  const navigate = useNavigate();
  const PublicRoutes = [
    {
      path: '/',
      component: <Login />,
    },
    {
      path: '/login',
      component: <Login />,
    },
    {
      path: '/register',
      component: <Register />,
    },
  ].filter(cur => cur);

  const PrivateRoutes = [
    {
      path: '/appointments',
      component: <Appointment />,
    },
    {
      path: '/dashboard',
      component: <Dashboard />,
    },
  ].filter(cur => cur);

  const PrivateRoute = ({ children }) => {
    if (isAuthenticated === 'false') navigate('/login', { replace: true });
    return isAuthenticated === 'true' ? children : <Login />;
  };

  const PublicRoute = ({ children }) => {
    if (isAuthenticated === 'true') navigate('/admin/appointments', { replace: true });
    return isAuthenticated === 'true' ? <Appointment /> : children;
  };

  return (
    <Suspense className="loader" fallback={<></>}>
      <Layout style={{ minHeight: '100vh', display: 'flex' }}>
        {isAuthenticated && isAuthenticated === 'true' && <HeaderWithImage />}
        <Routes>
          {PublicRoutes.map(route => (
            <Route
              exact={route.exact}
              key={route.path}
              path={route.path}
              element={<PublicRoute>{route.component}</PublicRoute>}
            />
          ))}
          {PrivateRoutes.map(route => (
            <Route
              exact={route.exact}
              key={route.path}
              path={route.path}
              element={<PrivateRoute>{route.component}</PrivateRoute>}
            />
          ))}
        </Routes>
        {isAuthenticated && isAuthenticated === 'true' && <Footer />}
      </Layout>
    </Suspense>
  );
};

export default Routing;
