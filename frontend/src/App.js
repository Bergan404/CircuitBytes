import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from './components/LoginFromPage'
import SignupFormPage from './components/SignupFromPage'
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from './components/HomePage/HomePage'
import ProfilePage from './components/Profile/index'
import Posts from "./components/CreatePost/CreatePost"
import PostOpened from './components/PostAfterCreation/index'
import ShoppingCart from './components/ShoppingCart/ShoppingCart'
import PostProperties from './components/PostProperties/index'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>

          <Route path="/signup">
            <SignupFormPage />
          </Route>

          <Route path="/" exact component={HomePage}>
            <HomePage />
          </Route>

          <Route path="/profile/:username" component={ProfilePage}>
            <ProfilePage />
          </Route>

          <Route path="/create-post" component={Posts}>
            <Posts />
          </Route>

          <Route path="/post" component={PostOpened}>
            <PostOpened />
          </Route>

          <Route path="/shopping-cart/:username" component={ShoppingCart}>
            <ShoppingCart />
          </Route>

          <Route path="/post/:id" component={PostProperties}>
            <PostProperties />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
