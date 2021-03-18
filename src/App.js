import React, { Suspense, lazy, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import Container from './components/Container';
import routes from './routes';
import { getCurrentUser } from './redux/auth';
import PrivatRoute from './components/PrivatRoute';
import PublicRoute from './components/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <Header />

      <Suspense fallback={<p>Загружаем...</p>}>
        <Switch>
          <PublicRoute exact path={routes.home}>
            <HomeView />
          </PublicRoute>
          <PublicRoute
            path={routes.register}
            restricted
            redirectTo={routes.contacts}
          >
            <RegisterView />
          </PublicRoute>
          <PublicRoute
            path={routes.login}
            restricted
            redirectTo={routes.contacts}
          >
            <LoginView />
          </PublicRoute>
          <PrivatRoute path={routes.contacts} redirectTo="/login">
            <ContactsView />
          </PrivatRoute>
        </Switch>
      </Suspense>
    </Container>
  );
}
