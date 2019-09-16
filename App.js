/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={{ uri: 'https://rn-was-hare.s3.ap-south-1.amazonaws.com/121ABD01-E4A9-4FAA-B0B3-2146D6AFF827+(1).jpg' }} />
        <TouchableOpacity onPress={() => { }}>
          <Text style={styles.welcome}>Share</Text>
        </TouchableOpacity>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
