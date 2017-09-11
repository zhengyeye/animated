'use strict';
import React, {Component} from 'react';
import Dimensions from 'Dimensions';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableHighlight
} from 'react-native';

let image1 = require('../imgs/1.jpg');
let image2 = require('../imgs/2.jpg');
let image3 = require('../imgs/3.jpg');

let deviceHeight = Dimensions.get('window').height;//Dimensions:获取设备屏幕的宽高
let deviceWidth = Dimensions.get('window').width;

const onButtonPress = () => {
 alert('Button has been pressed!');
};

class CustomButton extends Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#a5a5a5"
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
          xOffset: new Animated.Value(1.0)
        };
      }
      _contentViewScroll(e){
        var offsetX = e.nativeEvent.contentOffset.x; //滑动距离
        var contentSizeWidth = e.nativeEvent.contentSize.width; //scrollView contentSize宽度
        var oriageScrollWidth = e.nativeEvent.layoutMeasurement.width; //scrollView宽度
        if (offsetX + oriageScrollWidth >= contentSizeWidth){
            alert('准备跳转页面~')
        }
    }
  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        bounces={false}
        pagingEnabled={true}
        horizontal={true}
        onScroll={Animated.event(
           [{nativeEvent: {contentOffset: {x: this.state.xOffset}}}]//把contentOffset.x绑定给this.state.xOffset
        )}
        onMomentumScrollEnd  = {this._contentViewScroll} 
        >
        <Animated.Image source={image3}
                          style={{height:deviceHeight,
                                  width:deviceWidth,
                                  opacity:this.state.xOffset.interpolate({//映射到0.0,1.0之间
                                                  inputRange: [0,375],
                                                  outputRange: [1.0, 0.0]
                                                }),}}
                          resizeMode="cover"
                           />
     
        <Image source={image2} style={styles.backgroundImage} />
        <Image source={image1} style={styles.backgroundImage1} onPress={onButtonPress}/>
      </ScrollView>
      
    );
  }
};

var styles = StyleSheet.create({
    contentContainer: {
      width: deviceWidth*3,
      height: deviceHeight,
    },
    backgroundImage: {
      width: deviceWidth,
      height: deviceHeight,
    },
    backgroundImage1: {
      width: deviceWidth,
      height: deviceHeight,
      position: 'relative',
    },
    clickbtn:{
      width:90,
      height:255,
      position: 'absolute',
      bottom: 50,
      left: 0,
      right: 0,
      backgroundColor: 'blue',
    }
});

