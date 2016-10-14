import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Button from './Button';
import Input from './Input';

class BusinessBody extends Component {
  constructor(props) {
    super(props);

    this.buttonPress = this.buttonPress.bind(this);
  }

  buttonPress() {
    this.props.navigator.push({
      title: 'about'
    });
  }

  render() {
    const { setSearchText, fetchData, searchText, navigator } = this.props;

    return (
      <View style={styles.bodyStyles}>
        <Input setSearchText={setSearchText} />
        <Button fetchData={fetchData} searchText={searchText} navigator={navigator} />
        <TouchableOpacity onPress={this.buttonPress} style={styles.aboutStyles}>
          <Text style={styles.aboutTextStyles}>ABOUT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchText: state.searchText,
    searchResults: state.searchResults
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchText: (text) => {
      dispatch(actions.setSearchText(text));
    },
    fetchData: (text) => {
      dispatch(actions.fetchData(text));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(BusinessBody);

const styles = StyleSheet.create({
  bodyStyles: {
    flex: 1,
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1abc9c',
  },
  aboutTextStyles: {
    fontSize: 16,
    fontWeight: '200'
  }
});
