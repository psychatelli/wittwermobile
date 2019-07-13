import React, { Component } from "react";
import { Segment, Card, CardItem, Title, InputGroup, Form, Item, Label, Input, Subtitle, Container, Header, Content, Text,  ButtonIcon, Footer, FooterTab, Left,Right, Body, Button, Icon } from "native-base";
import { ImageBackground, View, StatusBar, TextInput, Platform } from "react-native";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllUsers } from '../actions/users.actions';



class App extends Component {

  componentDidMount() {
    this.props.getAllUsers()
  }

 

  render() {
   

    let usersList = this.props.users.map(user => 
      <Text key={user.id}>{user.name}</Text>)
    return (

        <View  style={{width: 280}}> 
        <Text>List of users: </Text>
        {usersList}
      </View>

     
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllUsers: bindActionCreators(getAllUsers, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);