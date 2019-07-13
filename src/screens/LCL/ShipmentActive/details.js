import React, { Component } from "react";
import { Title, View, Container, Header, Content, Text, Tabs, Tab, TabHeading, ButtonIcon, Footer, FooterTab, Left,Right, Body, Button, Icon } from "native-base";
import styles from "../../../styles/styles";
import { connect } from 'react-redux';
import { DetailsLayout } from "../../../components/tab_components/detailsLayout";
import { LCL_ActiveSelectedShipment } from '../../../actions';
import { bindActionCreators } from 'redux';


    class LCL_Active_Details extends Component {
    
      componentWillReceiveProps() {
        return (
          this.props.LCL_ActiveSelectedShipment()
        )}

      render() {
        // const {goBack} = this.props.navigation;
        console.log('this.props', this.props.items[0].name)
        return (
          <Container>
            <Content padder>
              <Text style={styles.header_2}>ROUTING</Text>
                <DetailsLayout item={this.props.items} /> 
                <Text> {this.props.items.name}</Text>
                {console.log('THIS IS THE PERSON', this.props.items.name)}
            </Content>
          </Container>
        );
      }
    }

    function mapStateToProps(state) {
      return {
        //selectedItem: state.selectedItem,
        items: state.items
        };
      }
      
    function matchDispatchToProps(dispatch) {
      return {
        LCL_ActiveSelectedShipment: bindActionCreators(LCL_ActiveSelectedShipment, dispatch),
        }
      }

    export default connect(mapStateToProps, matchDispatchToProps)(LCL_Active_Details);

