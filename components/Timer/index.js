import React, { Component } from 'react'
import { Text, StyleSheet, View, StatusBar } from 'react-native'
import Button from "../Button";

class Timer extends Component {
  render() {
    return (
      <View style={styles.container}>
          <StatusBar barStyle={"light-content"}/> 
          <View style={styles.upper}>
              <Text style={styles.time}>25:00</Text>
          </View>
          <View style={styles.lower}>
              <Button iconName="play-circle" onPress={this._test}/>
              <Button iconName="stop-circle" onPress={this._test}/>
          </View>
      </View>
    )
  }

  _test = () => {
      alert("test");
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor : "#CE0B24",

    },
    upper:{
        flex:2,
        justifyContent : "center",
        alignItems : "center"
    },
    lower:{
        flex:1,
        justifyContent : "center",
        alignItems : "center"
    },
    time:{
        color:"white",
        fontSize : 100,
        fontWeight : "100"
    }
});

export default Timer;