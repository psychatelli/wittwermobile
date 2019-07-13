import React, { Component } from "react";
import { Title, Container, Header, Content, Text,  ButtonIcon, Footer, FooterTab, Left,Right, Body, Button, Icon } from "native-base";

import styles from "./styles";

class Customs extends Component {
  render() {
    //const {goBack} = this.props.navigation;
    return (
      <Container style={styles.container}>
        

        <Content padder>
          <Text>Customs Content goes here</Text>


          
        </Content>

        
      </Container>
    );
  }
}

export default Customs;
