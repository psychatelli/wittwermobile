import React from "react";
import { AppRegistry, View, StatusBar } from "react-native";
import { Container, Body, Content, Header, Left, Right, Icon, Title, Input, Item, Label, Button, Text } from "native-base";


export default class SagaComponent extends React.Component {
  
  renderList() {
    
    const selectUserBinded = this.props.selectShipment;
    const  ConnectData  = this.props.data; 

    return ConnectData.map((data) => {
      console.log('component grab');

      return (
      <View  style={{width: 280}}> 
        <Text style={styles.TextLight}><Text style={styles.TextDark}>Dest City:</Text> {data.name}</Text>
        <Text style={styles.TextLight}><Text style={styles.TextDark}>ETA:</Text> {data.email}</Text>
      </View>

      );
   });
}
render() {
  
  return   (
      <View>
          <Label>Username</Label>          
            {this.renderList()}  
            
      </View>

    );
  }
}
