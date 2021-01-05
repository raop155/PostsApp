import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const DetailScreen = ({ navigation }) => {
  const title = navigation.getParam('title');
  const body = navigation.getParam('body');
  const userName = navigation.getParam('userName');

  return (
    <View style={styles.container}>
      <Text>{userName}</Text>
      <Text>{title}</Text>
      <Text>{body}</Text>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
