import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';



class FirstScreen extends React.Component {
  static navigationOptions = {
    title: '第一个页面',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Second', { user: 'Lucy' })}
          title="点击跳转下一个页面"
        />
      </View>
    );
  }
}
export default FirstScreen;