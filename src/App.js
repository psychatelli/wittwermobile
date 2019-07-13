import React from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";

import  Home  from './screens/Home';
import  Home_Completed  from './screens/Home/completed';

import  StatusKey  from './screens/StatusKey';
import  MessagesAll  from './screens/MessagesAll';

import  Shipment  from './screens/Shipment';
import  Cargo  from './screens/Shipment/cargo';
import  Customs  from './screens/Shipment/customs';
import  Details  from './screens/Shipment/details';
import  Documents  from './screens/Shipment/documents';
import  Messages  from './screens/Shipment/messages';
import  Tracking  from './screens/Shipment/tracking';
 
//Shipment Lists Per Shipming type
import  Air_Active  from './screens/Air/active';
import  LCL_Active  from './screens/LCL/active';
import  FCL  from './screens/FCL';
import  Dom  from './screens/Dom';
import  Other  from './screens/Other';
    
 
import Air_Active_Tabs from './screens/Air/IndividualShipmentActive';
import LCL_Active_Tabs from './screens/LCL/ShipmentActive';
import FCL_Active_Tabs from './screens/FCL/ShipmentActive';
import Air_Complete_Tabs from './screens/Air/ShipmentComplete';

import  Air_Completed  from './screens/Air/completed';
import  LCL_Completed  from './screens/LCL/completed';
import  FCL_Completed  from './screens/FCL/completed';
import  Dom_Completed  from './screens/Dom/completed';
import  Other_Completed  from './screens/Other/completed';


import SideBar from "./screens/sidebar";
  
import { connect } from 'react-redux';
 
const Drawer = DrawerNavigator({
    
      StatusKey: { screen: StatusKey, },
      MessagesAll: { screen: MessagesAll, },
      Home: { screen: Home, }, 
  }, {
  headerMode: 'screen',
  initialRouteName: "Home",
  drawerPosition: 'left',
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  },
);
 
  const AppNavigator = StackNavigator(
    {
        DrawerScreen : {screen: Drawer},
        
        Air_Completed: { screen: Air_Completed  },
        LCL_Completed: { screen: LCL_Completed },
        FCL_Completed: { screen: FCL_Completed  },
        Dom_Completed: { screen: Dom_Completed  },
        Other_Completed: { screen: Other_Completed },

        Home: { screen: Home },
        Home_Completed: { screen: Home_Completed },
        Air_Active: { screen: Air_Active },
        FCL: { screen: FCL },
        LCL_Active: { screen: LCL_Active },
        Dom: { screen: Dom },
        Other: { screen: Other },

        Shipment: {screen: Shipment},
        Cargo: {screen: Cargo },
        Customs: {screen: Customs },
        Details: {screen: Details },
        Documents: {screen: Documents },
        Messages: {screen: Messages },
        Tracking: {screen: Tracking },

        Air_Active_Tabs: { screen: Air_Active_Tabs },
        LCL_Active_Tabs: {screen: LCL_Active_Tabs},
        FCL_Active_Tabs: {screen: FCL_Active_Tabs},
        Air_Complete_Tabs: { screen: Air_Complete_Tabs },
    },
    {
        initialRouteName: "DrawerScreen",
        headerMode: "none"
    },
    
  );
 
 export default (AppNavigator);


