import React, { Component } from "react";
import { Title, View, Subtitle, Container, Header, Content, Text,  ButtonIcon, Footer, FooterTab, Left,Right, Body, Button, Icon } from "native-base";

import styles from "../../../styles/styles";

import { connect } from 'react-redux';
import MessagesLayout from "../../../components/tab_components/messagesLayout";

class LCL_Active_Messages extends Component {
  render() {
    //const {goBack} = this.props.navigation;

    return (
      <Container style={styles.container_white}>
        <Content padder>
        <Text style={styles.header_2}>TRACKING</Text>


          <View style={styles.custom_wrapper}>
          <MessagesLayout shipment={this.props.LCL_active_reducer} />   
          </View>

        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    LCL_active_reducer: state.LCL_active_reducer,
    LCL_active_reducer_data: state.LCL_active_reducer_data
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

export default connect(mapStateToProps, matchDispatchToProps)(LCL_Active_Messages);