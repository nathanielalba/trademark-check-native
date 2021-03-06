import React, { Component } from 'react';
import { View, Text, Navigator } from 'react-native';
import { Provider } from 'react-redux';

import configStore from './store/createStore';
// import Header from './components/Header';
import BusinessBody from './components/Body';
import About from './components/About';
import Trademark from './components/Trademark';

export default class BusinessDemo extends Component {
  render() {
    const routes = [
      { title: 'splashPage' },
      { title: 'trademark' },
      { title: 'about' },
    ];

    const sceneRender = (route, navigator) => {
      switch (route.title) {
        case 'splashPage':
          return (<BusinessBody navigator={navigator} />);
          // return (<Trademark navigator={navigator} />);
        case 'trademark':
          return (<Trademark navigator={navigator} />);
        case 'about':
          return (<About navigator={navigator} />);
        default:
          return (<View><Text>Nothing to see here...</Text></View>);
        }
    };

    return (
      <Provider store={configStore()}>
        <View style={{ flex: 1 }}>
          <Navigator
            initialRoute={routes[0]}
            initialRouteStack={routes}
            renderScene={sceneRender}
          />
        </View>
      </Provider>
    );
  }
}
