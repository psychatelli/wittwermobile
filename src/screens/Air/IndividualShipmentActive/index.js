import React, { Component } from "react";
import { Title, ScrollableTab, Container, TabHeading, Tabs, Tab, Header, Content, Text,  ButtonIcon, Footer, FooterTab, Left,Right, Body, Button, Icon } from "native-base";
import Air_Active_Details from "./details";
import Air_Active_Tracking from "./tracking";
import Air_Active_Cargo from "./cargo";
import Air_Active_Customs from "./customs";
import Air_Active_Documents from "./documents";
import Air_Active_Messages from "./messages";
import Air_Active_Routes from "./routes";
import styles from "../../../styles/styles";

import { connect } from 'react-redux';

class Air_Active_Tabs extends Component {
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
              <Title style={styles.title_font}>Air Active Shipments</Title>
            </Body>
            <Right />
        </Header>
 
        <Tabs renderTabBar={()=> <ScrollableTab />}> 
            <Tab heading={ <TabHeading><Text>Details</Text></TabHeading>}>
              <Air_Active_Details shipment={this.props.Air_Active_Shipment_Reducer} navigation={this.props.navigation}/>
            </Tab>

            <Tab heading={ <TabHeading><Text>Tracking</Text></TabHeading>}>
              <Air_Active_Tracking navigation={this.props.navigation}/>
            </Tab>

            <Tab heading={ <TabHeading><Text>Cargo</Text></TabHeading>}>
              <Air_Active_Cargo shipment={this.props.Air_Active_Shipment_Reducer} navigation={this.props.navigation}/>
            </Tab>

            <Tab heading={ <TabHeading><Text>Customs</Text></TabHeading>}>
              <Air_Active_Customs navigation={this.props.navigation}/>
            </Tab>

            <Tab heading={ <TabHeading><Text>Documents</Text></TabHeading>}>
              <Air_Active_Documents navigation={this.props.navigation}/>
            </Tab>

            <Tab heading={ <TabHeading><Text>Messages</Text></TabHeading>}>
              <Air_Active_Messages navigation={this.props.navigation}/>
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

export default Air_Active_Tabs;
