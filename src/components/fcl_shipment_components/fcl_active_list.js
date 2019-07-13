// COMPONENTS > USERS > INDEX.JS
import React, { Component } from "react";
import { TouchableHighlight, Text, View } from 'react-native';
import { ButtonIcon, Footer, FooterTab, Left, Right, Body, Button, Icon, Container } from "native-base";
import styles from '../../styles/styles';
import { bindActionCreators } from 'redux';


export default class FCLActiveList extends Component {


    renderList() {
        const selectUserBinded = this.props.FCLActiveSelectShipment;
        const changePage = this.props.navigation;


        return this.props.FCL_active_reducer_data.map((shipment) => {
            return (
                  <Button key={shipment.id} style={styles.Carditem_Wrapper} onPress={()=>{  selectUserBinded(shipment); this.props.navigation.navigate("FCL_Active_Tabs")} }>
                    <View  style={{width: 280}}> 
                <Text style={styles.TextLight}><Text style={styles.TextDark}>Dest City:</Text> {shipment.first}</Text>
                <Text style={styles.TextLight}><Text style={styles.TextDark}>ETA:</Text>  {shipment.last}</Text>
                
                <View style={styles.FlexRow}>
                    <View>
                        <Text style={styles.TextDark}>Status: </Text>
                    </View>

                    <View>
                        <Button small primary>
                        <Text>Planning</Text>
                        </Button>
                    </View>
                </View>
                
                <View> 
                    <Text>  
                        <Icon style={{color: '#2ECC71'}}  name="md-chatbubbles"/> <Text>
                        <Icon style={{color: 'yellow'}}  name="md-clock"/>
                    </Text> 
                    </Text>
                </View>
        </View>
 
        <View  style={{justifyContent: 'center'}}>
            <Button  transparent>
                <Icon style={styles.TextLight} ios='ios-arrow-forward' android="md-arrow-forward" onPress={()=>{  selectUserBinded(shipment); this.props.navigation.navigate("FCL_Active_Tabs")} } /> 
            </Button>
        </View>
    </Button> 
            );
        });
    }

    render() {
        return (
            <View>
                {this.renderList()}
            </View>
        );
    }

}




