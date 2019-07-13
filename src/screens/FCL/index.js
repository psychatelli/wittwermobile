import React, { Component } from "react";
import { Segment, Card, CardItem, Title, InputGroup, Form, Item, Label, Input, Subtitle, Container, Header, Content, Text,  ButtonIcon, Footer, FooterTab, Left,Right, Body, Button, Icon } from "native-base";
import { ImageBackground, View, StatusBar, TextInput, Platform } from "react-native";
import styles from "../../styles/styles";

import Footer_Nav from "../../components/footer_nav";
import KeysButton from "../../components/button";

import { FCLActiveSelectShipment } from '../../actions';
import { connect } from 'react-redux';
import FCLActiveList from '../../components/fcl_shipment_components/fcl_active_list';

class FCL extends Component {
   
 
  render() {
   // const {goBack} = this.props.navigation;
 
 

    return (
        <Container>

              {/* <ImageBackground source={launchscreenBg} style={styles.imageContainer}>  */}
            <Header style={styles.MainContainer} hasTabs>
                <Left/>
 
                <Body>
                    <Title style={styles.title_font}>FCL</Title>
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
            <Button transparent onPress={() => this.props.navigation.navigate("Home")}>
                    <Icon name="md-home" />
            </Button>
            <FCLActiveList FCL_active_reducer_data={this.props.FCL_active_reducer_data} FCLActiveSelectShipment={this.props.FCLActiveSelectShipment} navigation={this.props.navigation}/>
        </Content>
 
        <Footer_Nav FooterNav_reducer_data={this.props.FooterNav_reducer_data} navigation={this.props.navigation}/>
        </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        FCL_active_reducer: state.FCL_active_reducer,
        FCL_active_reducer_data: state.FCL_active_reducer_data,
        FooterNav_reducer_data: state.FooterNav_reducer_data
    };
}
   
function matchDispatchToProps(dispatch){
    return {
        FCLActiveSelectShipment(shipment) {
            debugger;
            dispatch(FCLActiveSelectShipment(shipment))
        }
    }
}
    
    export default connect(mapStateToProps, matchDispatchToProps)(FCL);
