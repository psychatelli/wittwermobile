import React, { Component } from "react";
//import { connect } from 'react-redux';
import {  Text, View } from 'react-native';
//import { selectUser } from '../../actions';
//import { bindActionCreators } from 'redux';



export default class UserDetails extends Component {

    render() {

        return (

        <View>
            <Text style={{fontSize: 20, margin: 10}}>First: {this.props.shipment.first} </Text>
            <Text style={{fontSize: 15, margin: 10}}>Last: {this.props.shipment.last} </Text>
        </View>
        );
    }
}


