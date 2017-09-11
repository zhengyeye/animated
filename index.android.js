/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Easing
} from 'react-native';

// import Guideview from './views/Guideview';//启动页~


let image = require('./imgs/2.jpg');
export default class animated extends Component {
 // 构造
 constructor(props) {
  super(props);
  // 初始状态
  this.state = {
      fadeOutOpacity: new Animated.Value(0),
  };
}

  render() {
    return ( 
      <Animated.View // 可选的基本组件类型: Image, Text, View(可以包裹任意子View)
          style = {{flex: 1,alignItems: 'center',justifyContent: 'center',
                  opacity: this.state.fadeOutOpacity,}}> 
          <Image source = {image}
              style = {{width: 400,height: 400}}/>
      </Animated.View > 
    );
}

    startAnimation() {
      this.state.fadeOutOpacity.setValue(1);
      Animated.timing(this.state.fadeOutOpacity, {
          toValue: 0,
          duration: 2000,
          easing: Easing.linear,// 线性的渐变函数
      }).start();
  }
  componentDidMount() {
      this.startAnimation();
  }
}

const styles = StyleSheet.create({
  
});

AppRegistry.registerComponent('animated', () => animated);
