import React, { Component } from "react";
import { Segment, Tabs, Tab, TabHeading, ScrollableTab, Card, CardItem, Title, InputGroup, Form, Item, Label, Input, Subtitle, Container, Header, Content, Text,  ButtonIcon, Footer, FooterTab, Left,Right, Body, Button, Icon } from "native-base";
import Air_Complete_Details from "./details";
import Air_Complete_Tracking from "./tracking";
import Air_Complete_Cargo from "./cargo";
import Air_Complete_Customs from "./customs";
import Air_Complete_Documents from "./documents";
import Air_Complete_Messages from "./messages";
import Air_Complete_Routes from "./routes";
import styles from "../../../styles/styles";

import { connect } from 'react-redux';

class Air_Complete_Tabs extends Component {
  render() {
    const {goBack} = this.props.navigation;

    return (
      <Container>
        <Header style={styles.MainContainer} hasTabs>
            <Left> 
              <Button transparent onPress={() => goBack()} >
                <Icon name="ios-arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title style={styles.title_font}>Air Completed</Title>
            </Body>
            <Right />
        </Header>

        <Tabs renderTabBar={()=> <ScrollableTab />}> 
            <Tab heading={ <TabHeading><Text>Details</Text></TabHeading>}>
              <Air_Complete_Details AirItemC={this.props.Air_complete_reducer} navigation={this.props.navigation}/>
            </Tab>

            <Tab heading={ <TabHeading><Text>Tracking</Text></TabHeading>}>
              <Air_Complete_Tracking navigation={this.props.navigation}/>
            </Tab>

            <Tab heading={ <TabHeading><Text>Cargo</Text></TabHeading>}>
              <Air_Complete_Cargo AirItemC={this.props.Air_complete_reducer} navigation={this.props.navigation}/>
            </Tab>

            <Tab heading={ <TabHeading><Text>Customs</Text></TabHeading>}>
              <Air_Complete_Customs  navigation={this.props.navigation}/>
            </Tab>

            <Tab heading={ <TabHeading><Text>Documents</Text></TabHeading>}>
              <Air_Complete_Documents  navigation={this.props.navigation}/>
            </Tab>

            <Tab heading={ <TabHeading><Text>Messages</Text></TabHeading>}>
              <Air_Complete_Messages navigation={this.props.navigation}/>
            </Tab>
        </Tabs> 

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

export default Air_Complete_Tabs;
