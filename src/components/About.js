import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const About = (props) => {
  return (
    <View style={styles.aboutStyles}>
      <Text style={styles.textStyles}>
        THIS APP WAS BUILT BY NATE ALBA
        nate@thechgrp.com
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => props.navigator.push({ title: 'splashPage' })}
        >
          <Text style={styles.buttonTextStyles}>BACK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 30,
  },
  buttonTextStyles: {
    fontSize: 18,
    fontWeight: '200'
  },
  aboutStyles: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3498db'
  },
  textStyles: {
    fontSize: 18,
    textAlign: 'center'
  }
});

export default About;
