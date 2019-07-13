import React, { Component } from "react";
import { Title, Container, Header, Content, Text,  ButtonIcon, Footer, FooterTab, Left,Right, Body, Button, Icon } from "native-base";

import styles from "./styles";

class Documents extends Component {
  render() {
    //const {goBack} = this.props.navigation;

    return (
      <Container style={styles.container}>
        

        <Content padder>
          <Text>Documents Content goes here</Text>
        </Content>

        
      </Container>
    );
  }
}

export default Documents;
