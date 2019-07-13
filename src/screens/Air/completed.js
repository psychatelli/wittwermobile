import React, { Component } from "react";
import { Segment, Card, CardItem, Title, InputGroup, Form, Item, Label, Input, Subtitle, Container, Header, Content, Text,  ButtonIcon, Footer, FooterTab, Left,Right, Body, Button, Icon } from "native-base";
import { ImageBackground, View, StatusBar, TextInput, Platform } from "react-native";
import styles from "../../styles/styles";

import Footer_Nav from "../../components/footer_nav";
import Segment_Nav from "../../components/segment_nav";

import { AirCompleteSelectShipment } from '../../actions';
import { connect } from 'react-redux';


import Air_Complete_List from "../../components/air_shipment_components/air_complete";
// import Air_Complete_Rendered_Data from "../../components/air_shipment_components/complete_rendered_data";


class Air_Completed extends Component {

  render() {
    const {goBack} = this.props.navigation;
 
    return (
        <Container style={styles.container}>

              {/* <ImageBackground source={launchscreenBg} style={styles.imageContainer}>  */}
            <Header hasTabs>
                <Left/>
                <Body>
                    <Title>Air Completed</Title>
                </Body>
                <Right />
            </Header>
        
            <Segment> 
                <Button  first onPress={() => this.props.navigation.navigate("Air_Active")}>
                <Text>Active</Text>
                </Button>
            
                <Button active onPress={() => this.props.navigation.navigate("Air_Completed")}>
                    <Text>completed</Text>
                </Button>
            </Segment>

        <Content padder>
            <Text>
                This is the Air shipments completed
            </Text>

            <Button transparent
            onPress={() => this.props.navigation.navigate("Home")}>
            <Icon name="md-home" />
            </Button>

            <Air_Complete_List Air_complete_reducer_data={this.props.Air_complete_reducer_data} AirCompleteSelectShipment={this.props.AirCompleteSelectShipment} navigation={this.props.navigation}  />

            {/* <Air_Complete_Rendered_Data shipment={this.props.Air_complete_reducer} />    */}

        </Content>
        <Footer_Nav FooterNav_reducer_data={this.props.FooterNav_reducer_data} navigation={this.props.navigation}/>
        </Container>
        );
    }
}
 
    function mapStateToProps(state) {
    return {
        Air_complete_reducer: state.Air_complete_reducer,
        Air_complete_reducer_data: state.Air_complete_reducer_data,
        FooterNav_reducer_data: state.FooterNav_reducer_data

    };
    }
    
    function matchDispatchToProps(dispatch){
      return {
        AirCompleteSelectShipment(AirItemC) {
              debugger;
              dispatch(AirCompleteSelectShipment(AirItemC))
          }
      }
    }
    
    export default connect(mapStateToProps, matchDispatchToProps)(Air_Completed);