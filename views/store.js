import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  Button,
  ActivityIndicator,
  FlatList,
  TouchableHighlight
} from 'react-native';
let data = [
  {
    name: 'jack',
    title: '这是标题1',
    age: '18',
    address: '呼和浩特玉泉区',
    key: '1'
  },
  {
    name: 'bill',
    title: '这是标题2',
    age: '28',
    address: '呼和浩特回民区',
    key: '2'
  },
  {
    name: 'bill',
    title: '这是标题2',
    age: '28',
    address: '呼和浩特回民区',
    key: '2'
  },
  {
    name: 'bill',
    title: '这是标题2',
    age: '28',
    address: '呼和浩特回民区',
    key: '2'
  },
  {
    name: 'bill',
    title: '这是标题2',
    age: '28',
    address: '呼和浩特回民区',
    key: '2'
  },
  {
    name: 'bill',
    title: '这是标题2',
    age: '28',
    address: '呼和浩特回民区',
    key: '2'
  },
  {
    name: 'bill',
    title: '这是标题2',
    age: '28',
    address: '呼和浩特回民区',
    key: '2'
  },
  {
    name: 'bill',
    title: '这是标题2',
    age: '28',
    address: '呼和浩特回民区',
    key: '2'
  },
  {
    name: 'bill',
    title: '这是标题2',
    age: '28',
    address: '呼和浩特回民区',
    key: '2'
  },
  {
    name: 'bill',
    title: '这是标题2',
    age: '28',
    address: '呼和浩特回民区',
    key: '2'
  },
  {
    name: 'bill',
    title: '这是标题2',
    age: '28',
    address: '呼和浩特回民区',
    key: '2'
  },
]
export default class Detail extends Component {
  _onPress(item) {
    console.log(item)
  }
  _renderItem = ({item})=>(
    <TouchableHighlight onPress={() => this._onPress(item)}>
      <View style={styles.cell}>
        <Text>{item.title}</Text>
        <Text>{item.name}</Text>
      </View>
    </TouchableHighlight>
  )
  _itemSeparatorComponent = ()=>(
    <Text style={{height:1,color:'#fff'}}></Text>
  )
  _onEndReached = ()=>{
    let item = {
      name: 'jackappend',
      title: '这是标题--append',
      age: '18',
      address: '呼和浩特玉泉区',
      key: '1'
    }
    setTimeout(function () {
      data.push(item)
    },1000)

  }
  render() {
    return (
      <View>
        <View>
          <FlatList
            data={data}
            renderItem={this._renderItem}
            ItemSeparatorComponent={this._itemSeparatorComponent}
            refreshing={false}
            onEndReached = {this._onEndReached}
            onEndReachedThreshold={0.01}
            onRefresh={()=>{
              alert('refresh')
              console.log('onRefresh')
            }}
          />
        </View>
      </View>
    )
  }
}
const styles = new StyleSheet.create({
  cell:{
    padding:20,
    display: 'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'#ccc',
}
})