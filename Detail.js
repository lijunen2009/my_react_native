import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  Button
} from 'react-native';

export default class Detail extends Component{
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>this is detail</Text>
        <Button title="去门店" onPress={()=> this.props.navigation.navigate('Store')}></Button>
        {/*<Button title="首页" onPress={()=>this.props.navigation.navigate('Home')}></Button>*/}
      </View>
    );
  }
}