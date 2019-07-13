import React, { Component } from "react";
import { Title, Container, Header, Content, Text,  ButtonIcon, Footer, FooterTab, Left,Right, Body, Button, Icon } from "native-base";
import { ImageBackground, View, StatusBar, TextInput, StyleSheet } from "react-native";


export const Header_A = (props) => {
  return (
    <View>
      <Text style={styles.bigblue}> {props.homeLink} </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  bigblue: {
    color: 'aqua',
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor: 'gray',
  },
  red: {
    color: 'red',
  },
});

// class Header_A extends React.Component {
  
  
  // render() {
    
  //   return (
     
          
          
  //         // <Header>
  //         //   <Left>
  //         //     <Button
  //         //       transparent
  //         //       onPress={() => this.props.navigation.navigate("DrawerOpen")}
  //         //     >
  //         //       <Icon name="ios-menu" />
  //         //     </Button>
  //         //   </Left>
  //         //   <Body>
  //         //     <Title>{params.headerText}</Title>
  //         //     <Subtitle>Subtitle</Subtitle>

  //         //   </Body>
  //         //   <Right />
  //         // </Header>

  //       );
  //     }
  //   }
  // export default Header_A;

  