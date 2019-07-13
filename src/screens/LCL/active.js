import React, { Component, PropTypes } from "react";
import { Segment, Card, CardItem, Title, InputGroup, Form, Item, Label, Input, Subtitle, Container, Header, Content, Text,  ButtonIcon, Footer, FooterTab, Left,Right, Body, Button, Icon } from "native-base";
import { ImageBackground, View, StatusBar, TextInput, Platform } from "react-native";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from "../../styles/styles";
import DetailsLayout from "../../components/tab_components/detailsLayout";
import { Header_A } from '../../components/HeaderShipment';
import  MyButton  from '../../components/Button';



//import { LCLShipment_New } from '../../actions';
import { itemsFetchData, LCL_ActiveSelectedShipment } from '../../actions';
 
import LCLActiveList from '../../components/lcl_shipment_components/lcl_active_list';

import Footer_Nav from "../../components/footer_nav";

  
class LCL_Active extends Component {
    constructor() {
        super()
        this.state = {
            homeLink: "Home Boy",
        }
    }

    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName,
        });
    }
    
    componentDidMount() {
        this.props.fetchData('https://jsonplaceholder.typicode.com/users');
    }
    
   

  render() {

    if (this.props.hasErrored) { return <Text>Sorry! There was an error loading the items</Text>; }
    if (this.props.isLoading) { return <Text>Loading…</Text>; }

    const {goBack} = this.props.navigation;
    const selectUserBinded = this.props.LCL_ActiveSelectedShipment;
    const MyItem = this.props.item;
    return (
        <Container> 
              {/* <ImageBackground source={launchscreenBg} style={styles.imageContainer}>  */}
                <Header style={styles.MainContainer} hasTabs>                    
                    <Left>
                    <Button transparent onPress={() => goBack()} >
                        <Icon name="ios-arrow-back" />
                    </Button>
                    </Left>  
                        <Body>
                            <Title style={styles.title_font}>LCL</Title>
                        </Body>
                    <Right />
                </Header>
            
                <Content padder>

                <Header_A homeLink={ this.state.homeLink} />
                <MyButton changeLink={ this.onChangeLinkName.bind(this) } />

                <LCLActiveList  items={this.props.items} LCL_ActiveSelectedShipment={this.props.LCL_ActiveSelectedShipment} navigation={this.props.navigation}/>
                </Content>
  
                <Footer_Nav FooterNav_reducer_data={this.props.FooterNav_reducer_data} navigation={this.props.navigation}/>
            </Container>
        );
    }
}
 
function mapStateToProps(state) {
    return {
        LCL_ActiveSelectedShipment: state.LCL_ActiveSelectedShipment,
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading,
        FooterNav_reducer_data: state.FooterNav_reducer_data,
      };
    }



function matchDispatchToProps(dispatch) {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url)),
        LCL_ActiveSelectedShipment: (item) =>  dispatch(LCL_ActiveSelectedShipment(item))
        // LCL_ActiveSelectedShipment: bindActionCreators(LCL_ActiveSelectedShipment, dispatch)

    }
  }


export default connect(mapStateToProps, matchDispatchToProps)(LCL_Active);

