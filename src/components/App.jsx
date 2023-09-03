import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ContactsPage } from 'pages/ContactsPage';
import { Home } from 'pages/Home/Home';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { Layout } from './Layouts/Layout';
import { refreshUser } from 'redux/auth/actions';
// import { useAuthUser } from 'hooks/useAuthUser';
import { RestrictRoute } from 'layoutRoutes/RestrictRoute';
import { PrivateRoute } from 'layoutRoutes/PrivateRoute';



export const App = () => {
  const dispatch = useDispatch();
  // const { isRefreshing } = useAuthUser();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<RestrictRoute redirectTo="/contacts" component={<RegisterPage />} />} />
        <Route path="/login" element={<RestrictRoute redirectTo="/" component={<LoginPage />} />} />
        <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />} />
      </Route>
    </Routes>
  );
};
