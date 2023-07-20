import React, { Suspense, lazy } from 'react';
import { Route, useNavigate, Routes } from 'react-router-dom';
import { Layout } from 'antd';

const Login = lazy(() => import('./Component/Login/login'));
const Register = lazy(() => import('./Component/Register/register'));

const { Content } = Layout;

const Routing = () => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
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

    const PrivateRoutes = [].filter(cur => cur);

    const PrivateRoute = ({ children }) => {
        if(!isAuthenticated) navigate('/login', {replace: true})
        return isAuthenticated ? children : <Login />;
    };

    const PublicRoute = ({ children }) => {
        // if(isAuthenticated) navigate('/products', {replace: true})
        return isAuthenticated ? <></> : children;
    };

    return (
        <Suspense className="loader" fallback={}>
            <Layout style={{ minHeight: '100vh', display: 'flex' }}>
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
            </Layout>
        </Suspense>
    );
};

export default Routing;
