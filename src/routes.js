import { createStackNavigator } from 'react-navigation';

import Home from './views/Home';
import Login from './views/Login';
import Signup from './views/Signup';
import InputViewScreen from './components/InputViewScreen';

const MainNavigator = createStackNavigator({
  Home,
  Login,
  Signup,
},
{
  initialRouteName: 'Home',
  headerMode: 'none'
});

const RootNavigator = createStackNavigator(
  {
    MainNavigator,
    InputView: InputViewScreen
  },
  {
    mode: 'modal',
    headerMode: 'none'
  });

export default RootNavigator;
