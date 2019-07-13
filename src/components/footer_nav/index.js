import React, { Component } from "react";
import { Segment, Card, CardItem, Title, InputGroup, Form, Item, Label, Input, Subtitle, Container, Header, Content, Text,  ButtonIcon, Footer, FooterTab, Left,Right, Body, Button, Icon } from "native-base";
import { ImageBackground, View, StatusBar, TextInput, Platform } from "react-native";
import styles from "../../styles/styles"; 
import { bindActionCreators } from 'redux';

export default class Footer_Nav extends Component {

    renderList() {
      


        return this.props.FooterNav_reducer_data.map((item) => {
            const { navigate } = this.props.navigation;

            return (
                // <Button key={item.id}  onPress={() => this.props.navigation.navigate("LCL_Active_Tabs")}> 
                <Button key={item.id}  onPress={() => navigate(item.link)}> 
                <Icon style={styles.Nav_items} active name={item.icon}/>
                <Text style={styles.Nav_items}>{item.title}</Text>
                </Button> 
               
         );
        });
    }

    render() {
        return (
            <Footer style={styles.MainContainer}> 
            <FooterTab> 
                {this.renderList()}
            </FooterTab>
            </Footer>  
        );
    }

}