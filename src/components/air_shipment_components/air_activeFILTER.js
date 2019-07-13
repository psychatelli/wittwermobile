import React, { Component } from "react";
import { TouchableHighlight, Text, View, TextInput } from 'react-native';
import { ButtonIcon, Footer, FooterTab, Left, Right, Body, Button, Icon, Container, Input, Label } from "native-base";
import styles from '../../styles/styles';
import { bindActionCreators } from 'redux';

import SearchInput, {createFilter} from 'react-search-input'

const KEYS_TO_FILTERS = ['shipment.first', 'shipment.last']

export default class Air_Active_List extends Component {
    
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         searchTerm: '',
    //         currentlyDisplayed: this.props.shipment,
    //     };
    //     this.onInputChange = this.onInputChange.bind(this);
    // }

    constructor (props) {
        super(props)
        this.state = {
          searchTerm: ''
        }
        this.searchUpdated = this.searchUpdated.bind(this)
      }

    // onInputChange(event) {

    //     let newlyDisplayed = _.filter(this.props.Shipments, shipment => shipment.includes(event.target.value.toLowerCase()));

    //     this.setState({
    //         searchTerm: event.target.value,
    //         currentlyDisplayed: newlyDisplayed
    //     });
    // }
    
    renderList() {
        const selectUserBinded = this.props.selectShipment;

        const filteredEmails = Shipments.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

 
        return this.state.filteredEmails.map((shipment) => {
            return (

                //  <Button key={shipment.id} style={styles.Carditem_Wrapper} onPress={()=>{  selectUserBinded(shipment)}}>
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
 
        <View  style={{width: 20, marginRight:15, justifyContent: 'center'}}>
            <Button onPress={()=>{  selectUserBinded(shipment); this.props.navigation.navigate("Air_Active_Selected_Shipment")} } transparent>
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
                <Label>Username</Label>
                <Input style={styles.custom_label}
                onChange={this.onInputChange.bind(this)}
                value={this.state.searchTerm}
                />

                {this.renderList()}
            </View>
        );
    }

}




