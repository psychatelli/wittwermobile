import React, { Component } from "react";
import { Title, View, Container, Header, Content, Text, Tabs, Tab, TabHeading, ButtonIcon, Footer, FooterTab, Left,Right, Body, Button, Icon } from "native-base";
import styles from "../../../styles/styles";

import { connect } from 'react-redux';
import RoutesLayout from "../../../components/tab_components/cargoLayout";

class Air_Active_Routes extends Component {
  render() {
    //const {goBack} = this.props.navigation;

    return (
      <Container style={styles.container_white}>
        

        <Content padder>
        <RoutesLayout shipment={this.props.Air_Active_Shipment_Reducer} />   
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


export default connect(mapStateToProps, matchDispatchToProps)(Air_Active_Routes);
