import React, { Component } from "react";
import { Title, Subtitle, Container, Header, Content, Text,  ButtonIcon, Footer, FooterTab, Left,Right, Body, Button, Icon } from "native-base";

import styles from "./styles";

class Tracking extends Component {
  render() {
    //const {goBack} = this.props.navigation;

    return (
      <Container style={styles.container}>
        

        <Content padder>
          <Text>Tracking Content goes here</Text>
        </Content>

        
      </Container>
    );
  }
}

export default Tracking;
