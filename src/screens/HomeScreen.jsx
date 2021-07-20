import React from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <Button title='Components Demo' onPress={() => console.log('Pressed')} />
      <TouchableOpacity onPress={() => console.log('List Pressed')}>
        <Text>List Demo</Text>
        <Text>List Demo</Text>
        <Text>List Demo</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
})

export default HomeScreen
