import React, { Component } from "react";
import { Segment, Card, CardItem, Title, InputGroup, Form, Item, Label, Input, Subtitle, Container, Header, Content, Text,  ButtonIcon, Footer, FooterTab, Left,Right, Body, Button, Icon } from "native-base";
import { ImageBackground, View, StatusBar, TextInput, Platform } from "react-native";

import styles from "../../styles/styles";

import { LCLShipment_New } from '../../actions';
import { connect } from 'react-redux';
import LCLActiveList from '../../components/lcl_shipment_components/lcl_active_list';
import { bindActionCreators } from 'redux';

import Footer_Nav from "../../components/footer_nav";

  
class LCL_Active extends Component {

    componentDidMount() { 
        this.props.LCLShipment_New()
      }
 
  render() {
    const {goBack} = this.props.navigation;
    return (
        <Container>
              {/* <ImageBackground source={launchscreenBg} style={styles.imageContainer}>  */}
            <Header style={styles.MainContainer} hasTabs>
                 
                <Left>
                <Button transparent onPress={() => goBack()} >
                    <Icon name="ios-arrow-back" />
                </Button>
                </Left>  
                    <Body>
                        <Title style={styles.title_font}>LCL</Title>
                    </Body>
                <Right />
            </Header>
            
            <Content padder>
                
            <LCLActiveList LCL_active_reducer={this.props.LCL_active_reducer} LCLShipment_New={this.props.LCLShipment_New} navigation={this.props.navigation}/>
            </Content>
            
            <Footer_Nav FooterNav_reducer_data={this.props.FooterNav_reducer_data} navigation={this.props.navigation}/>
            </Container>
        );
    }
}
 
function mapStateToProps(state) {
    // Whatever is returned will show up as props inside of LCL_Active
    return {
        LCL_active_reducer: state.LCL_active_reducer,
        FooterNav_reducer_data: state.FooterNav_reducer_data
    };
}

//Anything returned from this function will end up as props on the LCL_Active container
function mapDispatchToProps(dispatch) {
    //Whenever LCLShipment_New is called, the result should be passed to all of our recuders
    return {
        LCLShipment_New: bindActionCreators(LCLShipment_New, dispatch)
    }
  }
 
// Promote LCL_Active from a component to a container - it needs to know about 
// this new dispatch method, LCLShipment_New. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(LCL_Active);
