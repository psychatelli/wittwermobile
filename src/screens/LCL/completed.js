import React, { Component } from "react";
import { Segment, Card, CardItem, Title, InputGroup, Form, Item, Label, Input, Subtitle, Container, Header, Content, Text,  ButtonIcon, Footer, FooterTab, Left,Right, Body, Button, Icon } from "native-base";
import { ImageBackground, View, StatusBar, TextInput, Platform } from "react-native";

import styles from "./styles";

import Footer_Nav from "../../components/footer_nav";



class LCL_Completed extends Component {
   
 
  render() {
    const {goBack} = this.props.navigation;
 
    return (
        <Container style={styles.container}>

            {/* <ImageBackground source={launchscreenBg} style={styles.imageContainer}>  */}
            <Header hasTabs>
                <Left/>
                    <Body>
                        <Title>LCL Completed</Title>
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
                    This is the LCL shipments
                </Text>

                <Button transparent
                        onPress={() => this.props.navigation.navigate("Home")}>
                        <Icon name="md-home" />
                </Button>
            </Content>

            <Footer_Nav navigation={this.props.navigation}/>
        </Container>
        );
    }
}

export default LCL_Completed;