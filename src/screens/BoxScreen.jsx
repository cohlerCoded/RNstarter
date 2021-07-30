import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child 1</Text>
      <Text style={styles.textTwoStyle}>Child 2</Text>
      <Text style={styles.textThreeStyle}>Child 3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
    alignSelf: 'center',
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: 'red',
    alignSelf: 'flex-start',
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'red',
    position: 'absolute',
    alignSelf: 'stretch',
  },
})

export default BoxScreen
