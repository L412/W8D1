import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import Root from "./components/root";

// DELETE THIS SHIT STARTING HERE 
import { signup, login, logout } from "./actions/session_actions";
// ENDING HERE

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  // DELETE THIS SHIT STARTING HERE
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // ENDING HERE

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});