import { useState } from 'react';

const useAuth = () => {
  const getItemFromStorage = (item, typeOfStorage) => {
    const itemString = typeOfStorage.getItem(item);
    const itemValue = JSON.parse(itemString);
    console.log(itemValue);

    return itemValue;
  };

  const [authToken, setAuthToken] = useState(getItemFromStorage('authToken', localStorage));
  const [hasLogged, setHasLogged] = useState(getItemFromStorage('hasLogged', sessionStorage));

  const saveAuthToken = (userAuthToken) => {
    localStorage.setItem('authToken', JSON.stringify(userAuthToken));
    setAuthToken(userAuthToken);
  };

  const saveHasLogged = () => {
    sessionStorage.setItem('hasLogged', JSON.stringify(true));
    setHasLogged(true);
  };

  return {
    authToken,
    setAuthToken: saveAuthToken,
    hasLogged,
    setHasLogged: saveHasLogged
  }

}


export default useAuth;