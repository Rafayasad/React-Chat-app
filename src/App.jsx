import React from 'react';
import './App.css';
import AppRouter from './config/router';
import firebase from 'firebase';


class App extends React.Component{
  render(){
    return(
      <AppRouter />
    )
  }
}



export default App;
