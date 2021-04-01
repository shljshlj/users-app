import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ChakraProvider, theme, } from '@chakra-ui/react';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component'
import UsersPage from './pages/users/users.component';
import UserDetailsPage from './pages/user-details/user-details.component';
import UserEditPage from './pages/user-edit/user-edit.component';
import UserCreatePage from './pages/user-create/user-create.component';
import LoginPage from './pages/login/login.component';
import BaseLayout from './components/layouts/base-layout.component';
import PageContainer from './components/layouts/page-container.component';

const getUsers = async () => {
  const res = await fetch('http://localhost:9000/users');
  console.log(await res.json());
}

function App() {
  // const [token, setToken] = useState();

  // if (!token) {
  //   return <LoginPage setToken={setToken} />
  // }

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <BaseLayout>
          <Header />
          <Switch>
            <PageContainer>
              <Route exact path='/' render={() =>
                <Redirect to='/users' />}
              />
              <Route exact path='/users' component={UsersPage} />
              <Route exact path='/users/create' component={UserCreatePage} />
              <Route exact path='/users/:id' component={UserDetailsPage} />
              <Route exact path='/users/:id/edit' component={UserEditPage} />
              <Route exact path='/login' component={LoginPage} />
            </PageContainer>
          </Switch>
          <Footer />
        </BaseLayout>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
