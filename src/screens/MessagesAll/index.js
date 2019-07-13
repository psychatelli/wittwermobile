import React, { Component } from "react";
import { Title, Container, Header, Content, Text,  ButtonIcon, Footer, FooterTab, Left,Right, Body, Button, Icon } from "native-base";

import styles from "./styles";
import Footer_Nav from "../../components/footer_nav";

class MessagesAll extends Component {
  render() {
    const {goBack} = this.props.navigation;
    return (
      <Container style={styles.container}>
        <Header style={styles.MainContainer}>
          <Left>
            <Button transparent onPress={() => goBack()} >
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>All Messages</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Text>Content goes here</Text>
      

        </Content>

        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>

      </Container>
    );
  }
}

export default MessagesAll;
