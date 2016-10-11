import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = ({ children }) => {
  return (
    <View style={styles.headerStyles}>
      <Text style={styles.textStyles}>{ children }</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyles: {
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    height: 65,
    elevation: 2,
    paddingTop: 25,
    position: 'relative',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 }
  },
  textStyles: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});

export default Header;
