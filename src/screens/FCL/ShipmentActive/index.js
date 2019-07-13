import React, { Component } from "react";
import { Title, ScrollableTab, Container, TabHeading, Tabs, Tab, Header, Content, Text,  ButtonIcon, Footer, FooterTab, Left,Right, Body, Button, Icon } from "native-base";
import FCL_Active_Details from "./details";
import FCL_Active_Tracking from "./tracking";
import FCL_Active_Cargo from "./cargo";
import FCL_Active_Customs from "./customs";
import FCL_Active_Documents from "./documents";
import FCL_Active_Messages from "./messages";
import FCL_Active_Routes from "./routes";
import styles from "../../../styles/styles";

import { connect } from 'react-redux';

class FCL_Active_Tabs extends Component {
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
              <Title style={styles.title_font}>FCL Active Shipments</Title>
            </Body>
            <Right />
        </Header>

        <Tabs renderTabBar={()=> <ScrollableTab />}> 
            <Tab heading={ <TabHeading><Text>Details</Text></TabHeading>}>
              <FCL_Active_Details  navigation={this.props.navigation}/>
            </Tab>

            <Tab heading={ <TabHeading><Text>Tracking</Text></TabHeading>}>
              <FCL_Active_Tracking navigation={this.props.navigation}/>
            </Tab>

            <Tab heading={ <TabHeading><Text>Cargo</Text></TabHeading>}>
              <FCL_Active_Cargo navigation={this.props.navigation}/>
            </Tab>

            <Tab heading={ <TabHeading><Text>Customs</Text></TabHeading>}>
              <FCL_Active_Customs navigation={this.props.navigation}/>
            </Tab>

            <Tab heading={ <TabHeading><Text>Documents</Text></TabHeading>}>
              <FCL_Active_Documents navigation={this.props.navigation}/>
            </Tab>

            <Tab heading={ <TabHeading><Text>Messages</Text></TabHeading>}>
              <FCL_Active_Messages navigation={this.props.navigation}/>
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

export default FCL_Active_Tabs;
