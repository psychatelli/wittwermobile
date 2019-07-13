import React, { Component } from "react";
import { connect } from 'react-redux';

import { Segment, Card, CardItem, Title, InputGroup, Form, Item, Label, Input, Subtitle, Container, Header, Content, Text,  ButtonIcon, Footer, FooterTab, Left,Right, Body, Button, Icon } from "native-base";
import { ImageBackground, View, StatusBar, TextInput, Platform } from "react-native";
import SignupForm from "../../components/forms/signupForm";

import Footer_Nav from "../../components/footer_nav/";
import styles from "../../styles/styles";

const launchscreenBg = require("../../../assets/img/background.jpg");

class Home extends Component {
                   
  render() {
    const { goBack } = this.props.navigation;
        
    return  (                        
      <Container> 
        <ImageBackground source={launchscreenBg} style={{flex: 1, width: null, height: null,}}> 
            <Header style={styles.MainContainer}>  
              <Left> 
                <Button
                transparent
                onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                <Icon style={styles.title_font} name="menu" />
                </Button>
              </Left>
              <Body>         
                <Title style={styles.title_font}>Home</Title>
              </Body> 
              <Right/>
            </Header>
                             
            <Content padder>
                <Button style={styles.Home_btns} block> 
                    <Text>Messages</Text>
                </Button> 
                 
                <Button block style={styles.Home_btns}  
                onPress={() => this.props.navigation.navigate("LCL_Active")}> 
                    <Text>Shipments</Text> 
                </Button> 
                     
                <Button style={styles.Home_btns} block>  
                    <Text>Search By ID</Text> 
                </Button>   
               
                <SignupForm />    
               
                <Button block style={styles.Home_btns}  
                onPress={() => this.props.navigation.navigate("#")}>   
                    <Text>APP SCREEN</Text>  
                </Button>  
            </Content> 
 
            <Footer_Nav FooterNav_reducer_data={this.props.FooterNav_reducer_data} navigation={this.props.navigation}/>
       </ImageBackground> 
      </Container>
    );
  }
}
     
      
function mapStateToProps(state) {
  return {
      FooterNav_reducer_data: state.FooterNav_reducer_data
  };
}
    
export default connect(mapStateToProps)(Home);

 