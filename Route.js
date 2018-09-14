import Detail from './Detail'
import Store from './views/store'
import Home from './views/home'
import {createStackNavigator} from 'react-navigation';

export default createStackNavigator(
  {
    Detail: {
      screen: Detail,
      navigationOptions: () => ({
        title: `详细`,
        headerBackTitle: '返回',
      }),
    },
    Store: {
      screen: Store,
      navigationOptions: () => ({
        title: `门店`
      }),
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#f4511e',
    },
    Home: {
      screen: Home,
      navigationOptions: () => ({
        title: `首页`
      }),
    }

  },
  {
    initialRouteName: 'Home',

  }
);