import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { PostItem } from '../components';

const PostsScreen = ({ navigation }) => {
  const userId = navigation.getParam('userId');
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.center}>
          <ActivityIndicator size='large' color='#00ff' />
          <Text style={styles.loading}>Loading...</Text>
        </View>
      ) : (
        <FlatList
          style={styles.list}
          data={posts.filter((post) => post.userId === userId)}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PostItem
              onPress={() => navigation.navigate('Detail', { userId: item.id })}
              {...item}
            />
          )}
        />
      )}
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  center: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    fontSize: 20,
  },
  list: {
    width: '100%',
  },
});
