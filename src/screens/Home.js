import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {allTodo, deleteTodo, delTodo} from '../redux/actions/todo';
import AddTodo from './AddTodo';
import navigationScreen from '../constants/navigationScreen';
import {useIsFocused} from '@react-navigation/native';

const Home = ({navigation}) => {
  const [myTodo, setTodo] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    (async () => {
      let res = await allTodo();
      console.log('state data', res.data);
      setTodo(res.data);
    })();
  }, [isFocused]);

  const delteTodo = id => {
    deleteTodo(id);

    setTodo(currentTodo => {
      return currentTodo.filter(todo => todo._id !== id);
    });
  };

  const editTodo = (id, title, description) => {
    navigation.navigate(navigationScreen.EDITTODO, {
      id: id,
      title: title,
      description: description,
    });
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.boxView}>
        <Text style={styles.title}>{item.title}</Text>
        <Text>{item.description}</Text>
        <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
          <TouchableOpacity
            style={styles.edit}
            onPress={() => editTodo(item._id, item.title, item.description)}>
            <Text style={{color: 'white'}}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.delete}
            onPress={() => delteTodo(item._id)}>
            <Text style={{color: 'white'}}>DELETE</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.root}>
      <Button
        title="add todo"
        onPress={() => navigation.navigate(navigationScreen.ADDTODO)}
      />
      <FlatList
        data={myTodo}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        ItemSeparatorComponent={() => <View style={{marginBottom: 16}} />}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 16,
  },
  boxView: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 16,
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    textTransform: 'capitalize',
  },
  delete: {
    marginTop: 6,
    marginLeft: 6,
    backgroundColor: '#eb2f06',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
  },

  edit: {
    marginTop: 6,
    marginLeft: 6,
    backgroundColor: '#38ada9',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
  },
});
