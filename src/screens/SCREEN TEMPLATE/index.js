import React, { Component } from "react";
import { Segment, Card, CardItem, Title, InputGroup, Form, Item, Label, Input, Subtitle, Container, Header, Content, Text,  ButtonIcon, Footer, FooterTab, Left,Right, Body, Button, Icon } from "native-base";
import { ImageBackground, View, StatusBar, TextInput, Platform } from "react-native";
import Footer_Nav from "../../components/footer_nav";

import styles from "./styles";


class Air extends Component {
   
 

state = {
  term: '',
  term2: ''
};

  render() {
    const {goBack} = this.props.navigation;
 
    return (
        <Container style={styles.container}>

              {/* <ImageBackground source={launchscreenBg} style={styles.imageContainer}>  */}
            <Header hasTabs>
                <Left>
                    <Button
                    transparent
                    onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                    <Icon name="menu" />
                    </Button>
                </Left>

                <Body>
                    <Title>Air</Title>
                </Body>

                <Right />
            </Header>
        
        <Segment>
          <Button first active>
            <Text>Active</Text>
          </Button>
          
          <Button>
            <Text>completed</Text>
          </Button>
        </Segment>

        <Content padder>
        <Text>
            This is the Air shipments
        </Text>

        </Content>

            <Footer_Nav navigation={this.props.navigation}/>
        </Container>
        );
    }
}

export default Air;