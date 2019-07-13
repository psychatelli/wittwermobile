import React, { Component } from "react";
import { Title, ScrollableTab, Container, TabHeading, Tabs, Tab, Header, Content, Text,  ButtonIcon, Footer, FooterTab, Left,Right, Body, Button, Icon } from "native-base";
import LCL_Active_Details from "./details";
import LCL_Active_Tracking from "./tracking";
import LCL_Active_Cargo from "./cargo";
import LCL_Active_Customs from "./customs";
import LCL_Active_Documents from "./documents";
import LCL_Active_Messages from "./messages";
import LCL_Active_Routes from "./routes";
import styles from "../../../styles/styles";

import { connect } from 'react-redux';

class LCL_Active_Tabs extends Component {
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
              <Title style={styles.title_font}>LCL Active Shipments</Title>
            </Body>
            <Right />
        </Header>

        <Tabs renderTabBar={()=> <ScrollableTab />}> 
            <Tab heading={ <TabHeading><Text>Details</Text></TabHeading>}>
              <LCL_Active_Details  navigation={this.props.navigation}/>
            </Tab>

            <Tab heading={ <TabHeading><Text>Tracking</Text></TabHeading>}>
              <LCL_Active_Tracking navigation={this.props.navigation}/>
            </Tab>

            <Tab heading={ <TabHeading><Text>Cargo</Text></TabHeading>}>
              <LCL_Active_Cargo navigation={this.props.navigation}/>
            </Tab>

            <Tab heading={ <TabHeading><Text>Customs</Text></TabHeading>}>
              <LCL_Active_Customs navigation={this.props.navigation}/>
            </Tab>

            <Tab heading={ <TabHeading><Text>Documents</Text></TabHeading>}>
              <LCL_Active_Documents navigation={this.props.navigation}/>
            </Tab>

            <Tab heading={ <TabHeading><Text>Messages</Text></TabHeading>}>
              <LCL_Active_Messages navigation={this.props.navigation}/>
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

export default LCL_Active_Tabs;
