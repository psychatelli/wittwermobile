import React, { Component } from "react";
import { Title, Container, Header, Content, Text,  ButtonIcon, Footer, FooterTab, Left,Right, Body, Button, Icon } from "native-base";
import { ImageBackground, View, StatusBar, TextInput, StyleSheet } from "react-native";




class MyButton extends Component {
    constructor(props) {
        super(); 
          this.state = {
            homeLink: "Changed Link"  
          }
        
      }
  
        onChangeLink() {
          this.props.changeLink(this.state.homeLink);
        }

      //   onChangeLink = (homeLink) => {
      //     this.setState({ changeLink: homeLink });
      // },

    render() {
      return (
        <View>
        <Button onPress={this.onChangeLink.bind(this)}><Text> Change Text </Text> </Button> 
      </View>
          );
      }
  }
  export default MyButton;
  

