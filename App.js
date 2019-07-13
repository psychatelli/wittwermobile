import React from "react";
import Setup from "./src/boot/setup";
import { Provider } from 'react-redux';


import Store from './src/store';


export default class App extends React.Component {

 
  render() {
    let storeInstance = Store()

  
    return (
    <Provider store={storeInstance}>
    <Setup/>
    </Provider>
    );
  }
}
