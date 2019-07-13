import React, { Component } from 'react';
import { View, Platform, StyleSheet, Image, StatusBar } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

import { STATUS_BAR_HEIGHT } from '../constants';
import icon from '../assets/icons/pure_icon.png';
import Expo from 'expo';

const remote = 'http://www.ocean-track.com/background.jpg';


class Login extends React.Component {
   


      render() {

        var {navigate} = this.props.navigation;
    
    
        return (
    
          <Container style={styles.MainWrapper}>
          <Header style={styles.Header}>
          <Left>
          <Button transparent onPress={ () => navigate("DrawerOpen", {}) }>
              <Icon name="menu" />
      </Button>
        </Left>
            <Body>
              <Title style={styles.TextHeader}>Login</Title>
            </Body>
            <Right />
          </Header>
          <Content>
            <Text>
              This is Content Section
              
    
            </Text>
            <Button primary onPress={ () => navigate("MainScreen", {}) }>
               <Text>LOGIN </Text>
              </Button>      
               {/* <Image source={require('../assets/img/background.jpg')} style={styles.backgroundImage}></Image> */}
    
          </Content>
          <Footer>
            <FooterTab>
              <Button full>
                <Text>Footer</Text>
              </Button>
            </FooterTab>
          </Footer>
    
          <StatusBar barStyle="light-content" />
    
        </Container>
    
    
    
    
        );
      }
    }
    
    
    const styles = StyleSheet.create ({
        MainWrapper: {
          backgroundColor: '#00aeef', 
        },
        TextHeader: {
          color: 'white',
        },
        Header: {
            backgroundColor: '#2c3d43',
        },
        imageStyle: {
            marginTop: 10,
            marginLeft: 10,
            width: 20,
            height: 15,
            padding: 15,
        },
        backgroundImage: {
            flex: 1,
            width: null,
            height: null,
            resizeMode: 'cover',
            backgroundColor: 'rgba(0,0,0,0)',
        },
       
    });



  export default Login;
