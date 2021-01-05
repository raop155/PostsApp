import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const UserItem = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default UserItem;

const styles = StyleSheet.create({
  container: {
    height: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    width: '100%',
  },
  text: {
    fontSize: 18,
  },
});
