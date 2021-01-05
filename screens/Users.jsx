import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { UserItem } from '../components';

const users = [
  {
    id: 1,
    name: 'Lucciano',
  },
  {
    id: 2,
    name: 'Lalala',
  },
  {
    id: 3,
    name: 'Chanchito Felz',
  },
];

const UsersScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={users}
        keyExtractor={(item) => item.id.toString()}
        // renderItem={({ item }) => <Text>{item.name}</Text>}
        renderItem={({ item }) => <UserItem name={item.name} />}
      />
    </View>
  );
};

export default UsersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  list: {
    width: '100%',
  },
});
