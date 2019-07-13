// COMPONENTS > USERS > INDEX.JS
import React, { Component } from "react";
import { TouchableHighlight, Text, View } from 'react-native';
import { ButtonIcon, Footer, FooterTab, Left, Right, Body, Button, Icon, Container } from "native-base";
import styles from '../../styles/styles';

export default class Air_Rendered_Data extends Component {

    render() {

        return (

        <View>
            <Text style={{fontSize: 20, margin: 10}}>First Name: {this.props.shipment.first} </Text>
            <Text style={{fontSize: 15, margin: 10}}>Last: {this.props.shipment.last} </Text>
        </View>
        );
    }
}

