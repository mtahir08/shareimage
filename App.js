/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { View, TouchableOpacity } from 'react-native';
import Share from "react-native-share";
import RNFetchBlob from 'rn-fetch-blob';

export default class App extends Component {

  handleShare = async (image, text, link) => {
    try {
      let contect = `${text}\n${link}`;
      let base64Image = await RNFetchBlob.fetch('GET', image);
      const obj = { message: contect }
      if (base64Image) {
        base64Image = base64Image.base64();
        obj['url'] = 'data:image/png;base64,' + base64Image;
      }
      Share
        .open(obj)
        .catch((err) => { console.log("Share error: ", err) });
    } catch (err) {
      console.log("error: ", err)
    }
  }

  render() {
    let text = "This is a message to share.";
    let image = 'https://rn-was-hare.s3.ap-south-1.amazonaws.com/121ABD01-E4A9-4FAA-B0B3-2146D6AFF827+(1).jpg';
    let link = "https://www.google.com/maps/place/London+Bridge/@51.5066903,-0.0879923,16z/data=!4m8!1m2!2m1!1slondon+bridge!3m4!1s0x4876035159bb13c5:0xa61e28267c3563ac!8m2!3d51.5078788!4d-0.0877321";
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Share Demo</Text>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.text}>Message: {text}</Text>
        <Text numberOfLines={1} style={[styles.text, { width: "80%" }]}>Link: {link}</Text>
        <TouchableOpacity style={styles.btn} onPress={() => this.handleShare(image, text, link)}>
          <Text style={styles.welcome}>Share</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  heading: {
    fontSize: 30,
    marginBottom: 60,
    fontWeight: "bold",
  },
  image: {
    width: 350,
    height: 350
  },
  text: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: "500"
  },
  btn: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#e3e3e3"
  }
});
