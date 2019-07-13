import React, { Component } from "react";
import { Segment, Card, CardItem, Title, InputGroup, Form, Item, Label, Input, Subtitle, Container, Header, Content, Text,  ButtonIcon, Footer, FooterTab, Left,Right, Body, Button, Icon } from "native-base";
import { ImageBackground, View, StatusBar, TextInput, Platform } from "react-native";
import Footer_Nav from "../../components/footer_nav";
import { connect } from 'react-redux';

import styles from "../../styles/styles";


class Dom extends Component {
   
 

state = {
  term: '',
  term2: ''
};

  render() {
    //const {goBack} = this.props.navigation;
 
    return (
        <Container>

              {/* <ImageBackground source={launchscreenBg} style={styles.imageContainer}>  */}
            <Header style={styles.MainContainer} hasTabs> 
                <Left/>

                <Body>
                    <Title style={styles.title_font}>Domestic</Title>
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
            This is the DOMESTIC shipments
        </Text>

        </Content>

        <Footer_Nav FooterNav_reducer_data={this.props.FooterNav_reducer_data} navigation={this.props.navigation}/>
        </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        FooterNav_reducer_data: state.FooterNav_reducer_data
    };
  }
   
  
    
    export default connect(mapStateToProps)(Dom);