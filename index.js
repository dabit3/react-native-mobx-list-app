import React, { Component } from 'react';
import App from './app/App';
import ListStore from './app/mobx/listStore';

import { AppRegistry } from 'react-native';
import NavigationExperimental from 'react-native-deprecated-custom-components';
const Navigator = NavigationExperimental.Navigator;

class ReactNativeMobX extends Component {
  renderScene(route, navigator) {
    return <route.component {...route.passProps} navigator={navigator} />;
  }

  configureScene(route, routeStack) {
    if (route.type === 'Modal') {
      return Navigator.SceneConfigs.FloatFromBottom;
    }
    return Navigator.SceneConfigs.PushFromRight;
  }

  render() {
    return (
      <Navigator
        configureScene={this.configureScene.bind(this)}
        renderScene={this.renderScene.bind(this)}
        initialRoute={{
          component: App,
          passProps: {
            store: ListStore
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('ReactNativeMobX', () => ReactNativeMobX);
