import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ChakraProvider, theme, } from '@chakra-ui/react';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component'
import UsersPage from './pages/users/users.component';
import UserDetailsPage from './pages/user-details/user-details.component';
import UserEditPage from './pages/user-edit/user-edit.component';
import UserCreatePage from './pages/user-create/user-create.component';
import LoginPage from './pages/login/login.component';
import PageLayout from './components/layouts/page-layout.component';
import PageContainer from './components/layouts/page-container.component';

import useAuth from './hooks/useAuth';

function App() {
  const {
    authToken,
    setAuthToken,
    hasLogged,
    setHasLogged
  } = useAuth();


  if (!hasLogged || !authToken) {
    return (
      <ChakraProvider theme={theme}>
        <LoginPage authToken={authToken} setAuthToken={setAuthToken} setHasLogged={setHasLogged} />
      </ChakraProvider>
    );
  }

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <PageLayout>
          <Header />
          <PageContainer>
            <Switch>
              <Route exact path='/' render={() =>
                <Redirect to='/users' />}
              />
              <Route exact path='/users' component={UsersPage} />
              <Route exact path='/users/create' component={UserCreatePage} />
              <Route exact path='/users/:id' component={UserDetailsPage} />
              <Route exact path='/users/:id/edit' component={UserEditPage} />
            </Switch>
          </PageContainer>
          <Footer />
        </PageLayout>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
