import React, { Component } from "react";
import { TouchableHighlight, Text, View } from 'react-native';
import { ButtonIcon, Footer, FooterTab, Left, Right, Body, Button, Icon } from "native-base";

import styles from '../../styles/styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectKeyIndex } from '../../actions';

class UserList extends Component {

    createListItems() {
        return this.props.users.map((user) => {
            return (


                <View key={user.id} style={styles.Carditem_Wrapper}>
        <View style={{width: 280}}>
                <Text style={styles.TextLight}><Text style={styles.TextDark}>Dest City:</Text> {user.first}</Text>
                <Text style={styles.TextLight}><Text style={styles.TextDark}>ETA:</Text>  {user.last}</Text>
                
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
            <Button onPress={() => this.props.navigation.navigate("Shipment")} transparent>
                <Icon  style={styles.TextLight} name='arrow-forward' android="md-arrow-forward"/> 
            </Button>
        </View>
     
</View> 
                 
            );
        });
    }


    render() {
             
        return ( 

        <View>
            
            {this.createListItems()}

        </View>

        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

export default connect(mapStateToProps)(UserList);