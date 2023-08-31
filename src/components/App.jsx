import React from 'react';
import { ContactsPage } from 'pages/ContactsPage';
import { Home } from 'pages/Home';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layouts/Layout';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/actions';
import { useAuthUser } from 'hooks/useAuthUser';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuthUser();

  useEffect(() => {
    dispatch(refreshUser());
  }, []);

  // if (isRefreshing) {
  //   return <div>Loading....</div>;
  // }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};
