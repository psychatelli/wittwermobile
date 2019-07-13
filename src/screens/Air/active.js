import React, { Component } from "react";
import { Segment, Card, CardItem, Title, InputGroup, Form, Item, Label, Input, Subtitle, Container, Header, Content, Text,  ButtonIcon, Footer, FooterTab, Left,Right, Body, Button, Icon } from "native-base";
import { ImageBackground, View, StatusBar, TextInput, Platform } from "react-native";
import styles from "../../styles/styles"; 

import Footer_Nav from "../../components/footer_nav";
import Segment_Nav from "../../components/segment_nav";



import { selectShipment } from '../../actions';
import { connect } from 'react-redux';

import Air_Active_List from "../../components/air_shipment_components/air_active";
 

class Air_Active extends Component {
  render() {
    // const {goBack} = this.props.navigation;
    return (
      <Container>
            {/* <ImageBackground source={launchscreenBg} style={styles.imageContainer}>  */}
          <Header hasTabs>
              <Left/>
                <Body>
                    <Title>Air Home</Title>
                </Body>
              <Right/>
          </Header>
       
          <Segment> 
            <Button active first onPress={() => this.props.navigation.navigate("Air")}>
                <Text>Active</Text>
            </Button>
              
            <Button  onPress={() => this.props.navigation.navigate("Air_Completed")}>
                <Text>completed</Text>
            </Button>
          </Segment>

      <Content padder>
              <Button transparent
              onPress={() => this.props.navigation.navigate("Home")}>
              <Icon name="md-home" />
              </Button>
              <Air_Active_List Shipments={this.props.Shipments} selectShipment={this.props.selectShipment} navigation={this.props.navigation}  />
      </Content>
        <Footer_Nav FooterNav_reducer_data={this.props.FooterNav_reducer_data} navigation={this.props.navigation}/>

      </Container>
    );
  }
}
  
function mapStateToProps(state) {
return {
    Shipments: state.Shipments,
    FooterNav_reducer_data: state.FooterNav_reducer_data,
    selectShipment: state.selectShipment
  };
}

function matchDispatchToProps(dispatch) {
  return {
      selectShipment(shipment) {
          dispatch(selectShipment(shipment))
      }
  }
}
 
export default connect(mapStateToProps, matchDispatchToProps)(Air_Active);