import React from 'react';
import {
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';



class SecondScreen extends React.Component {
  static navigationOptions = {
    title: '第二个页面',
    // title: `Chat with ${navigation.state.params.user}`,
  };
  render() {
    // const { params } = this.props.navigation.state;
    return (
      <View>
        {/* <Text>Chat with {params.user}</Text> */}
        <Text>Chat with diyige yemian </Text>
      </View>)
  }
}

export default SecondScreen;