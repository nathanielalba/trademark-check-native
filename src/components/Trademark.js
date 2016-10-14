import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import TrademarkDescription from './TrademarkDescription';

class Trademark extends Component {

  constructor(props) {
    super(props);

    this.renderTrademark = this.renderTrademark.bind(this);
  }

  renderTrademark() {
    const { searchResults } = this.props;
    console.log(searchResults);

    if (searchResults.data.length === 9) {
      return (
        <View>
          <Text>Nothing was found!!</Text>
          <Text>It's all yours</Text>
        </View>
      );
    } else if (searchResults.isLoading) {
      return (
        <ActivityIndicator
          animating={searchResults.isLoading}
          style={[styles.centeringStyles, { height: 100 }]}
          size="large"
          color='#9b59b6'
        />
      );
    }
    return (
    <View>
      <Text>Sorry</Text>
      <Text>Something was found..</Text>
      <TrademarkDescription trademark={searchResults.data} />
      <TouchableOpacity
        onPress={() => this.props.navigator.push({ title: 'splashPage' })}
        style={styles.buttonStyles}
      >
        <Text style={styles.buttonTextStyles}>SEARCH AGAIN</Text>
      </TouchableOpacity>
    </View>
    );
  }

  render() {
    return (
      <View style={[styles.bodyStyles, styles.centeringStyles]}>
        {this.renderTrademark()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyles: {
    marginTop: 50,
    borderWidth: 2,
    borderColor: '#9b59b6',
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTextStyles: {
    fontSize: 24,
    fontWeight: '200'
  },
  centeringStyles: {
    padding: 8,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  bodyStyles: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#1abc9c',
  }
});

const mapStateToProps = (state) => {
  return {
    searchText: state.searchText,
    searchResults: state.searchResults
  };
};

export default connect(mapStateToProps)(Trademark);
