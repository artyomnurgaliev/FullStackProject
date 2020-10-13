import React, {useState, useEffect} from 'react';
import SignupPage from './SignupPage'
import MainPage from './MainPage'
import styles from './App.module.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import UserService from "../userService";
import LoginPage from "./LoginPage";
import UserPage from "./UserPage";

function PrivateRoute({user, loading, ...rest}) {
  if (loading) {
    return <h1>LOADING...</h1>
  }

  if (!user) {
    return <Redirect
      to={{
        pathname: '/signup',
      }}
    />
  }

  return (
    <Route
      {...rest}
    />
  )
}

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    UserService.currentUser()
      .then((user) => {
        setUser(user)
      })
      .catch((error) => {
        console.log('error', error)
      })
      .then(() => {
        setLoading(false);
      });
  }, []);


  return (
    <BrowserRouter>
      <div className={styles.page}>
        <Switch>
          <Route path="/signup" render={(props) => (<SignupPage setUser={setUser} {...props}/>)} />
          <Route path="/login" render={(props) => (<LoginPage setUser={setUser} {...props}/>)}/>
          <Route path="/userpage" render={(props) => (<UserPage setUser={setUser} {...props}/>)}/>
          <PrivateRoute path="*" component={MainPage} user={user} loading={loading}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

