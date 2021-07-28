import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'

const TextScreen = () => {
  const [name, setName] = useState('')
  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        value={name}
        onChangeText={(newName) => setName(newName)}
      />
      <Text>Hi, {name}, nice to meet you!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
})

export default TextScreen
