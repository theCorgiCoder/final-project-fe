import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// 1. added import form
import form from "./reducers/form";
import user from "./reducers/user";

import Home from "./components/pages/Home";
import PetPosts from "./components/pages/PetPosts";
import PetPostDetails from "./components/pages/PetPostDetails";
import About from "./components/pages/About";
import PostForm from "./components/PostForm";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
// import Navbar from './components/Navbar';
import TestNav from "./components/WIP/TestNav";
import Footer from "./components/Footer";

// 2. added form reducer in combineReducers
const reducer = combineReducers({
  user: user.reducer,
  form: form.reducer,
});

const store = configureStore({ reducer });

const App = () => {
  return (
      <Provider store={store}>
<<<<<<< HEAD
        <BrowserRouter>
          <TestNav />
          {/* <Navbar /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/petposts" component={PetPosts} />
            <Route path="/pet/:id" component={PetPostDetails} />
            <Route path="/create-post" component={PostForm} />
            <Route path="/about" component={About} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </Switch>
          <Footer />
        </BrowserRouter>
=======
        <TestNav />
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/petposts" component={PetPosts} />
          <Route path="/pet/:id" component={PetPostDetails} />
          <Route path="/create-post" component={PostForm} />
          <Route path="/about" component={About} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
        <Footer />
>>>>>>> 52ddf3b5558ef9556f030e50d235e0ba0b58629b
      </Provider>
  );
};

export default App;
