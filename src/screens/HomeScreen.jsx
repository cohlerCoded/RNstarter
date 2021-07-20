import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <Button title='Components Demo' onPress={() => console.log('Pressed')} />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
})

export default HomeScreen
