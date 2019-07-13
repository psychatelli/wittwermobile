// COMPONENTS > USERS > INDEX.JS
import React, { Component } from "react";
import { TouchableHighlight, Text, View } from 'react-native';
import { ButtonIcon, Footer, FooterTab, Left, Right, Body, Button, Icon, Container } from "native-base";
import styles from '../../styles/styles';
export default class LCLActiveList extends Component {


   

    renderList() {
        const selectUserBinded = this.props.LCLShipment_New;

        return this.props.LCL_active_reducer.map((user) => {
            return (
            <Button key={user.id} style={styles.Carditem_Wrapper} onPress={()=>{  selectUserBinded(user); this.props.navigation.navigate("LCL_Active_Tabs")} }>
        <View style={{width: 280}}> 
                <Text style={styles.TextLight}><Text style={styles.TextDark}>Dest City:</Text> {user.name}</Text>
                <Text style={styles.TextLight}><Text style={styles.TextDark}>ETA:</Text>  {user.username}</Text>
                 
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
            <Icon onPress={()=>{  selectUserBinded(user); this.props.navigation.navigate("LCL_Active_Tabs")} }  style={styles.TextLight} ios='ios-arrow-forward'  android="md-arrow-forward"/> 
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




