import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ChakraProvider, theme, } from '@chakra-ui/react';

import Header from './components/header/header.component';
import UsersPage from './pages/users/users.component';
import UserDetailsPage from './pages/user-details/user-details.component';
import UserEditPage from './pages/user-edit/user-edit.component';
import UserCreatePage from './pages/user-create/user-create.component';
import LoginPage from './pages/login/login.component';

const getUsers = async () => {
  const res = await fetch('http://localhost:3004/users');
  console.log(await res.json());
}

function App() {
  getUsers();
  const currentUser = null;


  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' render={() =>
            currentUser ?
              <Redirect to='/users' /> :
              <Redirect to='/login' />}
          />
          <Route exact path='/users' component={UsersPage} />
          <Route exact path='/users/create' component={UserCreatePage} />
          <Route exact path='/users/:id' component={UserDetailsPage} />
          <Route exact path='/users/:id/edit' component={UserEditPage} />
          <Route exact path='/login' component={LoginPage} />
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
