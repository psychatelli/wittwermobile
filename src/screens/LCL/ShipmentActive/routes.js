import React, { Component } from "react";
import { Title, Subtitle, Container, Header, Content, Text,  ButtonIcon, Footer, FooterTab, Left,Right, Body, Button, Icon } from "native-base";

import styles from "../../../styles/styles";

class LCL_Active_Routes extends Component {
  render() {
    //const {goBack} = this.props.navigation;

    return (
      <Container style={styles.container_white}>
        
        <Content padder>
          <Text>Routing Content goes here</Text>
        </Content>

        
      </Container>
    );
  }
}

export default LCL_Active_Routes;
