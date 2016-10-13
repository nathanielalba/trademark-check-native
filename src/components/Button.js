import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const Button = (props) => {

  const searchTerms = () => {
    const { fetchData, searchText } = props;
    fetchData(searchText);
  };

  return (
    <TouchableOpacity
      style={styles.buttonStyles}
      onPress={searchTerms}
    >
      <Text style={styles.textStyles}>SEARCH</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyles: {
    borderWidth: 2,
    borderColor: '#9b59b6',
    width: 130,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15
  },
  textStyles: {
    color: '#9b59b6',
    fontSize: 20,
    fontWeight: '200',

  }
});

export default Button;
