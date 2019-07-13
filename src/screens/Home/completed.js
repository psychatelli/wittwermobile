import React, { Component } from "react";
import { Segment, Card, CardItem, Title, InputGroup, Form, Item, Label, Input, Subtitle, Container, Header, Content, Text,  ButtonIcon, Footer, FooterTab, Left,Right, Body, Button, Icon } from "native-base";
import { ImageBackground, View, StatusBar, TextInput, Platform } from "react-native";
import Footer_Nav from "../../components/footer_nav";
import My_Carditem from "../../components/Carditem";

import styles from "../../styles/styles";
const launchscreenBg = require("../../../assets/img/background.jpg");


class Home_Completed extends Component {
   
 

state = {
  term: '',
  term2: ''
};


  render() {
    const {goBack} = this.props.navigation;

    return ( 

      <Container>
               {/* <ImageBackground source={launchscreenBg} style={{flex: 1, width: null, height: null,}}>  */}
        <Header style={styles.MainContainer}  hasSegment>  
          <Left/>
          <Body>
            <Title style={styles.title_font}>Completed</Title>
          </Body>
          <Right />

        </Header>
            <Segment>
            <Button onPress={() => this.props.navigation.navigate("Home")} first >
                <Text>Active</Text> 
            </Button>
            <Button onPress={() => this.props.navigation.navigate("Home_Completed")} active>
                <Text>Completed</Text>
            </Button>
            </Segment>
        <Content padder>

          {/* <Container> */}

               <My_Carditem navigation={this.props.navigation}/>

               <My_Carditem navigation={this.props.navigation}/>

               
 
            {/* <Card style={styles.MycardStyle}>
                
                <CardItem header>
                  <Text>Active Shipments</Text>
                </CardItem>

                <CardItem style={styles.MycardStyle}>
                  <Left>
                    <Icon active name="logo-googleplus" onPress={() => this.props.navigation.navigate('MessagesAll')} />
                    <Text>Google Plus</Text>
                  </Left>  
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </CardItem>
              
                <CardItem style={styles.MycardStyle}>
                  <Left>
                    <Icon active name="logo-facebook" />
                    <Text>facebook</Text>
                  </Left>  
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </CardItem>

                <CardItem style={styles.MycardStyle}>
                  <Left>
                    <Icon active name="logo-linkedin" />
                    <Text>Linked In for you</Text>
                  </Left>  
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </CardItem>

            </Card> */}
          
           


            {/* <InputGroup>
              <Input
                placeholder="First Name"
                onChangeText={(text) => this.firstName = text} />
            </InputGroup>

            <InputGroup>
                <Input
                  placeholder="Last Name"
                  onChangeText={(text) => this.lastName = text} />
            </InputGroup> */} 
            
         {/* </Container> */}
         </Content>

       <Footer_Nav navigation={this.props.navigation}/>
       
       
      {/* </ImageBackground> */}
      </Container>
    );
  }
}

export default Home_Completed;
