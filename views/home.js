// import React,{Component} from 'react;'
import React, { Component } from 'react';
import {Button, View, Text} from 'react-native';

export default class Home extends Component{
  render(){
    return (
      <View>
        <View style={{margin:15}}>
          <Button title="去看看" onPress={()=>this.props.navigation.navigate('Detail')}></Button>
        </View>

        <View style={{margin:15}}>
          <Button title="门店" onPress={()=>this.props.navigation.navigate('Store')} ></Button>
        </View>
        <View style={{margin:15}}>
          <Button title="看图去" onPress={()=>this.props.navigation.navigate('MyImage')} ></Button>
        </View>

      </View>

    );
  }
}