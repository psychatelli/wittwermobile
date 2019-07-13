import React, { Component } from "react";
import { Title, View, Container, Header, Content, Text, Tabs, Tab, TabHeading, ButtonIcon, Footer, FooterTab, Left,Right, Body, Button, Icon } from "native-base";
import styles from "../../styles/styles";

class Details extends Component {
  render() {
    // const {goBack} = this.props.navigation;
    return (
      <Container>
        
      

        <Content padder>

      <Text style={styles.header_2}>ROUTING</Text>

      <View style={styles.custom_wrapper}>

        <View style={styles.custom_row}>  
            <View style={styles.custom_label}>
              <Text style={styles.custom_label_text}>Original Country</Text>  
            </View>

            <View style={styles.wrap}>
              <Text style={styles.custom_text}>China</Text>
            </View>
        </View>

        <View style={styles.custom_row}>  
            <View style={styles.custom_label}>
              <Text style={styles.custom_label_text}>Pickup From</Text>  
            </View>

            <View style={styles.wrap}>
              <Text style={styles.custom_text}>Zhongshan Filterpro Environmental </Text>
            </View>
        </View>

        <View style={styles.custom_row}>  
            <View style={styles.custom_label}>
              <Text style={styles.custom_label_text}>Place of Origin</Text>  
            </View>

            <View style={styles.wrap}>
              <Text style={styles.custom_text}>Zhongshan, China </Text>
            </View>
        </View>

      </View>
      
        <Button onPress={() => this.props.navigation.navigate("Home")} first active>
              <Text>Home</Text> 
            </Button>
        </Content>

      </Container>
    );
  }
}

export default Details;
