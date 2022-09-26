import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {postTodo} from '../redux/actions/todo';
import navigationScreen from '../constants/navigationScreen';
import {useDispatch} from 'react-redux';

const AddTodo = ({navigation}) => {
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();

  const dispatch = useDispatch();

  const onPost = () => {
    postTodo(title, desc);
    navigation.navigate(navigationScreen.HOME);
  };

  return (
    <View style={styles.root}>
      <View style={styles.head}>
        <Text style={styles.headTitle}>Add Todo</Text>
      </View>
      <Text style={styles.heading}>Title</Text>
      <TextInput
        placeholder="Title"
        style={styles.title}
        onChangeText={val => setTitle(val)}
      />
      <Text style={styles.heading}>Description</Text>
      <TextInput
        placeholder="Description"
        style={styles.desc}
        multiline={true}
        onChangeText={val => setDesc(val)}
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => onPost()}>
        <Text style={styles.btnText}>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  root: {
    margin: 10,
    flex: 1,
  },
  head: {
    marginVertical: 16,
  },
  headTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  title: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    padding: 16,
    marginBottom: 10,
    fontSize: 16,
    borderColor: '#dcdde1',
    backgroundColor: '#dcdde1',
  },
  desc: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    padding: 16,
    marginBottom: 10,
    height: 200,
    textAlignVertical: 'top',
    lineHeight: 23,
    fontSize: 16,
    borderColor: '#dcdde1',
    backgroundColor: '#dcdde1',
  },
  button: {
    width: 200,
    backgroundColor: '#38ada9',
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  btnText: {
    fontSize: 20,
    color: 'white',
  },
});
