import React, { Component } from "react";
import { TouchableHighlight, Text, View } from 'react-native';
import { ButtonIcon, Footer, FooterTab, Left, Right, Body, Button, Icon, Container } from "native-base";
import styles from '../../styles/styles';
import { bindActionCreators } from 'redux';


export default class Air_Complete_List extends Component {
    
    renderList() {
        const selectUserBinded2 = this.props.AirCompleteSelectShipment;
         
        return this.props.Air_complete_reducer_data.map((AirItemC) => {
            return (

               // <Button key={shipment.id} style={styles.Carditem_Wrapper} onPress={()=>{  selectUserBinded2(shipment)}}> 
                 <Button key={AirItemC.id} style={styles.Carditem_Wrapper} onPress={()=>{  selectUserBinded2(AirItemC); this.props.navigation.navigate("Air_Complete_Tabs")} }>

                    <View  style={{width: 280}}> 
                 <Text style={styles.TextLight}><Text style={styles.TextDark}>Dest City:</Text> {AirItemC.first}</Text>
                 <Text style={styles.TextLight}><Text style={styles.TextDark}>ETA:</Text>  {AirItemC.last}</Text>
                
                <View style={styles.FlexRow}>
                    <View>
                        <Text style={styles.TextDark}>Status: </Text>
                    </View>

                    <View>
                        <Button onPress={() => this.props.navigation.navigate("Shipment")} small primary>
                        <Text>Planning</Text>
                        </Button>
                    </View>
                </View>
                
                <View> 
                    <Text>  <Icon style={{color: '#2ECC71'}}  name="md-chatbubbles"/> <Text>
                            <Icon style={{color: 'yellow'}}  name="md-clock"/>
                        </Text> 
                    </Text>
                </View>
        </View>
 
        <View  style={{width: 20, marginRight:15, justifyContent: 'center'}}>
            <Button onPress={function(){return selectUserBinded(AirItemC);}} transparent>
                <Icon  style={styles.TextLight} name='arrow-forward' android="md-arrow-forward"/> 
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




