import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {allTodo, deleteTodo, delTodo} from '../redux/actions/todo';
import navigationScreen from '../constants/navigationScreen';
import {useIsFocused} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

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

        {/* desc,eddit,delete */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{width: '70%'}}>
            <Text>{item.description}</Text>
          </View>

          {/* edit and del button */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => editTodo(item._id, item.title, item.description)}>
              <Entypo name="edit" style={{fontSize: 24, color: '#38ada9'}} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.delete}
              onPress={() => delteTodo(item._id)}>
              <AntDesign
                name="delete"
                style={{fontSize: 24, color: '#eb2f06'}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.root}>
      {/* <Button
        title="add todo"
        onPress={() => navigation.navigate(navigationScreen.ADDTODO)}
      /> */}
      <View style={styles.head}>
        <Text style={styles.headTitle}>My Todo</Text>
      </View>
      <FlatList
        data={myTodo}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        ItemSeparatorComponent={() => <View style={{marginBottom: 0}} />}
      />
      <TouchableOpacity
        style={styles.flotBtn}
        activeOpacity={0.7}
        onPress={() => navigation.navigate(navigationScreen.ADDTODO)}>
        <Text style={styles.flotTxt}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 16,
  },
  head: {
    marginVertical: 16,
  },
  headTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  boxView: {
    borderWidth: 1,
    borderColor: '#dcdde1',
    backgroundColor: '#dcdde1',
    borderRadius: 5,
    padding: 16,
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textTransform: 'capitalize',
  },
  delete: {
    marginLeft: 10,
  },
  flotBtn: {
    width: 60,
    height: 60,
    backgroundColor: '#38ada9',
    borderRadius: 50,
    right: 10,
    alignSelf: 'flex-end',
    bottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    position: 'absolute',
  },
  flotTxt: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
});
