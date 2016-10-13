import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

class Input extends Component {
  constructor(props) {
    super(props);

    this.setText = this.setText.bind(this);
  }

  setText(text) {
    this.props.setSearchText(text);
  }

  render() {
    return (
      <View style={styles.viewStyles}>
        <TextInput
          style={styles.inputStyles}
          onChangeText={this.setText}
          placeholder='Search for Trademarks!'
          placeholderTextColor='#34495e'
          color='#8e44ad'
          autoCorrect={false}
        />
      </View>
    );
  }
}

export default Input;

const styles = StyleSheet.create({
  viewStyles: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginBottom: 15
  },
  inputStyles: {
    textAlign: 'center',
    alignSelf: 'center',
    height: 40,
    width: 300
  }
});
