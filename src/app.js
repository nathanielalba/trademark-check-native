import React, { Component } from 'react';
import { View } from 'react-native';

import Header from './components/Header';

export default class BusinessDemo extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header>BusinessApp</Header>
      </View>
    );
  }
}
