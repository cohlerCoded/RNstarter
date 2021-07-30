import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewTwoStyle}></View>
      <View style={styles.viewThreeStyle}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
  },
  viewOneStyle: {
    height: 100,
    width: 100,
    borderWidth: 3,
    borderColor: 'red',
    backgroundColor: 'pink',
  },
  viewTwoStyle: {
    height: 100,
    width: 100,
    borderWidth: 3,
    borderColor: 'purple',
    backgroundColor: 'lavender',
    alignSelf: 'flex-end',
    position: 'absolute',
  },
  viewThreeStyle: {
    height: 100,
    width: 100,
    borderWidth: 3,
    borderColor: 'green',
    backgroundColor: 'lime',
    alignSelf: 'center',
  },
})

export default BoxScreen
