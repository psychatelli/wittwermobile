import React, { Component } from "react";
import { Title, View, Container, Header, Content, Text,  ButtonIcon, Footer, FooterTab, Left,Right, Body, Button, Icon } from "native-base";

import styles from "../../../styles/styles";

import { connect } from 'react-redux';
import Air_Complete_Rendered_Data from "../../../components/air_shipment_components/complete_rendered_data";

class Air_Complete_Documents extends Component {
  render() {
    //const {goBack} = this.props.navigation;

    return (
      <Container style={styles.container_white}>
          <Content padder>
          <Text style={styles.header_2}>DOCUMENTS</Text>

            <View style={styles.custom_wrapper}>
              <Text>Documents Content goes here</Text>
              <Air_Complete_Rendered_Data AirItemC={this.props.Air_complete_reducer} />   
            </View>
          </Content>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    Air_complete_reducer: state.Air_complete_reducer,
    Air_complete_reducer_data: state.Air_complete_reducer_data
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


export default connect(mapStateToProps, matchDispatchToProps)(Air_Complete_Documents);