import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TrademarkDescription = (props) => {
  const { trademark } = props;
  return (
    <View>
      <View style={styles.contentTileStyles}>
        <View style={styles.borderBottom}>
          <Text style={styles.contentHeaderStyles}>Code:</Text>
        </View>
        <Text style={styles.subTextStyles}>{trademark.code}</Text>
      </View>
      <View style={styles.contentTileStyles}>
        <View style={styles.borderBottom}>
          <Text style={styles.contentHeaderStyles}>Description:</Text>
        </View>
        <Text style={styles.subTextStyles}>{trademark.description}</Text>
      </View>
      <View style={styles.contentTileStyles}>
        <View style={styles.borderBottom}>
          <Text style={styles.contentHeaderStyles}>Registration Date:</Text>
        </View>
        <Text style={styles.subTextStyles}>{trademark.registrationdate}</Text>
      </View>
      <View style={styles.contentTileStyles}>
        <View style={styles.borderBottom}>
          <Text style={styles.contentHeaderStyles}>Serial Number:</Text>
        </View>
        <Text style={styles.subTextStyles}>{trademark.serialnumber}</Text>
      </View>
      <View style={styles.contentTileStyles}>
        <View style={styles.borderBottom}>
          <Text style={styles.contentHeaderStyles}>Word Mark:</Text>
        </View>
        <Text style={styles.subTextStyles}>{trademark.wordmark}</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  subTextStyles: {
    fontWeight: '500',
    fontSize: 14,
    paddingLeft: 15,
    paddingBottom: 6
  },
  contentTileStyles: {
    flexDirection: 'row',
    marginBottom: 4
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#9b59b6',
    paddingBottom: 8
  },
  contentHeaderStyles: {
    fontWeight: '300',
    fontSize: 16
  }
});

export default TrademarkDescription;


// code
// :
// "GS0351"
// description
// :
// "TELEPHONE ANSWERING SERVICES"
// registrationdate
// :
// "11/09/1976"
// serialnumber
// :
// "73085343"
// wordmark
// :
// "HELLO"
