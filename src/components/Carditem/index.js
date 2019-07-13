


import React, { Component } from "react";
import { Segment, Icon, Button, Text, CardItem, Left, Right, Body, Title, Badge} from "native-base";
import { ImageBackground, View, StatusBar, TextInput, Platform } from "react-native";
//import styles from "./styles";
import styles from "../../styles/styles"; 



class My_Carditem extends Component {
   
 
state = {
  term: '',
  term2: ''
};

  render() {
    return ( 
        
<View style={styles.Carditem_Wrapper}>
        <View style={{width: 280}}>
                <Text style={styles.TextLight}><Text style={styles.TextDark}>Dest City:</Text> PLEASANT PRAIRIE WI US</Text>
                <Text style={styles.TextLight}><Text style={styles.TextDark}>ETA:</Text>  Dec 29, 2017</Text>
                
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



        // <CardItem style={{height: 140, marginBottom: 5,borderBottomWidth: 1, borderBottomColor: '#eaebed'}}>
                  
  
        //           <Body>
        //             <Text><Text style={{flexWrap: 'wrap', fontWeight: 'bold'}}>Dest City:</Text> PLEASANT PRAIRIE WI US</Text>
        //             <Text><Text style={{flexWrap: 'wrap', fontWeight: 'bold'}}>ETA:</Text>  Dec 29, 2017</Text>
        //             <Button small primary>
        //               <Text>Planning</Text>
        //             </Button>
        //             <View style={{flex: 1, flexDirection: 'row'}}>
        //                 <Badge warning>
        //                     <Text>!</Text>
        //                 </Badge>
        //                 <Text> <Icon style={{color: '#4169E1'}}  name="md-chatbubbles"/> </Text>
        //             </View>
        //           </Body>

        //           <Right>
        //             <Icon name="arrow-forward" />
        //           </Right>
        // </CardItem>


        );
    }
}

export default My_Carditem;

