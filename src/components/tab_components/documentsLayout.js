import React, { Component } from "react";
import { TouchableHighlight, Text, View } from 'react-native';
import { ButtonIcon, Footer, FooterTab, Left, Right, Body, Button, Icon, Container } from "native-base";
import styles from '../../styles/styles';




export default class DocumentsLayout extends Component {

    render() {

        return (


            <View>

            <View style={styles.custom_row}>  
                <View style={styles.custom_label}>
                  <Text style={styles.custom_label_text}>DOCUMENTS Country</Text>  
                </View>
    
                <View style={styles.wrap}>
                  <Text style={styles.custom_text}> {this.props.shipment.first}</Text>
                </View>
            </View>
    
            <View style={styles.custom_row}>  
                <View style={styles.custom_label}>
                  <Text style={styles.custom_label_text}>Pickup From</Text>  
                </View>
    
                <View style={styles.wrap}>
                  <Text style={styles.custom_text}> {this.props.shipment.last} </Text>
                </View>
            </View>
    
            <View style={styles.custom_row}>  
                <View style={styles.custom_label}>
                  <Text style={styles.custom_label_text}>Place of Origin</Text>  
                </View>
    
                <View style={styles.wrap}>
                  <Text style={styles.custom_text}> {this.props.shipment.last}</Text>
                </View>
            </View>
    
          </View>

        );
    }
}

