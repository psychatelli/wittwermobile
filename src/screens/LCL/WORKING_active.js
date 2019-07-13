import React, { Component, PropTypes } from "react";
import { Segment, Card, CardItem, Title, InputGroup, Form, Item, Label, Input, Subtitle, Container, Header, Content, Text,  ButtonIcon, Footer, FooterTab, Left,Right, Body, Button, Icon } from "native-base";
import { ImageBackground, View, StatusBar, TextInput, Platform } from "react-native";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from "../../styles/styles";

import DetailsLayout from "../../components/tab_components/detailsLayout";


//import { LCLShipment_New } from '../../actions';
import { itemsFetchData, LCL_ActiveSelectedShipment } from '../../actions';
 
import LCLActiveList from '../../components/lcl_shipment_components/lcl_active_list';

import Footer_Nav from "../../components/footer_nav";

  
class LCL_Active extends Component {

    componentDidMount() {
        this.props.fetchData('https://jsonplaceholder.typicode.com/users');
    }

  render() {
    const {goBack} = this.props.navigation;
    const selectUserBinded = this.props.LCL_ActiveSelectedShipment;
    const MyItem =  this.state.names;

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
                    {this.props.items.map((item) => (
                        <Button key={item.id} style={styles.Carditem_Wrapper} onPress={()=>{  selectUserBinded(item); this.props.navigation.navigate("LCL_Active_Tabs")} } >
                        <Text key={item.id}> 
                            {item.name}
                        </Text>
                        </Button>
                    ))}
                </Content>
                <Text> {MyItem.name}</Text>

                <Footer_Nav FooterNav_reducer_data={this.props.FooterNav_reducer_data} navigation={this.props.navigation}/>

            </Container>
        );
    }
}
 
function mapStateToProps(state, ownProps) {
    return {
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

    }
  }


export default connect(mapStateToProps, matchDispatchToProps)(LCL_Active);

