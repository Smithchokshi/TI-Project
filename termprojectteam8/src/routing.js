import React, { Suspense, lazy, useEffect } from 'react';
import { Route, useNavigate, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import HeaderWithImage from './Component/Header/header';
import Footer from './Component/Footer/footer';
import DrivingTestForm from './Component/Admin/admin';

const Login = lazy(() => import('./Component/Login/login'));
const Register = lazy(() => import('./Component/Register/register'));
const Appointment = lazy(() => import('./Component/Appointment/appointment'));
const Dashboard = lazy(() => import('./Component/Dashboard/dashboard'));
const PageNotFound = lazy(() => import('./Component/404/404'));
const Contact = lazy(() => import('./Component/Contact/contactUs'));


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
    {
      path: '/admin',
      component: <DrivingTestForm />,
    },
    {
      path: '*',
      component: <PageNotFound />,
    },
    {
      path: '/contact',
      component: <Contact />,
    }
  ].filter(cur => cur);

  const PrivateRoute = ({ children }) => {
    if (isAuthenticated === 'false') navigate('/login', { replace: true });
    return isAuthenticated === 'true' ? children : <Login />;
  };

  const PublicRoute = ({ children }) => {
    if (isAuthenticated === 'true') navigate('/dashboard', { replace: true });
    return isAuthenticated === 'true' ? <Dashboard /> : children;
  };

  useEffect(() => {
    const testBooked = localStorage.getItem('testBooked');
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    const userData = JSON.parse(localStorage.getItem('userData'));
    console.log(userData);

    if (userData === null) {
      const data = [
        {
          username: 'admin@example.com',
          fullName: 'Admin User',
          driverLicenseNumber: null,
          password: 'Admin@123',
          address: 'Demo',
          isAdmin: true,
        },
      ];

      localStorage.setItem('userData', JSON.stringify(data));
    } else if (
      !userData.find(cur => {
        return cur.username === 'admin@example.com';
      })
    ) {
      userData.push({
        username: 'admin@example.com',
        fullName: 'Admin User',
        driverLicenseNumber: null,
        password: 'Admin@123',
        address: 'Demo',
        isAdmin: true,
      });
      localStorage.setItem('userData', JSON.stringify(userData));
    }

    if (isAuthenticated === null) {
      localStorage.setItem('isAuthenticated', false);
    }

    if (testBooked === null) {
      localStorage.setItem('testBooked', false);
    }
    const classNumber = localStorage.getItem('classNumber');
    if (classNumber === null) {
      localStorage.setItem('classNumber', 'Class 5 - Single Vehicle or Combination');
    }
    const locations = {
      Halifax: 'Bayers Lake Business Park, 300 Horseshoe Lake Dr, Halifax NS, B3S 0B7',
      Dartmouth: '250 Baker Dr, Dartmouth NS, B2W6L4',
      Sackville: '486 Sackville Drive, Lower Sackville NS, B4C 2R8',
      Bridgewater: '81 Logan Road, Bridgewater NS, B4V 3T3',
      Kentville: '5 Shylah Drive, Kentville NS, B4N 0H2',
    };
    const locationDict = JSON.stringify(locations);
    localStorage.setItem('locations', locationDict);

    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (user?.isAdmin) navigate('/admin');
    else navigate('/dashboard');
  }, []);

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
