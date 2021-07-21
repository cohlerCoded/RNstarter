import React from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'

const HomeScreen = ({ navigation }) => {
  const { navigate } = navigation
  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <Button title='Components Demo' onPress={() => navigate('Components')} />
      <Button title='List Demo' onPress={() => navigate('List')} />
      <Button title='Image Demo' onPress={() => navigate('Image')} />
      <Button title='Counter Demo' onPress={() => navigate('Counter')} />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
})

export default HomeScreen
