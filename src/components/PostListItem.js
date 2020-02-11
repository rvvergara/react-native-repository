import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import Icon from 'react-native-vector-icons/EvilIcons';
import {Context} from '../context/BlogContext';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
  },
  icon: {
    color: 'red',
    fontSize: 30,
  },
});

const PostListItem = ({post, navigation}) => {
  const {dispatch} = useContext(Context);
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Post', {post})}>
      <View style={styles.row}>
        <Text style={styles.title}>{post.title}</Text>
        <TouchableOpacity
          onPress={() => dispatch({type: 'DELETE_POST', id: post.id})}>
          <Icon name="trash" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default withNavigation(PostListItem);
