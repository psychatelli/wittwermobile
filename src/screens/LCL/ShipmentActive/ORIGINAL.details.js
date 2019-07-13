import React, { Component } from "react";
import { Title, View, Container, Header, Content, Text, Tabs, Tab, TabHeading, ButtonIcon, Footer, FooterTab, Left,Right, Body, Button, Icon } from "native-base";
import styles from "../../../styles/styles";

import { connect } from 'react-redux';
import DetailsLayout from "../../../components/tab_components/detailsLayout";

class LCL_Active_Details extends Component {
  render() {
    // const {goBack} = this.props.navigation;
    return (
      <Container>
        <Content padder>
          <Text style={styles.header_2}>ROUTING</Text>
            <DetailsLayout shipment={this.props.LCL_active_reducer} />             
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

export default connect(mapStateToProps, matchDispatchToProps)(LCL_Active_Details);
