import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationScreen from '../constants/navigationScreen';
import AddTodo from '../screens/AddTodo';
import EditTodo from '../screens/EditTodo';
import Home from '../screens/Home';
const Stack = createNativeStackNavigator();

export default function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={navigationScreen.HOME} component={Home} />
        <Stack.Screen name={navigationScreen.ADDTODO} component={AddTodo} />
        <Stack.Screen name={navigationScreen.EDITTODO} component={EditTodo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
