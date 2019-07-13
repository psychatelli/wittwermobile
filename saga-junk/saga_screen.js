import React, { Component } from "react";
import { Container, Text,  Button } from "native-base";
import {  View, StatusBar } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { requestApiData } from "../actions";

import SagaComponent from '../components/saga_component';
import styles from "../styles/styles";

class SagaScreen extends React.Component { 
  componentDidMount() {
    this.props.requestApiData();
  }

  render() {
    return (
        <Container style={styles.container}>        
          <View style={{marginTop: 50 }}>
            <SagaComponent data={this.props.data}/>  
          </View> 

          <Button block style={styles.Home_btns}  
          onPress={() => this.props.navigation.navigate("Home")}> 
            <Text>Home</Text> 
          </Button> 
        </Container>
        );
      }
    }

     function mapStateToProps(state) {
      return {
        data: state.data,
        };
      }
  
  // const mapDispatchToProps = dispatch =>
  // bindActionCreators({ requestApiData }, dispatch);

      function matchDispatchToProps(dispatch) {
        return {
          requestApiData(data) {
                debugger;
                dispatch(requestApiData(data))
            }
        }
      }

export default connect(mapStateToProps, matchDispatchToProps)(SagaScreen);