import React, { Component } from "react";
import { TouchableHighlight, Text, View } from 'react-native';
import { ButtonIcon, Footer, FooterTab, Left, Right, Body, Button, Icon, Container } from "native-base";
import styles from '../../styles/styles';




export default class Air_Active_List extends Component {
    constructor(props) {
        super(); 
          this.state = {
            homeLink: "Changed Link"  
  
          }
        
      }
  
        onChangeLink() {
          this.props.changeLink(this.state.homeLink);
        }
  
  
    renderList() {
        const selectUserBinded = this.props.selectShipment;
        
       
        const MyObject = [
            {
                id: 42423,
                first: "adam",
                last: "donatelli",
                
            }
        ]


        return this.props.Shipments.map((shipment) => {
            return (
                                // <Button key={shipment.id} style={styles.Carditem_Wrapper} onPress={()=>{  selectUserBinded(shipment)}}>

                <Button key={shipment.id} style={styles.Carditem_Wrapper} onPress={()=>{  selectUserBinded(shipment); this.props.navigation.navigate("Air_Active_Tabs")} }>

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
                <Icon onPress={()=>{  selectUserBinded(shipment); this.props.navigation.navigate("Air_Active_Selected_Shipment")} }  style={styles.TextLight} ios='ios-arrow-forward' android="md-arrow-forward"/> 
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
