import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const PostItem = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text numberOfLines={2} style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default PostItem;

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
    textTransform: 'capitalize',
  },
});
