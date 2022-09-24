import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {patchTodo} from '../redux/actions/todo';
import navigationScreen from '../constants/navigationScreen';

const EditTodo = ({route, navigation}) => {
  const {id, title, description} = route.params;
  const [mytitle, setTitle] = useState();
  const [desc, setDesc] = useState();

  useEffect(() => {
    setTitle(title), setDesc(description);
  }, []);

  const onEditTodo = () => {
    patchTodo(id, mytitle, desc);
    navigation.navigate(navigationScreen.HOME);
  };
  return (
    <View style={styles.root}>
      <Text style={styles.heading}>Title</Text>
      <TextInput
        placeholder="Title"
        style={styles.title}
        value={mytitle}
        onChangeText={val => setTitle(val)}
      />
      <Text style={styles.heading}>Description</Text>
      <TextInput
        placeholder="Description"
        style={styles.desc}
        multiline={true}
        value={desc}
        onChangeText={val => setDesc(val)}
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => onEditTodo()}>
        <Text style={styles.btnText}>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditTodo;

const styles = StyleSheet.create({
  root: {
    margin: 10,
    flex: 1,
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
  },
  button: {
    width: 200,
    backgroundColor: '#5f27cd',
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
