// COMPONENTS > USERS > INDEX.JS
import React, { Component } from "react";
import { TouchableHighlight, Text, View } from 'react-native';
import { ButtonIcon, Footer, FooterTab, Left, Right, Body, Button, Icon, Container } from "native-base";
import styles from '../../styles/styles';


// THIS IS STATELESS COMPONENT. BE SURE TO PASS IN WITH BRACKETS LIKE THIS TO PARENT COMPONENTS { DetailsLayout }

export const DetailsLayout = (props) => {
  return (
    <View style={styles.custom_wrapper}>

    <View style={styles.custom_row}>  
        <View style={styles.custom_label}>
          <Text style={styles.custom_label_text}>Original Country</Text>  
        </View>

        <View style={styles.wrap}>
          <Text style={styles.custom_text}> {props.item.name}</Text>
        </View>
    </View>

    <View style={styles.custom_row}>  
        <View style={styles.custom_label}>
          <Text style={styles.custom_label_text}>Pickup From</Text>  
        </View>

        <View style={styles.wrap}>
          <Text style={styles.custom_text}> {props.item.name} </Text>
        </View>
    </View>

    <View style={styles.custom_row}>  
        <View style={styles.custom_label}>
          <Text style={styles.custom_label_text}>Place of Origin</Text>  
        </View>

        <View style={styles.wrap}>
          <Text style={styles.custom_text}> {props.item.name}</Text>
        </View>
    </View>
</View>
  )
}


// export default class DetailsLayout extends Component {
//     render() {
//         return (

//             <View style={styles.custom_wrapper}>

//                 <View style={styles.custom_row}>  
//                     <View style={styles.custom_label}>
//                       <Text style={styles.custom_label_text}>Original Country</Text>  
//                     </View>
        
//                     <View style={styles.wrap}>
//                       <Text style={styles.custom_text}> {this.props.item.name}</Text>
//                     </View>
//                 </View>
        
//                 <View style={styles.custom_row}>  
//                     <View style={styles.custom_label}>
//                       <Text style={styles.custom_label_text}>Pickup From</Text>  
//                     </View>
        
//                     <View style={styles.wrap}>
//                       <Text style={styles.custom_text}> {this.props.item.name} </Text>
//                     </View>
//                 </View>
        
//                 <View style={styles.custom_row}>  
//                     <View style={styles.custom_label}>
//                       <Text style={styles.custom_label_text}>Place of Origin</Text>  
//                     </View>
        
//                     <View style={styles.wrap}>
//                       <Text style={styles.custom_text}> {this.props.item.name}</Text>
//                     </View>
//                 </View>
//           </View>

//         );
//     }
// }





