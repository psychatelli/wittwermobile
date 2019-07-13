import React, { Component } from "react";
import { StyleProvider, Text } from "native-base";

import App from "../App";
import getTheme from "../theme/components";
import variables from "../theme/variables/commonColor";

export default class Setup extends Component {
  render() {

  //   async componentWillMount() {
  //     await Expo.Font.loadAsync({
  //       'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
  //     });
  //  this.setState({ isReady: true });
  //   }

    return (
      <StyleProvider style={getTheme(variables)}>
        <App/>
      </StyleProvider>
    );
  }
}
