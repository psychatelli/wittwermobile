import React, { Component } from "react";
import { Title, View, Subtitle, Container, Header, Content, Text,  ButtonIcon, Footer, FooterTab, Left,Right, Body, Button, Icon } from "native-base";

import styles from "../../../styles/styles";

import { connect } from 'react-redux';
import TrackingLayout from "../../../components/tab_components/trackingLayout";

class Air_Active_Tracking extends Component {
  render() {
    //const {goBack} = this.props.navigation;

    return (
      <Container style={styles.container_white}>
        <Content padder>
        <Text style={styles.header_2}>TRACKING</Text>


          <View style={styles.custom_wrapper}>
            <TrackingLayout shipment={this.props.Air_Active_Shipment_Reducer} />   
          </View>

        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
      Air_Active_Shipment_Reducer: state.Air_Active_Shipment_Reducer,
  };
  }
  
  function matchDispatchToProps(dispatch){
    return {
        selectShipment(shipment) {
            debugger;
            dispatch(selectShipment(shipment))
        }
    }
  }

export default connect(mapStateToProps, matchDispatchToProps)(Air_Active_Tracking);